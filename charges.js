/* eslint-disable use-isnan */
let subtotal;
let tips;

function html() {
  const total = (subtotal+tips).toFixed(2);
  // Creates html
  return `<h2>Customer Charges</h2>
                <div class='content right-content'>
                    <p>Subtotal $ ${isNaN(subtotal) ? 0.00 : subtotal}</p>
                    <p>Tip $ ${isNaN(tips) ? 0.00 : tips}</p>
                    <p>Total $ ${isNaN(total) ? 0.00 : total}</p>
                </div>`;
}

function reset() {
  subtotal = NaN;
  tips = NaN;
  $('#charges').html(html());
}

function render(total,tip) {
  // Shows html
  subtotal = parseFloat(total);
  tips = parseFloat(tip);
  $('#charges').html(html());
}

export default {
  render,
  reset
};