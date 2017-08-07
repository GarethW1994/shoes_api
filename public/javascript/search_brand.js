function search_brand(brand, url, list, shoeTemplate) {
  $.ajax({
    url: url + 'brand/' + brand,
    type: 'GET'
  }).done(function(results){
    log(results)
    let searchResults = results.data;

    list.innerHTML = shoeTemplate({shoes: searchResults});
  });
}
