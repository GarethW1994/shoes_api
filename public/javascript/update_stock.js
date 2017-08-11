function update_stock(url, new_stock, updated_id) {
  $.ajax({
        url: url + "sold/" + updated_id,
        data: {stock : new_stock},
        type: "POST",
        contentType: 'application/x-www-form-urlencoded'
    }).done(function(result){
      log(result);
    });
};
