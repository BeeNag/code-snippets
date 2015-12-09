// Simple recursion to find the sum of all the numbers in any given number.

function addNum(sum) {
  if (sum === 1) {
    return 1;
  }
  return sum + addNum(sum - 1);
}

console.log(addNum(10));