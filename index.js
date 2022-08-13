'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const param = {
    "msg": "Hello World!"
  };
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(param);
});

app.listen(8080, '0.0.0.0');
