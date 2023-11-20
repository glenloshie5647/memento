/*
Filename: ComplexCode.js

This code implements a complex algorithm for finding prime numbers using the Sieve of Eratosthenes.
It also includes a method for checking if a given number is a perfect number.
The algorithm uses various advanced techniques and optimizations to improve performance.

Note: Please execute this code using Node.js in a command-line environment.
*/

// Sieve of Eratosthenes algorithm for finding prime numbers
function sieveOfEratosthenes(limit) {
  const primes = new Array(limit + 1).fill(true);
  primes[0] = primes[1] = false;

  for (let num = 2; num <= Math.sqrt(limit); num++) {
    if (primes[num]) {
      for (let multiple = num * num; multiple <= limit; multiple += num) {
        primes[multiple] = false;
      }
    }
  }

  const primeNumbers = [];

  for (let i = 0; i <= limit; i++) {
    if (primes[i]) {
      primeNumbers.push(i);
    }
  }

  return primeNumbers;
}

// Function to check if a number is a perfect number
function isPerfectNumber(number) {
  const divisors = [1];
  const sqrt = Math.sqrt(number);

  for (let divisor = 2; divisor <= sqrt; divisor++) {
    if (number % divisor === 0) {
      divisors.push(divisor);

      if (divisor !== sqrt) {
        divisors.push(number / divisor);
      }
    }
  }

  const sum = divisors.reduce((acc, curr) => acc + curr, 0);
  return sum === number;
}

// Generate prime numbers up to 1000
const primeNumbers = sieveOfEratosthenes(1000);
console.log(`Prime numbers up to 1000: ${primeNumbers.join(', ')}`);

// Check if 28 is a perfect number
const isPerfect = isPerfectNumber(28);
console.log(`Is 28 a perfect number? ${isPerfect}`);

// More complex code can be added below.