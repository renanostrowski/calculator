import React from 'react';

import './styles/reset.css';
import './styles/colors.css';


import WrapperCalc from './components/WrapperCalc';
import HistoryCalc from './components/HistoryCalc';
import Teclado from './components/Teclado';
import DisplayCalc from './components/DisplayCalc';
import HeaderCalc from './components/HeaderCalc';
import LogoCalc from './components/LogoCalc';
import TitleCalc from './components/TitleCalc';


function App() {
  return (
    <div className="App">
      <WrapperCalc>
        <HeaderCalc>
          <LogoCalc />
          <TitleCalc>Calculator Math</TitleCalc>
        </HeaderCalc>
        <HistoryCalc>6 + 7</HistoryCalc>
        <DisplayCalc />
        <Teclado />
      </WrapperCalc>
    </div>
  );
}

export default App;
