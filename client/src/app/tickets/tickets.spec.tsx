import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Tickets from './tickets';
import useGetTickets from '../../hooks/useGetTickets/useGetTickets';
import useGetUsers from '../../hooks/useGetUsers/useGetUsers';

jest.mock('../../hooks/useGetTickets/useGetTickets', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('../../hooks/useGetUsers/useGetUsers', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe(Tickets.name, () => {
  it('should render error message when there is any', () => {
    (useGetTickets as jest.Mock).mockReturnValue({
      error: new Error('test error'),
    });
    (useGetUsers as jest.Mock).mockReturnValue({});

    render(<Tickets />);

    expect(screen.getByText('test error')).toBeInTheDocument();
  });

  it('should render spinner when data is still being loaded', () => {
    (useGetTickets as jest.Mock).mockReturnValue({ isLoading: true });
    (useGetUsers as jest.Mock).mockReturnValue({});

    render(<Tickets />);

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('should render tickets when they are loaded', () => {
    (useGetTickets as jest.Mock).mockReturnValue({
      data: [
        {
          id: 1,
          description: 'Description',
          completed: false,
          assigneeId: 1,
        },
      ],
    });
    (useGetUsers as jest.Mock).mockReturnValue({
      data: [{ id: 1, name: 'User' }],
    });

    render(<Tickets />, { wrapper: MemoryRouter });

    expect(
      screen.getByText('Ticket 1: Description - User')
    ).toBeInTheDocument();
  });
});
