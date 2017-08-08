function search_brand_size(url, brand, size) {
  $.ajax({
    url: url + "brand/" + brand + "/size/" + size,
    type: 'GET'
  }).done(function(results){
      log(results);
  });
};
