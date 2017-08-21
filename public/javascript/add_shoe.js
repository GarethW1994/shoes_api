function add_shoe(shoe) {
  $.ajax({
    url: url,
    data: {data: shoe},
    type: 'POST',
    contentType: 'application/x-www-form-urlencoded'
  }).then(function(err, result){
    if (err) {
    log(err);
    }
    log(result);
    if (result.status === 200) {
      return 'success';
    };
  });
}
