//Update stock
var formSource = document.querySelector("#form").innerHTML;
var formTemplate = Handlebars.compile(formSource);
var formHolder = document.querySelector('.updateForm');

function populate_form(data, count, error) {
  let sorted_data = data.sort(compareValues('id'));
  log(sorted_data.length + " " + count)
  if (count > sorted_data.length) {
     count = 0;
  }

  formHolder.innerHTML = formTemplate({
    id: data[count].id,
    brand: data[count].brand,
    color: data[count].color,
    size: data[count].size,
    price: data[count].price,
    in_stock: data[count].in_stock,
    error: error
  });
}
