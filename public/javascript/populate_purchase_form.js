var purchase_src = document.querySelector('#purchase_form').innerHTML;
var purchase_template = Handlebars.compile(purchase_src);
var purchase_form = $('.purchaseForm');

function populate_purchase_form(shoe, total, qty) {
  log(shoe);
  if(!total) {
    total = calculate_total(shoe.price, 1);
  }
    purchase_form.html(purchase_template({
      id: shoe.id,
      brand: shoe.brand,
      color: shoe.color,
      size: shoe.size,
      price: shoe.price,
      default: qty || 1,
      total: 'R' + total
    }));
}
