import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Week = (props) => {
    let history = useHistory();

    const day_list = props.day_list;

    return day_list.map((list, index) => {
        // console.log(index); //  index 번호 여기까지는 있음
        return (
            <>
                <WeekBox>
                    <Day>{list}</Day>
                    <Score></Score>
                    <Score></Score>
                    <Score></Score>
                    <Score></Score>
                    <Score></Score>
                    <Triangle
                        key={index}
                        onClick={() => {
                            history.push("/score");
                        }}
                    ></Triangle>
                </WeekBox>
            </>
        );
    });
};

const WeekBox = styled.div`
    height: 40px;
    width: 80vw;
    max-width: 300px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const Day = styled.div`
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
    background-color: transparent;
    transform: rotate(90deg);
    cursor: pointer;

    &:hover {
        transform: rotate(-10deg);
    }
`;

export default Week;
