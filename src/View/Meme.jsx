import React from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { memePrizes } from '../memePrizes';
import { MemeCard } from '../components/MemeCard/MemeCard';

const Wrapper = styled.section`
    height: 100vh;
    display: grid;
    align-items: center;
    justify-content: center;
`;

const CarouselWrapper = styled.div`
    margin: 0 40px;
`;

export const Meme = ({againCallback}) => {

    return <Wrapper id='Meme'>
        <CarouselWrapper>
         <Carousel
            swipeable
            emulateTouch
            showStatus={false}
         >
               {memePrizes.map((item) => (
                    <MemeCard 
                        key={item.text}
                        text={item.text}
                        description={item.description}
                        image={item.image}
                        cb={againCallback}
                    />
               ))}
            </Carousel>
        </CarouselWrapper>
    </Wrapper>
};