// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Use the some Method to Check that Any Elements in an Array Meet a Criteria</h1>`;

/** TODO:
 * Use the some method inside the checkPositive function to check if any element in arr is positive.  The function should return a Boolean value.
 * 
 function checkPositive(arr) {
   // Only change code below this line
 
   // Only change code above this line
 }
 
 checkPositive([1, 2, 3, -4, 5]);
 */

function checkPositive(arr) {
  // Only change code below this line
  return arr.some((val) => val >= 0);
  // Only change code above this line
}

console.log(checkPositive([1, 2, 3, -4, 5]));
console.log(checkPositive([1, 2, 3, 4, 5]));
console.log(checkPositive([-1, -2, -3, -4, -5]));
