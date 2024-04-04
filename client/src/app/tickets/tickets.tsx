import Spinner from '../../components/Spinner/Spinner';
import useGetTickets from '../../hooks/useGetTickets';
import useGetUsers from '../../hooks/useGetUsers';
import styles from './tickets.module.css';
import TicketRow from '../../components/TicketRow/TicketRow';

const Tickets = () => {
  const {
    error: ticketsError,
    isLoading: isTicketsLoading,
    data: tickets,
  } = useGetTickets();
  const {
    error: usersError,
    isLoading: isUsersLoading,
    data: users = [],
  } = useGetUsers();

  if (ticketsError || usersError)
    return <div className={styles['tickets']}>Something went wrong.</div>;

  if (isTicketsLoading || isUsersLoading) return <Spinner />;

  if (!tickets) return null;

  return (
    <div className={styles['tickets']}>
      <h2>Tickets</h2>
      <ul>
        {tickets.map((ticket) => (
          <TicketRow
            key={ticket.id}
            {...ticket}
            assigneeName={
              users.find(({ id }) => id === ticket.assigneeId)?.name
            }
          />
        ))}
      </ul>
    </div>
  );
};

export default Tickets;
