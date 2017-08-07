const log = console.log;
//DOCUMENT READY
$(document).ready(function(){
    //specify url
    var url = 'http://localhost:3107/api/shoes/';
    //display all the shoe information to the client
    var list = document.getElementById('shoeList');

    //initailising handlebars-v4
    var listSource = document.getElementById('list').innerHTML;
    var shoeTemplate = Handlebars.compile(listSource);

function showAll() {
      //AJAX Call
      //Retrieving all the data
      $.ajax({
          url: url,
          type: 'GET'
      }).done(function(data) {
          log(data);
          let shoeData = data.data.shoes;
          log(shoeData);

          //  log(list);
          list.innerHTML = shoeTemplate({
              shoes: shoeData
          });
          //populate_menus
          populate_menus(shoeData);
      });
}

  $('#textSearch').on('change', function(e){
      let string = e.target.value.toLowerCase();
      let query = string.charAt(0).toUpperCase() + string.slice(1);

      if (query === "") {
        showAll();
      } else {
        //call search_brand function
        search_brand(query, url, list, shoeTemplate);
    }
  });

  $('.searchOptions').on('click', function(e) {
    log(e.target.value);
  });

  //call show all function
  showAll();
});
