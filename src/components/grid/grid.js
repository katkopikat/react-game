import React, { useState, useEffect } from 'react';
import Cell from '../cell';

export default function Grid(props){
    const {startField, finishedGame, settings} = props;
    const [selRow, setSelectedRow] = useState(null);
    const [selCol, setSelectedCol] = useState(null);
    const [selSegm, setSelectedSegmnent] = useState(null);
    const [selSameValue, setSelSameValue] = useState(null);
    const [selectedCell, setSelected] = useState(null);
    const [currentValues, setValues] = useState([]);
    const [currentField, setCurrentField] = useState(startField);

    useEffect(() => { setCurrentField(startField)},[]);

    useEffect(() => { localStorage.removeItem('sudoku')},[finishedGame]);

    useEffect(() => {
        localStorage.setItem('sudoku', JSON.stringify({currentField}) )
    },[currentField]);
    
    useEffect(() => {
        if (selectedCell){
            if (settings.showSelect) {
                document.querySelectorAll('.sub-selected')
                        .forEach(it => it.classList.remove('sub-selected'));
                        }
            if (settings.showEqualValue) {
                document.querySelectorAll('.sub-selected-value')
                        .forEach(it => it.classList.remove('sub-selected-value'));
                        }
                
            const rowElements = findElementInDOM('x');
            const colElements = findElementInDOM('y');
            const segmElements = findElementInDOM('s');
            const sameValueElements = findElementInDOM('value');

            setSelSameValue(sameValueElements)
            setSelectedRow(rowElements)
            setSelectedCol(colElements)
            setSelectedSegmnent(segmElements)  
        }
    }, [selectedCell]);


    useEffect(() => {
       let values = [];
       if (selRow){
         [...selRow, ...selCol, ...selSegm].forEach(it => {
             if (settings.showSelect) {
                 it.classList.add('sub-selected');
                }
             if (it.value) {
                 values.push(it.value);
                }
           });
       }

       setValues([...new Set(values)])

      if (settings.showEqualValue && selectedCell && selectedCell.value){
            selSameValue.forEach(it => it.classList.add('sub-selected-value') )
      }

   }, [selRow]);

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
        if (!isFinishGame){ 
            finishedGame(true);
        }
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
                settings={settings}
            />
        )
    )
}
