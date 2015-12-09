// Find maximum function that can take any array and produce the biggest value in that array.

var array = [47, 98, 0, -23, 4, 87.3, 0.0003, +9];


Array.prototype.findMaximum = function findIt() {
var arrayValue = 0;
for(var i = 0; i < array.length; i++) {
  if (array[i] > arrayValue) {
    arrayValue = array[i];
  }
 }
  return arrayValue;
};

var maximum = array.findMaximum();
console.log(maximum);