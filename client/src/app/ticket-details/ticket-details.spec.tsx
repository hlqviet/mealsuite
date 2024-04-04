import { render, screen } from '@testing-library/react';
import TicketDetails from './ticket-details';
import useGetTicket from '../../hooks/useGetTicket/useGetTicket';
import useGetUser from '../../hooks/useGetUser/useGetUser';

jest.mock('../../hooks/useGetTicket/useGetTicket', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('../../hooks/useGetUser/useGetUser', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe(TicketDetails.name, () => {
  it('should render Ticket not found message when one is not found', () => {
    (useGetTicket as jest.Mock).mockReturnValue({});
    (useGetUser as jest.Mock).mockReturnValue({});

    render(<TicketDetails />);

    expect(screen.getByText('Ticket not found.')).toBeInTheDocument();
  });
});
