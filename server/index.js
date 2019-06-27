const express = require('express');
const http = require('http');
const path = require('path');
const bodyParser = require('body-parser');
const port = 2000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});