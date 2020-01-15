let mealCount = -1;
let totalTips = 0.00;
let avg = 0;

function reset() {
  mealCount = 0;
  totalTips = NaN;
  avg = NaN;
  $('#earnings').html(html());
}

function html() {
  // Generates html
  avg = (totalTips/mealCount).toFixed(2);
  return `
  <h2>My Earnings Info</h2>
                <div class='content right-content'>
                    <p>Tip Total: <span>${isNaN(totalTips) ? 0.00 : totalTips.toFixed(2)}</span></p>
                    <p>Meal Count: <span>${mealCount === 0 ? 0 : mealCount}</span></p>
                    <p>Average Tip Per Meal: <span>${isNaN(avg) ? 0 : avg}</span></p>
                </div>
  `;
}
function render(tip) {
  // Shows html
  mealCount++;
  // If this is the first tip received, set value to numeric 0
  isNaN(totalTips) ? totalTips = 0.00 : null;
  totalTips += tip;
  $('#earnings').html(html());
}

export default {
  render,
  reset
};