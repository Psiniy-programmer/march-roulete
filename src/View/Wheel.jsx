import React, {useEffect, useRef, useState} from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import wheelImg from '../testWheel.svg';
import arrowImg from '../arrow.svg';
import wheelText from '../wheelText.svg';
import { Button } from '../components/Button/Button';

const animationTime = 0;
const animationTimeFromMs = animationTime * 1000;

const wheelAnimation = keyframes`
    from{ transform: rotate(-360deg); }
    to{ transform: rotate(360deg); }
`;

const Section = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    height: 100vh;
    padding: 12px 24px;
`;
const Left = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    margin-top: 140px;
    gap: 270px;
`;
const ButtonWrapper = styled.div`
    height: 130px;
`;
const Right = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;

    & > img {
        ${({ isRunning }) => {
            if (isRunning) {
                return css`
                    animation: ${wheelAnimation} ${animationTime}s infinite linear;
                `;
            }
        }};
    }
`;
const ArrowWrapper = styled.div`
    position: absolute;
    left: -50px;
    z-index: 2;

    & > img {
        transform: rotate(-90deg);
    }
`;

export const Wheel = ({onPrize}) => {
    const [isWheelStarted, setIsWheelStarted] = useState(false);

    const startWheel = () => {
        setIsWheelStarted(true);

        setTimeout(() => {
            setIsWheelStarted(false);
            onPrize(true);
        }, animationTimeFromMs)
    };

    return <Element>
        <Section>
            <Left>
                <img src={wheelText} className="App-logo" alt="Крутите барабан" />
                <ButtonWrapper><Button disabled={isWheelStarted} onClick={startWheel} isReversed>Крутить барабан</Button></ButtonWrapper>
            </Left>
            <Right isRunning={isWheelStarted}>
                <ArrowWrapper>
                    <img src={arrowImg} className="App-logo" alt="arrow" />
                </ArrowWrapper>
                    <img src={wheelImg} className="App-logo" alt="wheel" />
            </Right>
        </Section>
    </Element>
};
