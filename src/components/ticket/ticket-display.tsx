import type { Ticket } from '../../models/ticket.ts';
import { formatDate } from '../../utilities/date-utilities.ts';
import { styled } from '@panda/jsx';
import {currentMessage} from "../../models/ticket.ts";

const Container = styled("div", {
    base: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: '1fr 1fr',
    }
})

interface Props {
  ticket: Ticket;
}

const TicketDisplay = (props: Props) => {
  return (
    <Container>
        <div>
            {currentMessage(props.ticket)}
        </div>
        <div>
            <span>{formatDate(props.ticket.date)}</span>
            <img src={`https://crafatar.com/avatars/${props.ticket.creator}`} />
        </div>
    </Container>
  );
};

export default TicketDisplay;
