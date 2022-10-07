import React, { useContext } from 'react'
import { CalcContext } from '../context/CalcContext'

const getStyleName = btn => {

    const className ={
        '=': 'equals',
        'x': 'operation',
        '-': 'operation',
        '+': 'operation',
        '/': 'operation',

    }

    return className[btn]
}

const Button = ({value}) => {
    const { calc, setCalc} = useContext(CalcContext);
    //dot click
    const dotClick =() =>{
        setCalc({
            ...calc,
            num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
        });
    }

    // C click
    const resetClick =() =>{
        setCalc({sign: '', num: 0, res: 0})
    }

    //number click
    const doNumberbutton = ()=>{
       const numberString = value.toString()
       
       let numberValue;
        if(numberString === '0' && calc.num === 0){
            numberValue = '0'
        }else {
            numberValue = Number(calc.num + numberString)
        }

       setCalc({
        ...calc,
        num: numberValue
       })
    }

    // user clicks operator
    const operatorClick =() =>{
       setCalc({ 
        sign: value,
        res: !calc.res && calc.num ? calc.num : calc.res,
        num: 0
       }) 
    }

    // user clicks equals
    const equalsClick = () =>{

        if(calc.res && calc.num) {
            const math = (a, b, sign) =>{
                const result = {
                    '+': (a, b) => a + b,
                    '-': (a, b) => a - b,
                    'x': (a, b) => a * b,
                    '/': (a, b) => a / b,
                }
                return result[sign](a, b);
            }

            setCalc({
                res: math(calc.res,calc.num,calc.sign),
                sign: '',
                num: 0
            })
        }
    }

    //user click percent
    const percentClick =() =>{
        setCalc({
            num: (calc.num / 100),
            res: (calc.res /100),
            sign: ''
        })
    }

    //user click invert button
    const invertClick =() =>{
        setCalc({
            num: calc.num ? calc.num * -1 :0,
            res: calc.res ? calc.res * -1 :0,
            sign: ''
        })
    }

    const doButtonClick = () =>{

        const results ={
           '.' : dotClick,
           'C' : resetClick,
           '/' : operatorClick,
           'x' : operatorClick,
           '-' : operatorClick,
           '+' : operatorClick,
           '=' : equalsClick,
           '%' : percentClick,
           '+-': invertClick
         }
        if(results[value]) {
            return results[value]()
        }else {
            return doNumberbutton()
        }
    }
  return (
    <button onClick ={doButtonClick} className={`${getStyleName(value)} button`}>{value}</button>
  )
}

export default Button