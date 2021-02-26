import React, { useState, useEffect } from 'react';
import Cell from '../cell';
import './grid.css';


// function BaseGrid(props){
//     // const baseString = '123000000000070000000000000000000000000000000000080000000000000000000000000000087';
//     // const startGrid = baseString
//     //                         .split('')
//     //                         .filter(x => '0123456789'.includes(x))
//     //                         .map(x => Number(x))



export default function Grid(props){
    
    const {difficulty, sudokuArray} = props;

    const [fieldArray, setField] = useState(sudokuArray);
    //const [field, setDOMfield] = useState(sudokuArray);

    const [selRow, setSelectedRow] = useState(null);
    const [selCol, setSelectedCol] = useState(null);
    const [selSegm, setSelectedSegmnent] = useState(null);
    const [selectedCell, setSelected] = useState(null);
    const [currentValues, setValues] = useState([]);

 
    let idCount = 1;
    const baseField = [];
    for (let y = 0; y < 9; y++ ){
        for (let x = 0; x < 9; x++ ){
            let prop = {
                x,
                y,
                s: parseInt(y / 3) * 3 + parseInt(x / 3),
                id: idCount-1,
                value: String(sudokuArray[idCount-1]),
               // readOnly: !sudokuArray[idCount-1] ? true : ''
            }
            baseField.push(prop)  
            idCount++;
        }
    }

    const findElementInDOM = (attr) => {
        const findAttr = selectedCell.getAttribute(`${attr}`);
        return document.querySelectorAll(`input[${attr}="${findAttr}"]`);
    }


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

        setValues([...values])
        console.log([...values])
    }, [selRow, selCol, selSegm]);


    const onSelectCell = (val) => {
        setSelected(val);
    }

    // TO DO! ERROR НЕ ПЕРЕДАЕТСЯ ЗНАЧЕНИЕ
    const setValueInFieldArray = (id, value) => {
      //console.log(`id:${id} Значение: ${value}`)
        let tempArr = [...fieldArray];
        fieldArray[id] = value;
        setField(tempArr);
    }

    return (  baseField.map(cell => 
        <Cell
            x={cell.x+1}
            y={cell.y+1}
            s={cell.s+1}
            key={cell.id}
            id={Number(cell.id)}
            value={String(cell.value)}
           //  readOnly={cell.readOnly}
            currentValues={currentValues}
            onSelectCell={onSelectCell}
            setValueInFieldArray={setValueInFieldArray}
        />)

    )
}
