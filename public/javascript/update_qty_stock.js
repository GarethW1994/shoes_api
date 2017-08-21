function update_qty_stock(url, qty, id) {
  $.ajax({
        url: "https://shoes-catalogue-api.herokuapp.com/api/shoes/sold/" + id,
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
