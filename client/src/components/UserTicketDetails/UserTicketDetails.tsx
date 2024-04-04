import { Ticket } from '@acme/shared-models';

interface UserTicketDetailsProps extends Ticket {
  assigneeName?: string;
}

const UserTicketDetails = (props: UserTicketDetailsProps) => {
  const { id, description, completed, assigneeName } = props;

  return (
    <div>
      <h2>
        Ticket {id}: {description}
      </h2>
      <ul>
        <li>Completed: {completed ? 'Yes' : 'No'}</li>
        {assigneeName && <li>Assignee: {assigneeName}</li>}
      </ul>
    </div>
  );
};

export default UserTicketDetails;
