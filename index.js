// const fib = (n) => {
//   if (n<=2) return 2;
//   return fib (n-1) + fib (n-2);
// };

// using a js object to reduce o(n)
const fib = (n,memo={}) => {
  if (n in memo) return memo[n];
  if (n<=2) return 1;
  memo[n] = fib (n-1) + fib (n-2,memo);
  return memo[n]
};
console.log (fib(6));
console.log (fib(7));
console.log (fib(8));
