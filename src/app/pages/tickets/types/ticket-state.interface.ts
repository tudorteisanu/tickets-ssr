import { BackendErrorInterface } from '@/shared/types/backend-error.interface';
import { TicketInterface } from '@/shared/types/ticket.interface';

export interface TicketStateInterface {
  isLoading: boolean;
  error: BackendErrorInterface | null;
  data: TicketInterface[]
}