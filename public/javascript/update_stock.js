//Update stock
function update_stock(url, new_stock, updated_id) {
  $.ajax({
        url: url + "update/" + updated_id,
        data: {stock : new_stock},
        type: "POST",
        contentType: 'application/x-www-form-urlencoded'
    }).done(function(result){
      if (result.error) {
        log(result.error);
        if (result.error.message.includes("NaN")) {
          log('you must enter a number');
          modal_error.innerHTML = modal_template({title: "Oops! Something went wrong...", type_error: result.error.message, message: 'Stock values must be number and cannot be empty'});
          $(modal_error).modal('show');
        }
      } else if (!result.error){
        log(result);
        modal_error.innerHTML = modal_template({title: "Hooray!", message: 'Stock Updated Successfully'});
        $(modal_error).modal('show');
        render_data({prop: 'show all'});
      }
    });
};
