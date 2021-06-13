const express = require('express');
const indexRouter = require('./routes/index');
const cors = require('cors');
var app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

app.use('/', indexRouter);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});

module.exports = app;
