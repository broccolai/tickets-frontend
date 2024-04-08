export interface Action {
  type: string;
  date: Date;
  creator: string;
  message: string;
}

export interface TicketType {
  identifier: string,
  displayName: string,
  description: string
}

export interface Ticket {
  id: number;
  type: TicketType;
  creator: string;
  date: Date;
  actions: Action[];
}

export enum TicketStatus {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
  PICKED = "PICKED"
}

// @Override
// public TicketStatus status() {
//     return Trove.of(this.actions)
//         .filterIsInstance(StatusAction.class)
//         .last()
//         .map(StatusAction::status)
//         .orElseThrow();
// }

//todo: improve to have parity with main site
//      or better yet, have the end pont return tickets mapped by their type?
export const ticketStatus = (ticket: Ticket) => {
  if (ticket.actions.some(action => action.type === 'CloseAction')) {
    return TicketStatus.CLOSED;
  }

  if (ticket.actions.some(action => action.type === 'AssignAction')) {
    return TicketStatus.PICKED;
  }

  return TicketStatus.OPEN;
}

export const currentMessage = (ticket: Ticket) => {
    const mostRecentAction = ticket.actions.reduce((mostRecent, current) =>
        current.date > mostRecent.date ? current : mostRecent
    );

    return mostRecentAction.message
}

export const parseTicket = (json: any): Ticket => {
  return {
    id: json.id,
    creator: json.creator,
    date: new Date(json.date),
    type: json.type,

    actions: json.actions.map((action: any) => ({
      date: new Date(action.date),
      type: action.type,
      creator: action.creator,
      message: action.message,
    })),
  };
};
