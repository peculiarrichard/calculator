import React from "react";
import ButtonContainer from "./components/ButtonContainer";
import Calculator from './components/Calculator'
import Screen from "./components/Screen";
//import ButtonContainer from "./components/ButtonContainer";
import Button from "./components/Button";
import './index.css';
import CalcProvider from "./context/CalcContext";

const btnValues =[
  ['C', '+-', '%', '/'],
  [7, 8, 9, 'x'],
  [4, 5, 6, '-'],
  [1,2,3, '+'],
  [0, '.', '=']
];

export default function App(){
  return (
    <CalcProvider>
      <Calculator>
        <Screen></Screen>
        <ButtonContainer>
          {btnValues.flat().map((btn, i)  =>(
            <Button
              value ={btn}
              key ={i}>

            </Button>
          ))}
        </ButtonContainer>
      </Calculator>
    </CalcProvider>
  )
}