var url_src = document.querySelector('#error_url').innerHTML;
var id_src = document.querySelector('#error_id').innerHTML;
var price_src = document.querySelector('#error_price').innerHTML;
var stock_src = document.querySelector('#error_stock').innerHTML;
var url_template = Handlebars.compile(url_src);
var id_template = Handlebars.compile(id_src);
var price_template = Handlebars.compile(price_src);
var stock_template = Handlebars.compile(stock_src);

var output = "";
var url_form = document.querySelector('#url_form');
function add_shoe_validations(e){
  if (e.target.name === 'url_img' || e.target.name === 'file') {
        let value = e.target.value;
        let jpg = value.includes('.jpg');
        let png = value.includes('.png');
        if (jpg !== true && png !== true) {
          output = 'Image format not supported. Must be .png or .jpg!';
          $('#url_form').html(url_template({error: {'url': output}}));
        } else {
          $('#url_form').html("");
        };
      } else if(e.target.name === 'id') {
          output = number_check(e.target.name, e.target.value);
          if (output !== true) {
            $('#id_form').html(id_template({error: {'id': output}}));
          } else {
            $('#id_form').html("");
            let id = parseInt(e.target.value);
            newShoeData.forEach(function(shoe) {
              let result = id === shoe.id;
                if (result === true) {
                  output = "ID already exist in database. Use a unique ID!";
                  $('#id_form').html(id_template({error: {'id': output}}));
                }
            });
          }
      } else if (e.target.name === 'price') {
        let output = number_check(e.target.name, e.target.value);
        if (output !== true) {
          $('#price_form').html(price_template({error: {'price': output}}));
        } else {
          $('#price_form').html("");
        }
      } else if (e.target.name === 'in_stock') {
        let output = number_check(e.target.name, e.target.value);
        if (output !== true) {
          $('#stock_form').html('asldjlfaksjdlf');
          $('#stock_form').html(stock_template({error: {'stock': output}}));
        } else {
          $('#stock_form').html("");
        }
  }
}

function number_check(name, value) {
  if (!Number(value)){
    return name + ' must be a number !';
  } else {
    return true;
  };
}
