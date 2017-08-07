function populate_menus(data) {
    //initialise handlebars-v4
    let menu = document.getElementById('menuList').innerHTML;
    let menuTemplate = Handlebars.compile(menu);

    // $('.searchOptions').innerHTML = menuTemplate({menuList: data});

    let searchOptions = document.querySelector('.searchOptions');

    log(searchOptions);
    
    searchOptions.innerHTML = menuTemplate({menuList: data});
};
