//initialise handlebars-v4
var menu = document.getElementById('menuList').innerHTML;
var menuTemplate = Handlebars.compile(menu);

function populate_menus(data) {
    // $('.searchOptions').innerHTML = menuTemplate({menuList: data});

    let searchOptions = document.querySelector('.searchOptions');

    log(searchOptions);

    searchOptions.innerHTML = menuTemplate({menuList: data});
};
