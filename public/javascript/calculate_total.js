function calculate_total(price, qty) {
  let total = parseFloat(price) * parseInt(qty);
  return total.toFixed(2);
  log(total);
}
