const sum = require('./index');

if (sum(1, 2) !== 3) {
  console.error('Test failed');
  process.exit(1);
} else {
  console.log('Test passed');
}
