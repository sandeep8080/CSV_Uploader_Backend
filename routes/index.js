var express = require('express');
var router = express.Router();
const csvController = require('../controller/csvController');

router.get('/', function (req, res) {
  res.send('Hi');
});

router.post('/saveCSV', csvController.saveCSVData);
router.get('/getCSV',csvController.getData);
router.get('/resetCSVData',csvController.resetData);

module.exports = router;
