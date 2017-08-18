//Update stock
var modal_source = document.querySelector("#small_modal").innerHTML;
var modal_template = Handlebars.compile(modal_source);
var modal_error = document.querySelector('#notify_modal');

function update_stock(url, new_stock, updated_id) {
  $.ajax({
        url: "http://localhost:3107/api/shoes/sold/" + updated_id,
        data: {stock : new_stock},
        type: "POST",
        contentType: 'application/x-www-form-urlencoded'
    }).done(function(result){
      if (result.error) {
        //return result.error;
        if (result.error.message.includes("NaN")) {
          log('you must enter a number');
          modal_error.innerHTML = modal_template({title: "Oops! Something went wrong...", type_error: result.error.message, message: 'Stock values must be number and cannot be empty'});
          $(modal_error).modal('show');
        }
      } else if (!result.error){
        log(result);
        modal_error.innerHTML = modal_template({title: "Hooray!", message: 'Stock Updated Successfully'});
        $(modal_error).modal('show');
      }
    });
};
