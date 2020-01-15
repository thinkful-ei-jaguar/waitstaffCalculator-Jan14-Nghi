import meal from './meal.js';
import charges from './charges.js';
import earnings from './earnings.js';


function resetEventListener(){
  $('#reset').onClick(() => {
    charges.reset();
    earnings.reset();
  });
}

function main() {
  meal.eventListener();
  charges.render();
  earnings.render();
}

$(main);