import { defineEventHandler } from 'h3';

const TICKETS = [...new Array(9)].map((_, index) => ({
    id: index + 1,
    location: 'Location',
    date: 'Date',
    time: 'Time',
    type: 'Ticket type',
    name: `Cart title ${index + 1}`
}));

export default defineEventHandler(() => TICKETS);
