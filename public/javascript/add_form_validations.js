var error_src = document.querySelector('#add_form_errors').innerHTML;
var error_template = document.querySelector('.form_errors');
var add_form_template = Handlebars.compile(error_src);

function add_shoe_validations(e){
  if (e.target.name === 'size') {
        let output = number_check(e.target.name, e.target.value);
        error_template.innerHTML = add_form_template( {error: {'size': output}});
        return output;
      } else if (e.target.name === 'price') {
        let output = number_check(e.target.name, e.target.value);
        error_template.innerHTML = add_form_template( {error: {'price': output}});
        return output;
      } else if (e.target.name === 'in_stock') {
        let output = number_check(e.target.name, e.target.value);
        error_template.innerHTML = add_form_template( {error: {'in_stock': output}});
        return output;
  }
}

function number_check(name, value) {
  if (!Number(value)){
    return name + ' must be a number !';
  } else {
    return true;
  };
}
