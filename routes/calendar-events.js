const express = require('express');
const router = express.Router();
const calendar_events_controller = require('../controllers/calendarEventsController');

// /calendar-events
router.get('/', function (req, res) {
  calendar_events_controller.readCal()
  res.send(calendar_events_controller.eventListings)
})


module.exports = router;
