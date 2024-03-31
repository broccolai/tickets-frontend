import { For, createEffect, createSignal } from 'solid-js';
import AddButton from '../components/generic/add-button.tsx';
import TicketDisplay from '../components/ticket/ticket-display.tsx';
import { type Ticket, parseTicket } from '../models/ticket.ts';

const View = () => {
  const [tickets, setTickets] = createSignal<Ticket[]>([]);

  createEffect(() => {
    fetch('http://localhost:8080/staff/list')
      .then((res) => res.json())
      .then((data: any[]) => data.map(parseTicket))
      .then((data: Ticket[]) => setTickets(data));
  }, []);

  return (
    <div>
      <For each={tickets()}>{(ticket) => <TicketDisplay ticket={ticket} />}</For>
      <AddButton action={() => {}} />
    </div>
  );
};

export default View;
