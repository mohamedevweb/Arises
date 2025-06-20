export interface GoogleCalendarEvent {
    id: string
    summary: string
    description?: string
    start: {
        dateTime: string
        timeZone: string
    }
    end: {
        dateTime: string
        timeZone: string
    }
    colorId?: string
    status: string
}

export interface GoogleCalendarResponse {
    kind: string
    items: GoogleCalendarEvent[]
}


export interface CalendarEventProps {
    event: {
        id: string
        title: string
        start: string
        end: string
        color: string
        width: number
        leftOffset: number
        topOffset: number
        height: number
        isStartCell: boolean,
        type: string,
        originalSlot: {
            choice: boolean
        }
    }
    formatTime: (date: string) => string
}

export interface CalendarEventEmits {
    dragstart: [event: DragEvent, calendarEvent: any]
    dragend: [event: DragEvent]
}

export interface CalendarCellProps {
    date: string
    hour: number
    isToday: boolean
    events: any[]
    dropPreview: {
        date: string
        hour: number
        minutes: number
        topPercent: number
        height: number
        newStart: string
        newEnd: string
    } | null
    draggedEvent: any
    formatTime: (date: string) => string
}

export interface CalendarCellEmits {
    dragover: [event: DragEvent, date: string, hour: number]
    dragleave: [event: DragEvent]
    drop: [event: DragEvent, date: string, hour: number]
    eventDragstart: [event: DragEvent, calendarEvent: any]
    eventDragend: [event: DragEvent]
}



export const hours = [
    { value: '00:00', label: '12:00 AM' },
    { value: '00:15', label: '12:15 AM' },
    { value: '00:30', label: '12:30 AM' },
    { value: '00:45', label: '12:45 AM' },
    { value: '01:00', label: '1:00 AM' },
    { value: '01:15', label: '1:15 AM' },
    { value: '01:30', label: '1:30 AM' },
    { value: '01:45', label: '1:45 AM' },
    { value: '02:00', label: '2:00 AM' },
    { value: '02:15', label: '2:15 AM' },
    { value: '02:30', label: '2:30 AM' },
    { value: '02:45', label: '2:45 AM' },
    { value: '03:00', label: '3:00 AM' },
    { value: '03:15', label: '3:15 AM' },
    { value: '03:30', label: '3:30 AM' },
    { value: '03:45', label: '3:45 AM' },
    { value: '04:00', label: '4:00 AM' },
    { value: '04:15', label: '4:15 AM' },
    { value: '04:30', label: '4:30 AM' },
    { value: '04:45', label: '4:45 AM' },
    { value: '05:00', label: '5:00 AM' },
    { value: '05:15', label: '5:15 AM' },
    { value: '05:30', label: '5:30 AM' },
    { value: '05:45', label: '5:45 AM' },
    { value: '06:00', label: '6:00 AM' },
    { value: '06:15', label: '6:15 AM' },
    { value: '06:30', label: '6:30 AM' },
    { value: '06:45', label: '6:45 AM' },
    { value: '07:00', label: '7:00 AM' },
    { value: '07:15', label: '7:15 AM' },
    { value: '07:30', label: '7:30 AM' },
    { value: '07:45', label: '7:45 AM' },
    { value: '08:00', label: '8:00 AM' },
    { value: '08:15', label: '8:15 AM' },
    { value: '08:30', label: '8:30 AM' },
    { value: '08:45', label: '8:45 AM' },
    { value: '09:00', label: '9:00 AM' },
    { value: '09:15', label: '9:15 AM' },
    { value: '09:30', label: '9:30 AM' },
    { value: '09:45', label: '9:45 AM' },
    { value: '10:00', label: '10:00 AM' },
    { value: '10:15', label: '10:15 AM' },
    { value: '10:30', label: '10:30 AM' },
    { value: '10:45', label: '10:45 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '11:15', label: '11:15 AM' },
    { value: '11:30', label: '11:30 AM' },
    { value: '11:45', label: '11:45 AM' },
    { value: '12:00', label: '12:00 PM' },
    { value: '12:15', label: '12:15 PM' },
    { value: '12:30', label: '12:30 PM' },
    { value: '12:45', label: '12:45 PM' },
    { value: '13:00', label: '1:00 PM' },
    { value: '13:15', label: '1:15 PM' },
    { value: '13:30', label: '1:30 PM' },
    { value: '13:45', label: '1:45 PM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '14:15', label: '2:15 PM' },
    { value: '14:30', label: '2:30 PM' },
    { value: '14:45', label: '2:45 PM' },
    { value: '15:00', label: '3:00 PM' },
    { value: '15:15', label: '3:15 PM' },
    { value: '15:30', label: '3:30 PM' },
    { value: '15:45', label: '3:45 PM' },
    { value: '16:00', label: '4:00 PM' },
    { value: '16:15', label: '4:15 PM' },
    { value: '16:30', label: '4:30 PM' },
    { value: '16:45', label: '4:45 PM' },
    { value: '17:00', label: '5:00 PM' },
    { value: '17:15', label: '5:15 PM' },
    { value: '17:30', label: '5:30 PM' },
    { value: '17:45', label: '5:45 PM' },
    { value: '18:00', label: '6:00 PM' },
    { value: '18:15', label: '6:15 PM' },
    { value: '18:30', label: '6:30 PM' },
    { value: '18:45', label: '6:45 PM' },
    { value: '19:00', label: '7:00 PM' },
    { value: '19:15', label: '7:15 PM' },
    { value: '19:30', label: '7:30 PM' },
    { value: '19:45', label: '7:45 PM' },
    { value: '20:00', label: '8:00 PM' },
    { value: '20:15', label: '8:15 PM' },
    { value: '20:30', label: '8:30 PM' },
    { value: '20:45', label: '8:45 PM' },
    { value: '21:00', label: '9:00 PM' },
    { value: '21:15', label: '9:15 PM' },
    { value: '21:30', label: '9:30 PM' },
    { value: '21:45', label: '9:45 PM' },
    { value: '22:00', label: '10:00 PM' },
    { value: '22:15', label: '10:15 PM' },
    { value: '22:30', label: '10:30 PM' },
    { value: '22:45', label: '10:45 PM' },
    { value: '23:00', label: '11:00 PM' },
    { value: '23:15', label: '11:15 PM' },
    { value: '23:30', label: '11:30 PM' },
    { value: '23:45', label: '11:45 PM' }
]