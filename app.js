const express = require('express');
const mongoose = require('mongoose');
const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');

const app = express();

// Connect DB
mongoose
  .connect('mongodb://localhost/smartedu-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('DB Connected Successfully.');
  });

// Template Engine
app.set('view engine', 'ejs');

// Middlewares
app.use(express.static('public'));

// Routes
app.use('/', pageRoute);
app.use('/courses', courseRoute);

const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}.`);
});
