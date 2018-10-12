var express = require('express');
var router = express.Router();
var calendar_events_controller = require('../controllers/calendarEventsController');
// Home page route.
router.get('/', function (req, res) {
  res.send('calendar-events home I think page');
})

// GET /calendar-events
router.get('/calendar-events', calendar_events_controller.getLastTen );

module.exports = router;
