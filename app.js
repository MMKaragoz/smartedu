const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('INDEX PAGE');
});

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}.`);
});
