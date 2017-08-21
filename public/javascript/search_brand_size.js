function search_brand_size(url, brand, size, list, shoeTemplate) {
  $.ajax({
    url: url + "brand/" + brand + "/size/" + size,
    type: 'GET'
  }).done(function(results){
    let searchResults = results.data;
    log(results);
    list.innerHTML = shoeTemplate({shoes: searchResults});
  });
};
