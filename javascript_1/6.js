function createCalculator() {
    return {
      add: (a, b) => a + b,
      subtract: (a, b) => a - b,
      multiply: (a, b) => a * b,
      divide: (a, b) => a / b
    };
  }
  
  const calc = createCalculator();
  console.log(calc.add(5, 3)); // 8
  console.log(calc.multiply(4, 2)); // 8
  