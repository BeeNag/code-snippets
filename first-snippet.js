// Turning an array into an object (the second function reverses the array).

var letters = ['a', 'b', 'c', 'd', 'e'];

var obj = {};
var key;
for (i = 0; i < letters.length; i++) {
  key = letters[i];
  obj[key] = i;
}

console.log(obj);

var letters = ['a', 'b', 'c', 'd', 'e'];

var obj = {};
var key;
for (i = 0; i < letters.length; i++) {
  key = letters[i];
  obj[key] = (letters.length - 1) - i;
}

console.log(obj);