$(document).ready(function(){
    const log = console.log;
    $.ajax({
      url: 'http://localhost:3107/api/shoes/',
      type: 'GET'
    }).done(function(data){
      log(data);
    });
});
