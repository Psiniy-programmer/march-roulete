import { useEffect, useState } from 'react';
import './App.css';
import {Main} from './View/Main'
import { Wheel } from './View/Wheel';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import styled from 'styled-components';
import { Prize } from './View/Prize';


const Wrapper = styled.div`
  overflow: hidden;
`;

function App() {
  const [isPrizeWon, setIsPrizeWon] = useState(false);

  return (
    <Wrapper className="App">
      <Main />
      {isPrizeWon ?  <Prize /> : <Wheel onPrize={() => setIsPrizeWon(true)} />}
    </Wrapper>
  );
}

export default App;
