//initialise handlebars-v4
var menu = document.getElementById('menuList').innerHTML;
var menuTemplate = Handlebars.compile(menu);

function populate_menus(data) {
  let sizes = [];
  let brands = [];
    let unique = function(data) {
      let unique_sizes = {};
      let unique_brands = {};
        for (i in data) {
          if (unique_sizes[data[i].size] === undefined) {
            unique_sizes[data[i].size] = 0;
            sizes.push(data[i].size);
            sizes.sort();
          }
          if (unique_brands[data[i].brand] === undefined) {
            unique_brands[data[i].brand] = 0;
            brands.push(data[i].brand);
            brands.sort();
          }
        }
    }
    //call function;
    unique(data);
    let searchOptions = document.querySelector('.searchOptions');
    searchOptions.innerHTML = menuTemplate({brand: brands, size: sizes});
};
