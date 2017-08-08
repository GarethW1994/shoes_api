const log = console.log;
//DOCUMENT READY
$(document).ready(function(){
    Handlebars.registerPartial('index', '{{name}}')
    //specify url
    var url = 'http://localhost:3107/api/shoes/';
    //display all the shoe information to the client
    var list = document.getElementById('shoeList');

    //initailising handlebars-v4
    var listSource = document.getElementById('list').innerHTML;
    var shoeTemplate = Handlebars.compile(listSource);

    var newShoeData = [];
    var counter = 0;

function showAll(prop) {
      let property = prop.prop;
      //AJAX Call
      //Retrieving all the data
      $.ajax({
          url: url,
          type: 'GET'
      }).done(function(data) {
          log('Fetched All Shoes...')
          log(data);
      }).then(function(data){
        let shoeData = data.data.shoes;

        newShoeData = shoeData;
        //  log(list);
        list.innerHTML = shoeTemplate({
            shoes: shoeData
        });

        if (property !== "") {
          populate_menus(shoeData);
        }

        populate_form(shoeData);
      });
};

  $('#textSearch').on('change', function(e){
      let string = e.target.value.toLowerCase();
      let query = string.charAt(0).toUpperCase() + string.slice(1);

      if (query === "") {
        showAll({prop: query});
      } else {
        //call search_brand function
        search_brand(query, url, list, shoeTemplate);
    }
  });

  $('.searchOptions').on('click', function(e) {
      let brand = this.children.brand.value;
      let size = this.children.size.value;
      //search logic
      if (brand !== 'all' && size == 'all') {
        search_brand(brand, url, list, shoeTemplate);
      } else if (size !== 'all' && brand == 'all'){
        search_size(size, url, list, shoeTemplate);
      } else if (brand !== 'all' && size !== 'all') {
        search_brand_size(url, brand, size, list, shoeTemplate);
      } else{
        showAll({prop: ""});
      };
  });

  //Update stock
  var formSource = document.querySelector("#form").innerHTML;
  var formTemplate = Handlebars.compile(formSource);
  var formHolder = document.querySelector('.updateForm');


  function populate_form(data, counter) {
    log('populating form...');
    log(counter);
    if (counter == undefined) {
      formHolder.innerHTML = formTemplate({
        id: data[0].id,
        brand: data[0].brand,
        color: data[0].color,
        size: data[0].size,
        price: data[0].price,
        in_stock: data[0].in_stock
      });
    }
  }

  var next = document.querySelector('.next');
  //call show all function
  showAll({prop: 'show all'});

  $('.next').on('click', function(){
    log('you clicked next');
    // counter =+ 1;
    // log(counter);
    // populate_form(counter);
  });
});
