import {styled} from "@panda/jsx";
import {Ticket, TicketStatus} from "../../models/ticket.ts";
import {For} from "solid-js";
import TicketDisplay from "./ticket-display.tsx";

const Container = styled('div', {
    base: {
        display: "flex",
        flexDirection: 'column',
        borderRight: 'rgba(200, 200, 200, 0.3) solid 2px',
        textAlign: 'center',
        paddingTop: '2rem'
    }
});

interface Props {
    type: TicketStatus,
    tickets: Ticket[]
}

const TicketsColumn = (props: Props) => {
    return (
        <Container>
            <h3>{props.type}</h3>
            <For each={props.tickets}>{(ticket) => <TicketDisplay ticket={ticket} status={props.type} />}</For>
        </Container>
    )
};

export default TicketsColumn