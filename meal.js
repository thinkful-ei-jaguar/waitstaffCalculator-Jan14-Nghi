import charges from './charges.js';
import earnings from './earnings.js';

let subtotal;
let tips;

function calculate(base, tax, tip) {
  // Calculates subtotal and total
  subtotal = (base * (1 + ( tax / 100 ))).toFixed(2);
  tips = (base * ( tip / 100 )).toFixed(2); 
  charges.render(subtotal, tips);
  earnings.render(parseFloat(tips));
}

function submit(e) {
  // Gets values and stores them on submit
  e.preventDefault();
  const base = $('#base').val();
  const tax = $('#tax').val();
  const tip = $('#tip').val();
  calculate(base, tax, tip);
  e.target.reset();
}
  
function submitEventListener() {
  // Listens to when form gets submitted
  $('form').on('submit', (e) => {
    submit(e);
  });
}

function htmlForm() {
  // Creates form
  return `<section id='meal'>
    <h2>Enter the Meal Details</h2>
    <div class='content left-content'>
        <form id='mealDetails'>
            <label for='base'>Base Meal Price: $</label>
                <input id='base' type="number" min="0" step=".01"/>
                <br />
            <label for='tax'>Tax Rate: %</label>
                <input id='tax' type="number" min="0" step=".01" />
                <br />
            <label for='tip'>Tip Percentage: %</label>
                <input id='tip' type="number" min="0" step=".01" />
                <br />
            <button type='submit'>Submit</button>
            <button type='reset'>Cancel</button>
        </form>
    </div>
</section>`;
}

function render() {
  // Shows form
  $('#left').append(htmlForm);
}

function eventListener() {
  render();
  submitEventListener();
}

export default {
  eventListener,
  subtotal,
  tips
};