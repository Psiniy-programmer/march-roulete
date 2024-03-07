import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import prizeImg from '../prize.svg';
import { Button } from "../components/Button/Button";
import { getCompliment, scrollTo } from "../utils";
import { Colors } from "../colors";
import { Text } from "../components/Text/Text";
import { Card } from "../components/Card/Card";

const fromLeftToCenter = keyframes`
    from {
        transform: translateX(1000px);
    }

    to {
        transform: translateX(0);
    }
`;

const fromRightToCenter = keyframes`
    from {
        transform: translateX(-1000px);
    }

    to {
        transform: translateX(0);
    }
`;

const openCard = keyframes`
    from {
        transform: scale(0);
    }

    to {
        transform: scale(1);
    }
`;

const View = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    height: 100vh;
    padding: 12px 24px;
`;

const Left = styled.div`
    display: grid;
    grid-auto-flow: row;
    align-items: center;
    justify-content: center;
`;
const PrizeText = styled.div`
    margin-top: 20px;

    animation: ${fromLeftToCenter} 1s ease forwards;
`;
const ButtonWrapper = styled.div`
    height: 70px;
    animation: ${fromRightToCenter} 1s ease forwards;
`;
const CardWrapper = styled.div`
    display: grid;
    animation: ${openCard} 1s ease forwards;
`;

export const Prize = () => {
    const [compliment, setCompliment] = useState();

    useEffect(() => {
        const newCompliment = getCompliment();
        setCompliment(newCompliment);
    }, []);

    return <View id='Prize'>
        <Left>
            <PrizeText>
                <img src={prizeImg} className="App-logo" alt="circle" />
            </PrizeText>
            <CardWrapper>
                <Card>
                    <Text>{compliment}</Text>
                </Card>
            </CardWrapper>
            <ButtonWrapper>
                <Button onClick={() => scrollTo('Meme')} isReversed><Text>Все призы</Text></Button>
            </ButtonWrapper>
        </Left>
    </View>
};