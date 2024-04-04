import { Ticket } from '@acme/shared-models';

interface TicketRowProps extends Ticket {
  assigneeName?: string;
}

const TicketRow = (props: TicketRowProps) => {
  const { id, description, assigneeName } = props;

  return (
    <li>
      Ticket {id}: {description} {assigneeName && ` - ${assigneeName}`}
    </li>
  );
};

export default TicketRow;
