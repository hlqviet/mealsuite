import { Ticket } from '@acme/shared-models';
import { API_PATH } from '../lib/constants';

export const getTickets = async (): Promise<Ticket[]> => {
  const response = await fetch(`${API_PATH}/tickets`);
  const data = await response.json();

  return data;
};

export const getTicket = async (id: number): Promise<Ticket> => {
  const response = await fetch(`${API_PATH}/tickets/${id}`);

  if (!response.ok) throw new Error(response.statusText);

  const data = await response.json();

  return data;
};
