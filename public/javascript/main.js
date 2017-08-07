const log = console.log;
//DOCUMENT READY
$(document).ready(function(){
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
      // document.getElementById('#')
      $('#shoeList').innerHTML = '<li>' + 'test' + '</li>';
    });
});
