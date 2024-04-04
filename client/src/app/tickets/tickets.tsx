import Spinner from '../../components/Spinner/Spinner';
import useGetTickets from '../../hooks/useGetTickets/useGetTickets';
import useGetUsers from '../../hooks/useGetUsers/useGetUsers';
import styles from './tickets.module.css';
import TicketRow from '../../components/TicketRow/TicketRow';
import { Link } from 'react-router-dom';

const Tickets = () => {
  const {
    error: ticketsError,
    isLoading: isLoadingTickets,
    data: tickets,
  } = useGetTickets();
  const {
    error: usersError,
    isLoading: isLoadingUsers,
    data: users = [],
  } = useGetUsers();

  if (ticketsError || usersError)
    return <div>{ticketsError?.message || usersError?.message}</div>;

  if (isLoadingTickets || isLoadingUsers) return <Spinner />;

  if (!tickets) return null;

  return (
    <div>
      <h2>Tickets</h2>
      <ul>
        {tickets.map((ticket) => (
          <Link key={ticket.id} to={`${ticket.id}`}>
            <TicketRow
              className={ticket.completed ? styles['completed'] : ''}
              {...ticket}
              assigneeName={
                users.find(({ id }) => id === ticket.assigneeId)?.name
              }
            />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Tickets;
