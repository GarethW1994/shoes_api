function update_qty_stock(url, qty, id) {
  $.ajax({
        url: url + "sold/" + id,
        data: {qty : qty},
        type: "POST",
        contentType: 'application/x-www-form-urlencoded'
    }).done(function(result){
      if (result.error) {
        log(result.error);
      } else if (!result.error){
        log(result);
        render_data({prop: 'show all'});
      }
    });
};
