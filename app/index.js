'use strict';

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const param = {
    "msg": "Hello World!"
  };
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.send(param);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
