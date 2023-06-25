import { TicketStateInterface } from '../types/ticket-state.interface';

export const ticketsInitialState:  TicketStateInterface = {
  isLoading: false,
  error: null,
  data: []
};