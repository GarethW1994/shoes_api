const log = console.log;
//specify url
const url = 'http://localhost:3107/api/shoes/';
//display all the shoe information to the client
var list = document.getElementById('shoeList');
//initailising handlebars-v4
var listSource = document.getElementById('list').innerHTML;
var shoeTemplate = Handlebars.compile(listSource);

var newShoeData = [];
var new_stock = 0;
var updated_id = 0;
var shoe_obj = {};
const cb = function(err, data) {if (err) {return err}};

function get_data(cb) {
  //Retrieving all the data
   return $.get(url, cb);
}

var render_data = function(prop) {
        let shoeData = get_data(cb);
          shoeData.then(function(data) {
            log(data);

          if (data !== undefined) {
            let shoe_data = data.data.shoes;
            let sorted_data = shoe_data.sort(compareValues('brand'));
            newShoeData = shoe_data;
            //Populate Shoes in list on html
            list.innerHTML = shoeTemplate({
              shoes: sorted_data
            });

            //check if the prop param is not equal to empty string
            if (prop.prop !== "") {
              populate_menus(sorted_data);
            }
            if (localStorage.count == undefined) {
              localStorage.count = 0;
            } else {
              let count = Number(localStorage.count);
              if (count > shoe_data.length) {
                count = shoe_data.length - 1;
                populate_form(shoe_data, count);
              }
            }
          }
          });
};
  //call render all function
  var render = render_data({prop: 'show all'});
