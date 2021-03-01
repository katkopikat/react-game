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
    const {startField, finishedGame, difficulty} = props;

    const [selRow, setSelectedRow] = useState(null);
    const [selCol, setSelectedCol] = useState(null);
    const [selSegm, setSelectedSegmnent] = useState(null);
    const [selectedCell, setSelected] = useState(null);
    const [currentValues, setValues] = useState([]);
    const [currentField, setCurrentField] = useState(startField);

    setTimeout(()=> {
        window.addEventListener('unload', function() {
         //   if(!finishedGame){
                localStorage.setItem('sudoku', JSON.stringify({currentField}) )
                if(difficulty){
                    localStorage.setItem('diffuculty', difficulty);
                }
                
        //   }
        });
    }, 0)

    useEffect(() => {
        setCurrentField(startField);
    },[]);
    
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
    const onSelectCell = (val) => { setSelected(val) }

    const setValueInCurruentField = (id, value, status) => {
        let arr = [...currentField];
        let obj = currentField[id];
        obj.value = value;
        obj.error = status;
        arr.splice(id, 1, obj);
        setCurrentField(arr)

        let isFinishGame = currentField.filter((el) => { return el.error === 'true' || !el.value}).length;
        if(!isFinishGame) {finishedGame(true)};
    }

    return ( 
        currentField.map( cell => 
            <Cell
                x={cell.x+1}
                y={cell.y+1}
                s={cell.s+1}
                key={cell.id}
                id={Number(cell.id)}
                error={String(cell.error)}
                value={String(cell.value)}
                readOnly={cell.readOnly}
                currentValues={currentValues}
                onSelectCell={onSelectCell}
                setValueInCurruentField={setValueInCurruentField}
            />
        )
    )
}
