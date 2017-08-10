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

        if (localStorage.count == undefined) {
          localStorage.count = 0;
        } else {
          let count = Number(localStorage.count);
          populate_form(shoeData, count);
        }
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

  $('.next').on('click', function(){
    let count = Number(localStorage.count);
    log(newShoeData.length)
    if (count = newShoeData.length) {
      count = newShoeData.length - 1;
    } else {
      count += 1;
    }
    populate_form(newShoeData, count);
    localStorage.setItem('count', count);
  });

  $('.prev').on('click', function(){
    let count = Number(localStorage.count);
    if (count <= 0) {
      count = 0;
    } else {
      count -= 1;
    }
    populate_form(newShoeData, count);
    localStorage.setItem('count', count);
  });

  $('#search_id').on('change', function(e){
    let search_id = Number(this.value);
    let search_data = [];

    function search(data) {
      return data.id == search_id;
    }

    let result = newShoeData.find(search);
    search_data.push(result);

      if (search_data[0] === undefined) {
        log('shoe not found');
      } else {
        populate_form(search_data, 0);
      }
    });

  function populate_form(data, count) {
    log('populating form...');
    formHolder.innerHTML = formTemplate({
      id: data[count].id,
      brand: data[count].brand,
      color: data[count].color,
      size: data[count].size,
      price: data[count].price,
      in_stock: data[count].in_stock
    });
  }

  var new_stock = 0;
  var updated_id = 0;
  $('.updateForm').on('change', function(e) {
      let get_element = e.target.parentElement.parentElement.parentElement.children[0];
      updated_id = Number(get_element.children[1].children[0].value);
      new_stock = Number(e.target.value);
  });

  $('#update_stock').on('click', function(){
      log(new_stock + " - " + updated_id);
  });

  //call show all function
  showAll({prop: 'show all'});
});
