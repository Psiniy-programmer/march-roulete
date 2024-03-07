import { useEffect, useState } from 'react';
import './App.css';
import {Main} from './View/Main'
import { Wheel } from './View/Wheel';
import styled from 'styled-components';
import { Prize } from './View/Prize';
import { Meme } from './View/Meme';

const Wrapper = styled.div`
  overflow: hidden;
`;

function App() {
  const [isPrizeWon, setIsPrizeWon] = useState(false);

  return (
    <Wrapper className="App">
      <Main />
      {isPrizeWon ?  
      <>
        <Prize />
        <Meme againCallback={() => {
          setIsPrizeWon(false);
        }} />
      </>
      : <Wheel onPrize={() => setIsPrizeWon(true)} />}
    </Wrapper>
  );
}

export default App;
