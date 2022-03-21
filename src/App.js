import React from "react";
import styled, { keyframes } from "styled-components";
import Week from "./Week";
import Score from "./Score";

const App = () => {
    const [day_list, setday_list] = React.useState([
        "월",
        "화",
        "수",
        "목",
        "금",
        "토",
        "일",
    ]);

    return (
        <Container>
            <h2 style={{ textAlign: "center" }}>내 일주일은?</h2>
            <Week day_list={day_list} />
            <Score />
        </Container>
    );
};

const Container = styled.div`
    background: aliceblue;
    width: 80vw;
    max-width: 400px;
    height: 90vh;
    margin: 40px auto;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default App;
