import React from "react";
import styled from "styled-components";

const Score = (props) => {
    return (
        <>
            <div>월요일 평점 남기기</div>
            <ScoreBox>
                <Point></Point>
                <Point></Point>
                <Point></Point>
                <Point></Point>
                <Point></Point>
            </ScoreBox>
            <Save>평점 남기기</Save>
        </>
    );
};

const ScoreBox = styled.div`
    height: 40px;
    width: 80vw;
    max-width: 200px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const Point = styled.div`
    width: 25px;
    height: 25px;
    background-color: lightgray;
    border-radius: 50px;
`;

const Save = styled.button`
    width: 100px;
`;

export default Score;
