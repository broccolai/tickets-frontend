import {For, createEffect, createSignal, onMount} from 'solid-js';
import {type Ticket, parseTicket, ticketStatus, TicketStatus} from '../models/ticket.ts';
import {styled} from "@panda/jsx";
import {Info} from "./info.tsx";
import TicketsColumn from "../components/ticket/tickets-column.tsx";

const Container = styled('div', {
    base: {
        display: 'grid',
        gridTemplateColumns: '5fr 4fr 4fr 4fr',
        height: '100vh'
    }
})

const View = () => {
  const [tickets, setTickets] = createSignal<Record<TicketStatus, Ticket[]>>({});

  onMount(() => {
    fetch('http://localhost:8080/staff/list')
      .then((res) => res.json())
        .then((data: Record<TicketStatus, Ticket[]>) => {
            return Object.entries(data).reduce((accumulator, [status, tickets]) => {
                accumulator[status as TicketStatus] = tickets.map(parseTicket);
                return accumulator;
            }, {} as Record<TicketStatus, Ticket[]>);
        })
        .then(ticketsByStatus => {
            console.log(ticketsByStatus);
            setTickets(ticketsByStatus);
        });
  });

  const openTickets = () => {
      console.log("open",  tickets()["OPEN"])
      return tickets()[TicketStatus.OPEN];
  }

  const pickedTickets = () => {
      return tickets()[TicketStatus.PICKED];
  }

  const closedTickets = () => {
      return tickets()[TicketStatus.CLOSED];
  }

  return (
    <Container>
        <Info />
        <TicketsColumn type='open' tickets={openTickets()} />
        <TicketsColumn type='picked' tickets={pickedTickets()} />
        <TicketsColumn type='closed' tickets={closedTickets()} />
    </Container>
  );
};

export default View;
