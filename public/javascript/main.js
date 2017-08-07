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
    });    
});
