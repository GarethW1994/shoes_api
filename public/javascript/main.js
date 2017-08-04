$(document).ready(function(){
    const log = console.log;

    $.ajax({url: "http://localhost:3107/api/shoes", success: function(result){
        log(result);
    }});
});
