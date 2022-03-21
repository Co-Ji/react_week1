import styled, { keyframes } from "styled-components";

function App() {
    return (
        <Container>
            <h2 style={{ textAlign: "center" }}>내 일주일은?</h2>
            <WeekBox>
                <Week>월</Week>
                <Score></Score>
                <Score></Score>
                <Score></Score>
                <Score></Score>
                <Score></Score>
                <Triangle></Triangle>
            </WeekBox>
        </Container>
    );
}

const Container = styled.div`
    background: aliceblue;
    width: 60vw;
    maxwidth: 400px;
    height: 90vh;
    margin: 40px auto;
    padding: 20px;
    box-sizing: border-box;
`;

const WeekBox = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const Week = styled.div`
    width: 25px;
    height: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Score = styled.div`
    width: 25px;
    height: 25px;
    background-color: lightgray;
    border-radius: 50px;
`;

const Triangle = styled.div`
width: 0px;
height: 0px;
border-bottom: 20px solid #007fff;
border-left: 12.5px solid transparent;
border-right: 12.5px solid transparent;
transform: rotate( 90deg);

}
`;
export default App;
