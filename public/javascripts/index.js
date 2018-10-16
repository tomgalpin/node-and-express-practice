const GoogleCalendarEvents = {
  getGoogleCalendar: () => {
    /**
     * GET to /calendar-events API
     * @return {function}
     */
    $.getJSON('/calendar-events')
    .done( (data) => {
      LocalStorageEvents.setLocalStorage(data)
      HtmlEvents.buildCalEvents(data)
    })
    .fail( (data) => {
      HtmlEvents.setErrorHtml()
    })
  },
}

const HtmlEvents = {
  buildCalEvents: (calEvents) => {
    /**
    * Parent build HTML function for each events
    * @param {object} calEvents
    * @return {function} HtmlEvents.showCalEvents()
    */
    for (let i = 0; i < calEvents.length; i++) {
      let event = HtmlEvents.buildEvent(calEvents[i])
      $('.cal-events-container').append(event)
    }
    HtmlEvents.showCalEvents()
  },
  buildEvent: (event) => {
    /**
    * Builds HTML for an event
    * @param {object} event
    * @return {string} html
    */
    const title = event.title ? HtmlEvents.buildTitle(event.title) : "";
    const description = event.description ? HtmlEvents.buildDescription(event.description) : "";
    const attendees = event.attendees ? HtmlEvents.buildAttendees(event.attendees) : "";
    const html = "<div class='event'>" + title + description + attendees + "<hr></div>";

    return html;
  },
  buildAttendees: (attendeesList) => {
    /**
    * Parent build HTML function for each attendee
    * @param {object} attendeesList
    * @return {string}
    */
    let attendeesHtml = "";
    for (let i = 0; i < attendeesList.length; i++) {
      let name = attendeesList[i].name;
      let response = attendeesList[i].response;
      let html =  "<div class='attendee'>" +
                    "<p><span>Name:  </span>" + name + "</p>" +
                    "<p><span>Response:  </span>" + response + "</p>" +
                  "</div>";

      attendeesHtml += html;
    }
    return "<div class='attendees-container'><span>Attendees:<hr></span>" + attendeesHtml + "</div>";
  },
  buildTitle: (title) => {
    /**
    * Builds HTML string for title
    * @param {string} title
    * @return {string}
    */
    return "<p class='title'><span>Title:  </span>" + title + "</p>"
  },
  buildDescription: (description) => {
    /**
    * Builds HTML string for description
    * @param {string} description
    * @return {string}
    */
    return "<p class='description'><span>Description:  </span>" + description + "</p>";
  },
  setErrorHtml: () => {
    /**
    * Sets Error message
    * @return {function} jQuery.addClass().html()
    */
    $('.instructions').addClass('red').html('Oops, looks like there was error.  Try again!');
  },
  showCalEvents: () => {
    /**
    * Hides HTML elements and adds Class
    * @return {function} jQuery.hide()
    * @return {function} jQuery.addClass()
    */
    $('.instructions').hide()
    $('.btn-container').hide()
    $('.cal-events-container').addClass('show')
  }
}

const LocalStorageEvents = {
  checkLocalStorage: (name) => {
    /**
    * Checks localStorage for named property
    * and kicks off associated API call or HTML builds
    * @param {string} name
    * @return {function} LocalStorageEvents.getLocalStorage()
    * @return {function} GoogleCalendarEvents.getGoogleCalendar()
    */
    const isInLocalStorage = localStorage.hasOwnProperty(name);

    if (isInLocalStorage) {
      LocalStorageEvents.getLocalStorage(name)
    } else {
      GoogleCalendarEvents.getGoogleCalendar()
    }
  },
  getLocalStorage: (name) => {
    /**
    * Gets Jsonified data from localStorage
    * @param {string} name
    * @return {function} HtmlEvents.buildCalEvents()
    */
    const calEvents = JSON.parse(localStorage.getItem(name))
    HtmlEvents.buildCalEvents(calEvents)
  },
  setLocalStorage: (data) => {
    /**
    * Sets Jsonified data from localStorage
    * @param {object} data
    * @return {function} localStorage.setItem()
    */
    localStorage.setItem('calEvents', JSON.stringify(data));
  },
}

$(document).ready( () => {
  $('.btn-container').click( () => {
    LocalStorageEvents.checkLocalStorage('calEvents')
  });
})