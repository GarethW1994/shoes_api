function update_stock() {
  $.post(url+'/sold/'+id, function(err, result){
    if (err) return err;
  });
};
