import {styled} from "@panda/jsx";

const Container = styled('div', {
    base: {
        backgroundColor: '#1C1E20',
        color: "white",
        padding: "2rem",
        textAlign: "center"
    }
})

export const Info = () => {
    return (
        <Container>
            <h2>TICKETS</h2>
            <h4>web viewer</h4>
        </Container>
    )
}