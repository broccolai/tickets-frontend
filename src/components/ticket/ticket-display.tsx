import type {Ticket} from '../../models/ticket.ts';
import {currentMessage, TicketStatus} from "../../models/ticket.ts";
import {formatDate} from '../../utilities/date-utilities.ts';
import {styled} from '@panda/jsx';
import {createSignal} from "solid-js";
import clickOutside from "../utilities/click-outside.tsx";

const Container = styled("div", {
    base: {
        display: 'flex',
        margin: '2rem 1rem',
        padding: '0.4rem',
        backgroundColor: 'white',
        flexDirection: 'column',
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        borderRadius: '4px',
        borderLeft: '3px solid',
    },
    variants: {
        variant: {
            open: {
                borderLeftColor: '#69F0AE'
            },
            picked: {
                borderLeftColor: 'yellow',
            },
            closed: {
                borderLeftColor: 'red',
            }
        }
    }
})

const Section = styled("div", {
    base: {
        display: 'flex',
        padding: '0.2rem',
        alignItems: 'center',
    }
})

const Head = styled("img", {
    base: {
        width: '1.4rem',
        display: 'inline',
        marginRight: '0.5rem',
        borderRadius: '2px'
    }
})

const Id = styled('span', {
    base: {
        marginLeft: 'auto',
        fontFamily: 'title'
    }
})

const Menu = styled('span', {
    base: {
        cursor: 'pointer',
        marginLeft: '0.6rem',
        _hover: {
            backgroundColor: '#1E1E1E11'
        }
    }
})

const Hashtag = styled('span', {
    base: {
        fontSize: '0.9rem',
        color: 'slate.500'
    }
})

const Content = styled(Section, {
    base: {
        margin: '.6rem 0'
    }
})

const Footer = styled(Section, {
    base: {
        fontSize: '0.8rem',
        color: '#424242'
    }
})

const Type = styled('span', {
    base: {
        padding: '0.1rem 0.3rem',
        borderRadius: '4px',
    },
    variants: {
        variant: {
            bug_report: {
                backgroundColor: '#FFFF8B88'
            },
            question: {
                backgroundColor: '#8C9EFF88'
            },
            feature_request: {
                backgroundColor: '#FF80AB88'
            }
        }
    }
})

const Date = styled('span', {
    base: {
        marginLeft: 'auto'
    }
})

const TicketMenu = () => {
    const [isOpen, setIsOpen] = createSignal(false);
    return (
        <div use:clickOutside={() => setIsOpen(false)}>
            <button onClick={() => setIsOpen(!isOpen())}>&#8942;</button>
            {isOpen() && <div>Dropdown Content</div>}
        </div>
    );
}

interface Props {
    ticket: Ticket;
    status: TicketStatus;
}

const TicketDisplay = (props: Props) => {
    return (
        <Container variant={props.status}>
            <Section>
                <Head src={`https://crafatar.com/avatars/${props.ticket.creator}`}/>
                <span>broccolai</span>
                <Id>
                    <span><Hashtag>#</Hashtag>{props.ticket.id}</span>
                    <TicketMenu>&#8942;</TicketMenu>
                </Id>
            </Section>
            <Content>
                {currentMessage(props.ticket)}
            </Content>
            <Footer>
                <Type variant={props.ticket.type.identifier}>{props.ticket.type.displayName.toUpperCase()}</Type>
                <Date>{formatDate(props.ticket.date)}</Date>
            </Footer>
        </Container>
    );
};

export default TicketDisplay;
