import { Link, useParams } from 'react-router-dom';
import useGetTicket from '../../hooks/useGetTicket/useGetTicket';
import useGetUser from '../../hooks/useGetUser/useGetUser';
import Spinner from '../../components/Spinner/Spinner';
import UserTicketDetails from '../../components/UserTicketDetails/UserTicketDetails';

const TicketDetails = () => {
  const { id } = useParams();
  const {
    error: ticketError,
    isLoading: isLoadingTicket,
    data: ticket,
  } = useGetTicket(parseInt(id ?? '0', 10));
  const {
    error: userError,
    isLoading: isLoadingUser,
    data: user,
  } = useGetUser(ticket?.assigneeId ?? 0);

  if (ticketError || userError)
    return <div>{ticketError?.message || userError?.message}</div>;

  if (isLoadingTicket || isLoadingUser) return <Spinner />;

  if (!ticket) return <div>Ticket not found.</div>;

  return (
    <div>
      <Link to="/">&larr; Go back</Link>
      <UserTicketDetails {...ticket} assigneeName={user?.name} />
    </div>
  );
};

export default TicketDetails;
