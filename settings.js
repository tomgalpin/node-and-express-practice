const KEYFILE = '<yourpem.pem>';
const SERVICE_ACCT_ID = '<your service account id>';

const CALENDAR_URL = '<your calendar url>';
const CALENDAR_ID = {
  'primary': 'tomgalpin@gmail.com',
  'calendar-1': 'calendar1@group.calendar.google.com',
  'calendar-2': 'calendar2@group.calendar.google.com'
};
const TIMEZONE = 'UTC+08:00';

module.exports.calendarUrl = CALENDAR_URL;
module.exports.serviceAcctId = SERVICE_ACCT_ID;
module.exports.calendarId = CALENDAR_ID;
module.exports.keyFile = KEYFILE;
module.exports.timezone = TIMEZONE;

// Sample CalendarAPI settings
const SERVICE_ACCT_ID = '...@...iam.gserviceaccount.com';
const KEYFILE = 'your-google-api-keyfile.pem';        //path to pem key
const TIMEZONE = 'UTC+08:00';
const CALENDAR_ID = {
  'primary': '...@gmail.com',
  'calendar-1': 'calendar1@group.calendar.google.com',
  'calendar-2': 'calendar2@group.calendar.google.com'
};

module.exports.serviceAcctId = SERVICE_ACCT_ID;
module.exports.keyFile = KEYFILE;
module.exports.timezone = TIMEZONE;
module.exports.calendarId = CALENDAR_ID;