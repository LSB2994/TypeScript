"use strict";
class GoogleCalendar {
    constructor(title, date, location, description, isAllDay) {
        this.title = title;
        this.date = date;
        this.location = location;
        this.description = description;
        this.isAllDay = isAllDay;
    }
    addEvent() {
        throw new Error("Method not implemented.");
    }
    removeEvent() {
        throw new Error("Method not implemented.");
    }
}
