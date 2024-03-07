import React from "react";

import titleImg from '../title.png';
import {keyframes, styled} from 'styled-components'
import { Button } from "../components/Button/Button";
import { Colors } from "../colors";
import { scrollTo } from "../utils";

const openCircle = keyframes`
    from {
        transform: scale(0);
    }

    to {
        transform: scale(1.6);
    }
`;

const fromBottomToTop = keyframes`
    from {
        transform: translateX(1000px);
    }

    to {
        transform: translateX(0);
    }
`;

const Section = styled.section`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    flex-direction: column;
`;
const anim = `ease`;
const Circle = styled.div`
    background-color: ${Colors.blue};
    content: '';
    width: 70vw;
    height: 70vh;
    border-radius: 50%;
    animation: ${openCircle} 1s ${anim} forwards;
`;
const TextWrapper = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    margin-bottom: 80px;

    animation: ${fromBottomToTop} 1s ${anim} forwards;

    & > img {
        width: 900px;
    }
`;
const ButtonWrapper = styled.div`
    width: 200px;
    height: 100px;
`;

export const Main = () => {

    return <Section id='Main'>
        <Circle />
        <TextWrapper>
            <img src={titleImg} className="App-logo" alt="circle" />
        </TextWrapper>
        <ButtonWrapper>
            <Button onClick={() => scrollTo('Wheel')}>Принять участие</Button>
        </ButtonWrapper>
    </Section>
};