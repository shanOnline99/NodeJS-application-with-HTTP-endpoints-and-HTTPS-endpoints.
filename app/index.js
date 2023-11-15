const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, this message from HTTP endpoint!');
});

app.listen(port, () => {
  console.log(`HTTP server is running at http://localhost:${port}`);
});
