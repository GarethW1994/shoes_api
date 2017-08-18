function search_size(size, url, list, shoeTemplate) {
  $.ajax({
    url: url + 'size/' + size,
    type: 'GET'
  }).done(function(results){
    let searchResults = results.data;

    list.innerHTML = shoeTemplate({shoes: searchResults});
  });
}
