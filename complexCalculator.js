/**
 * Filename: complexCalculator.js
 * Content: A sophisticated and elaborate calculator with various mathematical operations.
 */

// Basic arithmetic operations
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    throw new Error("Divide by zero error!");
  }
  return num1 / num2;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Advanced functions
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

function fibonacci(n) {
  if (n <= 0) {
    throw new Error("Invalid input! n must be a positive integer.");
  }

  let sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

// Trigonometry functions
function sine(angle) {
  return Math.sin(angle);
}

function cosine(angle) {
  return Math.cos(angle);
}

function tangent(angle) {
  return Math.tan(angle);
}

// Statistical functions
function mean(numbers) {
  if (numbers.length === 0) {
    throw new Error("Empty list! Cannot calculate mean.");
  }

  let sum = numbers.reduce((acc, cur) => acc + cur, 0);
  return sum / numbers.length;
}

function median(numbers) {
  if (numbers.length === 0) {
    throw new Error("Empty list! Cannot calculate median.");
  }

  const sorted = numbers.sort((a, b) => a - b);
  const middleIndex = Math.floor(numbers.length / 2);
  if (numbers.length % 2 === 0) {
    return (sorted[middleIndex - 1] + sorted[middleIndex]) / 2;
  } else {
    return sorted[middleIndex];
  }
}

// Additional helper functions
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  if (num <= 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }

  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }

  return true;
}

function toBinary(num) {
  return (num >>> 0).toString(2);
}

// Test the calculator functions
console.log(add(5, 10)); // Output: 15
console.log(subtract(20, 7)); // Output: 13
console.log(multiply(3, 4)); // Output: 12
console.log(divide(15, 3)); // Output: 5
console.log(power(2, 5)); // Output: 32

console.log(factorial(5)); // Output: 120
console.log(fibonacci(8)); // Output: [0, 1, 1, 2, 3, 5, 8, 13]

console.log(sine(Math.PI / 6)); // Output: 0.5
console.log(cosine(Math.PI / 3)); // Output: 0.5
console.log(tangent(Math.PI / 4)); // Output: 1

console.log(mean([1, 2, 3, 4, 5])); // Output: 3
console.log(median([1, 2, 3, 4, 5])); // Output: 3

console.log(isPrime(17)); // Output: true
console.log(toBinary(42)); // Output: '101010'