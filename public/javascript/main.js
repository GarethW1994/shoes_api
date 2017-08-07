const log = console.log;
//DOCUMENT READY
$(document).ready(function(){
    //initailising handlebars-v4
    var listSource = document.getElementById('list').innerHTML;
    var shoeTemplate = Handlebars.compile(listSource);

    //AJAX Call
    //Retrieving all the data
    $.ajax({
      url: 'http://localhost:3107/api/shoes/',
      type: 'GET'
    }).done(function(data){
     log(data);
      let shoeData = data.data.shoes;
      log(shoeData);

      //display all the shoe information to the client
        let list = document.getElementById('shoeList');
      //  log(list);
       list.innerHTML = shoeTemplate({shoes: shoeData});
    });
});
