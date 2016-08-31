"use strict";
var express = require('express');
var router = express.Router();
router.get("/fantasy", (function (req, res) {
    res.send("The Final Fantasy");
}));
router.get("/action", (function (req, res) {
    res.send("Fast n Furious");
}));
module.exports = router;
