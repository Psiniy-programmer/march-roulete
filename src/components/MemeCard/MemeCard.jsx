import React from 'react';
import styled from 'styled-components';
import { Text } from '../Text/Text';
import { Button } from '../Button/Button';

const Card = styled.div`
    display: grid;
    grid-auto-flow: row;
    gap: 12px;
    padding: 24px;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    background-color: #ece5e5;
    height: 700px;
`;

const StyledImg = styled.img`
    width: 200px;
    height: 300px;
`;
const DescriptionContainer = styled.div`
    width: 200px;
    text-align: center;
    justify-self: center;
`;

export const MemeCard = ({text, image, description, cb}) => {
    return <Card>
        <Text isBig>{text}</Text>
        <StyledImg src={image} alt=':-)'/>
        <DescriptionContainer>
            <Text>{description}</Text>
        </DescriptionContainer>
        <Button onClick={cb} isReversed>Повторить попытку</Button>
    </Card>
};