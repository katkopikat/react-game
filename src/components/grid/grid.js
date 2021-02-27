import React, { useState, useEffect, useRef } from 'react';
import Cell from '../cell';
import './grid.css';
import randomGeneratedField from './randomGenerated';



// function BaseGrid(props){
//     // const baseString = '123000000000070000000000000000000000000000000000080000000000000000000000000000087';
//     // const startGrid = baseString
//     //                         .split('')
//     //                         .filter(x => '0123456789'.includes(x))
//     //                         .map(x => Number(x))



export default function Grid(props){
    const {difficulty} = props;

    const [selRow, setSelectedRow] = useState(null);
    const [selCol, setSelectedCol] = useState(null);
    const [selSegm, setSelectedSegmnent] = useState(null);
    const [selectedCell, setSelected] = useState(null);
    const [currentValues, setValues] = useState([]);
    const [startField, setStartField] = useState([]);
    const [currentField, setCurrentField] = useState([]);

    const [hasErrorValue, setErrorValue] = useState(0);

    useEffect(()=>{
        let obj = randomGeneratedField(difficulty);
        setStartField(obj.baseField);
        setCurrentField(obj.startArray);
    },[]) 

    useEffect(() => {
        if(selectedCell){
          document.querySelectorAll('.sub-selected').forEach(it => it.classList.remove('sub-selected'));

          const rowElements = findElementInDOM('x');
          const colElements = findElementInDOM('y');
          const segmElements = findElementInDOM('s');

          setSelectedRow(rowElements)
          setSelectedCol(colElements)
          setSelectedSegmnent(segmElements)  
        }
    }, [selectedCell]);


    useEffect(() => {
       let values = [];

       if(selRow){
         [...selRow, ...selCol, ...selSegm].forEach(it => {
             it.classList.add('sub-selected');
             if(it.value) values.push(it.value);
           });
       }

       setValues([...new Set(values)])
       
   }, [selRow, selCol, selSegm]);

    const findElementInDOM = (attr) => {
        const findAttr = selectedCell.getAttribute(`${attr}`);
        return document.querySelectorAll(`input[${attr}="${findAttr}"]`);
    }

    const onSelectCell = (val) => {
        setSelected(val);
        
    }

    const setValueInCurruentField = (id, value, status) => {
        let arr = [...currentField]
        arr.splice(id, 1, value);
        setCurrentField(arr)
        updateErrorStatus(status)
    }

    const updateErrorStatus = (status) => {
        setErrorValue(status? hasErrorValue-1: hasErrorValue+1);
        console.log(hasErrorValue)
     }

     

    if(!currentField.includes('') && hasErrorValue === 0) {// !currentField.includes('error')
        console.log('Игра закончена')
    }
    console.log(currentValues)
 
    return ( startField.map(cell => 
        <Cell
            x={cell.x+1}
            y={cell.y+1}
            s={cell.s+1}
            key={cell.id}
            id={Number(cell.id)}
            value={String(cell.value)}
            readOnly={cell.readOnly}
            currentValues={currentValues}
            onSelectCell={onSelectCell}
            setValueInCurruentField={setValueInCurruentField}
           //hasError={updateErrorStatus}
        />)

    )
}
