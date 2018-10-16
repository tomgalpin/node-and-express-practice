# tom's node and express practice using Google Calendar API
A simple calendar syncing system that keeps a local cache of calendar events that sync to Google Calendar API.

## Description
Devise and implement a simple cache system that allows an endpoint that serves a list of calendar events from a logged in user's Google calendar while limiting the number of API hits to Google Calendar by holding a local cache of events.

## Tutorials and Help
1.  Followed MDN's Node.js with Express tutorial, for the most part.
    * Used Express scafolding mentioned there.
    * https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs
2.  Google Calendar API with Node.js followed from here:
    * https://developers.google.com/calendar/quickstart/nodejs
3.  To run locally, you'll need to follow the steps outlined in the quickstart guide, to create the following files:
    * `credentials.json` and `token.js`
    * https://developers.google.com/calendar/quickstart/nodejs

## Structure
.
├── bin
│   └── www                        # Parent file created through Express.js scaffolding
├── controllers
│   └── calendarEventsController  # Controller to GET calendar events from Google API, auth, etc..
├── public
│   ├──javascript
│   └── stylesheets
├── routes
├── views
├── app.js                        # Node.js/Express parent file.
├── credentials.json              # Google Calendar API creds
├── package.json
├── README.md
└── token.json                    # Google Calendar API tokens

## Running the Project
1.  Remember to follow the Google Calendar API instructions to set up your `credentials.json` and `token.js` files
2. Install node.js and npm
3. CD into directory and run `npm install`
4. Run `DEBUG=node-and-express-practice:* npm run devstart`
5. Go to browser and navigate to http://localhost:3000/

## Guidelines
1. The cache can be built in any way you see fit as long as it persistants beyond server restarts.
2. Response of GET request should return JSON

## Requirements
The server should respond to the following request via JSON in the format of the sample output below

### GET /calendar-events
* If the user is not logged in, redirect to login page for Google Calendar to authorize user. After auth, redirect to /calendar-events endpoint
* Show a list of upcoming calendar events with event data:
  * Event Title
  * Event Description
  * List of Attendees (with attendance reponse)

#### GET Params
| Params  | Required | Description |
| ------- | -------- | ----------- |
| startDate | false  | ISO date format string. If present, bounds all events returned by the query to have a starting event datetime >= to value. (i.e. '2017-01-17T03:36:22.321Z') |
| endDate   | false  | ISO date format string. If present, bounds all events returned by the query to have a starting event datetime <= to value. (i.e. '2017-01-17T03:36:22.321Z') |

#### Sample Output
```javascript
{
 "status": 200,
 "query": {
   "startDate": "2017-01-17T18:02:07.122Z",
   "endDate": null,
 },
 "results": {
   "events": [
     {
      "id": "aGNpNmswYjF0aHZnZXNicGNnbWlndWduNGsgamFzcGVyQGdvb2R0aW1lLmlv",
      "status": "confirmed",
      "created": "2017-01-11T18:02:07.122Z",
      "updated": "2017-01-12T02:19:23.690Z",
      "summary": "Debrief Session",
      "description": "Secret meeting in the training docks.",
      "location": string,
      "creator": {
        "id": "F0aHZnZXNicGNnbWlndWduNGsgamFzcGVyQGd",
        "email": "bernard.lowe@delos.com",
        "displayName": "Bernard Lowe",
        "self": true
      },
      "organizer": {
        "id": "F0aHZnZXNicGNnbWlndWduNGsgamFzcGVyQGd",
        "email": "bernard.lowe@delos.com",
        "displayName": "Bernard Lowe",
        "self": true
      },
      "startDate": "2017-01-18T18:02:07.122Z"
      "endDate": "2017-01-18T19:02:07.122Z"
      "attendees": [
        {
          "id": "NnbWlndWduNGsgamFzcGVyQGdvb2R",
          "email": "dolores@sweetwater.gov",
          "displayName": "Dolores Abernathy",
          "organizer": boolean,
          "self": boolean,
          "resource": boolean,
          "optional": boolean,
          "responseStatus": string,
          "comment": string,
          "additionalGuests": integer
        }
      ]
    },
    {
     // ... additional events
    }
   ]
 }
}
```
