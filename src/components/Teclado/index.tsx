import React from 'react';

import './style.css';

import Button, { ButtonAC, ButtonEnter } from '../Button';



const Teclado = () => {
  return (
    <div>
        <Button> 7 </Button>
        <Button> 8 </Button>
        <Button> 9 </Button>
        <Button> / </Button>
        <Button> -- </Button>
        <ButtonAC> AC </ButtonAC>
        <Button> 4 </Button>
        <Button> 5 </Button>
        <Button> 6 </Button>
        <Button> * </Button>
        <Button> ( </Button>
        <Button> ) </Button>
        <Button> 1 </Button>
        <Button> 2 </Button>
        <Button> 3 </Button>
        <Button> - </Button>
        <Button> x² </Button>
        <Button> √ </Button>
        <Button> 0 </Button>
        <Button> , </Button>
        <Button> % </Button>
        <Button> + </Button>
        <ButtonEnter> = </ButtonEnter>
    </div>
  );
};

export default Teclado;
