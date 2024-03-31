export interface Action {
  date: Date;
  creator: string;
  message: string;
}

export interface Ticket {
  id: number;
  creator: string;
  date: Date;
  actions: Action[];
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

    actions: json.actions.map((action: any) => ({
      date: new Date(action.date),
      creator: action.creator,
      message: action.message,
    })),
  };
};
