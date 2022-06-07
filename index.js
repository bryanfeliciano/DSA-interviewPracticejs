// const fib = (n) => {
//   if (n<=2) return 2;
//   return fib (n-1) + fib (n-2);
// };

// using a js object to reduce o(n) from an exponential time complexity to a n time complexity
const fib = (n,memo={}) => {
  if (n in memo) return memo[n];
  if (n<=2) return 1;
  memo[n] = fib (n-1) + fib (n-2,memo);
  return memo[n]
};
console.log (fib(6));
console.log (fib(7));
console.log (fib(8));

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

const addBinary = (a, b) => (a + b).toString(2);
console.log(addBinary (10,20));