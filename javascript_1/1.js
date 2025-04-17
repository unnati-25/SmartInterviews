function formatCurrency(amount, currencyCode) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode
  }).format(amount);
}

console.log(formatCurrency(1234567.89, 'USD')); // $1,234,567.89
console.log(formatCurrency(1234567.89, 'INR')); // ₹12,34,567.89
console.log(formatCurrency(1234567.89, 'EUR')); // €1,234,567.89
