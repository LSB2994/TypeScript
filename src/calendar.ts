interface Calendar {
    title: string, 
    date: Date, 
    location?: string, 
    description?: string, 
    isAllDay?: boolean
    
    addEvent(): void;
    removeEvent(): void;

    


}

interface CloudCalendar extends Calendar {
    sync(): void;
}

class GoogleCalendar implements Calendar{
    title: string;
    date: Date;
    location?: string | undefined;
    description?: string | undefined;
    isAllDay?: boolean | undefined;

    constructor(title: string, date: Date, location?: string, description?: string, isAllDay?: boolean) {
        this.title = title;
        this.date = date;
        this.location = location;
        this.description = description;
        this.isAllDay = isAllDay;
    }
    addEvent(): void {
        throw new Error("Method not implemented.");
    }
    removeEvent(): void {
        throw new Error("Method not implemented.");
    }
}