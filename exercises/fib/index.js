// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n, i = 1, current = 1, prev = 0) {
    // base case (RECURSION)
    // if (n < 2) return n;
    // return fib(n -1) + fib(n - 2);
        if (n === i) {
            return current;
        }
     
        return fib(n, i + 1, current + prev, current);
}


// Solution 1
  // let result = [0, 1];

    // for(let i = 2; i <= n; i++) {
    //     const a = result[result.length - 1];
    //     const b = result[result.length - 2];
    //     result.push(a + b);
    // }
    // return result[result.length - 1]
module.exports = fib;
