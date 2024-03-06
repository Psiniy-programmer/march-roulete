import React, { useEffect } from "react";
import styled from "styled-components";
import prizeImg from '../prize.svg';
import { Button } from "../components/Button/Button";
import { getCompliment } from "../utils";
import { Colors } from "../colors";
import { Text } from "../components/Text/Text";
import { Card } from "../components/Card/Card";

const View = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    height: 100vh;
    padding: 12px 24px;
`;

const Left = styled.div`
    display: grid;
    grid-auto-flow: row;
    gap: 100px;
    margin-left: 50px;
`;
const PrizeText = styled.div`
    margin-top: 70px;
`;
const ButtonWrapper = styled.div`
    height: 70px;
`;
const Right = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const Prize = () => {
    // useEffect(() => {
    //     getCompliment();
    // }, []);

    const temp = 'Твой смех подобен весеннему бризу, что несет с собой радость и тепло';

    return <View>
        <Left>
            <PrizeText>
                <img src={prizeImg} className="App-logo" alt="circle" />
            </PrizeText>

            <ButtonWrapper>
                <Button isReversed><Text>Что было еще?</Text></Button>
            </ButtonWrapper>
        </Left>
        <Right>
            {/* <Circle> */}
                <Card>
                    <Text>{temp}</Text>
                </Card>
            {/* </Circle> */}
        </Right>
    </View>
};