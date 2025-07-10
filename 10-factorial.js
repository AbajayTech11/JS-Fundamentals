function factorial(n) {
  if (n < 0) {
    return "Factorial is not defined for negative numbers";
  }
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

const args = process.argv.slice(2);
const number = parseInt(args[0]);

console.log(factorial(isNaN(number) ? 1 : number));

