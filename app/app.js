'use strict';

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// ライブラリ読み込み
let express = require('express');
let app = express();
let bodyParser = require('body-parser');

// body-parserの設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ルーティングで処理を振り分け
let router = require('./routes/v1/');
app.use('/api/v1/', router);

app.listen(PORT, HOST);
console.log('listen on port ' + PORT );
