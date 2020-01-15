import meal from './meal.js';
import charges from './charges.js';
import earnings from './earnings.js';



function main() {
  meal.eventListener();
  charges.render();
}

$(main);