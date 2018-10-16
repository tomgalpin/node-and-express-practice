var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {
    title: 'Google Calendar API',
    description: 'click button to auth your Google Calendar',
    btnText: 'Auth Google API'
  });
});

module.exports = router;
