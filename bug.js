const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello from Express!');
  }).catch(err => {
    console.error('Error:', err);
    // Here's the problem: we're only logging the error to the console,
    // but we're not sending an appropriate error response to the client.
  });
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate a random error
    if (Math.random() < 0.5) {
      reject(new Error('Something went wrong!'));
    } else {
      resolve();
    }
  });
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});