function update_qty_stock(url, qty, id) {
  $.ajax({
        url: url + "sold/" + id,
        data: {qty : qty},
        type: "POST",
        contentType: 'application/x-www-form-urlencoded'
    }).done(function(result){
      //.style.display = 'none';
      if (result.error) {
        log(result.error);
      } else if (!result.error){
        log(result);

        purchase_form[0].classList.remove('show');
        modal_error.innerHTML = modal_template({title: "Hooray!", message: 'Shoe Successfully Purchased!'});
        $(modal_error).modal('show');
        purchase_form[0].style.margin = '100px 0';
        render_data({prop: 'show all'})
        $(modal_error).on('click', function() {
          $('#purchase_close').trigger('click');
          purchase_form[0].style.margin = '0';
        })
      }
    });
};
