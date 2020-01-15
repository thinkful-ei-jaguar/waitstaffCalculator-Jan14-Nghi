

function html(subtotal, tips) {
  // Creates html
  return `<h2>Customer Charges</h2>
                <div class='content right-content'>
                    <p>Subtotal $ ${subtotal !== undefined ? subtotal : 0.00}</p>
                    <p>Tip $ ${tips !== undefined ? tips : 0.00}</p>
                    <p>Total $ ${isNaN(subtotal+tips) ? 0.00 : subtotal+tips }</p>
                </div>`;
}

function render(subtotal,tips) {
  // Shows html
  $('#charges').append(html(subtotal,tips));
}

export default {
  render
};