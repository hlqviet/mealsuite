import { Ticket } from '@acme/shared-models';
import { LiHTMLAttributes } from 'react';

interface TicketRowProps
  extends Ticket,
    Pick<LiHTMLAttributes<HTMLLIElement>, 'className'> {
  assigneeName?: string;
}

const TicketRow = (props: TicketRowProps) => {
  const { id, description, assigneeName, className } = props;

  return (
    <li className={className}>
      Ticket {id}: {description} {assigneeName && ` - ${assigneeName}`}
    </li>
  );
};

export default TicketRow;
