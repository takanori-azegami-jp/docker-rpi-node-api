'use strict';

// index.jsでの振り分け
var express = require('express');
var router = express.Router();

//振り分けするメソッドを記述する
router.use('/helloworld-aaa', require('./helloworldAAA.js'));
router.use('/helloworld-bbb', require('./helloworldBBB.js'));

module.exports = router;
