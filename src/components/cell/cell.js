import React, { useState, useEffect } from 'react';
import './cell.css'

export default function Cell(props){
    let {x, y, s, id, value, readOnly, currentValues, setValueInFieldArray, onSelectCell } = props;
    const [selected, setSelected] = useState(false);

    const [numberValue, setUserNumber] = useState(String(value) || '');
    const [errorStatus, setErrorStatus] = useState(false);

    const setColorSelected = (e) =>{
    //   if(!readOnly){
        setSelected(true);
        e.target.classList.add('selected');

        //e.target.className='cell-input selected'
       // }
    }
    
    const setColorUnselected = (e) =>{
        setSelected(false);
        e.target.className='cell-input'
        handleChangeValue(e.target);

      
        console.log(typeof numberValue)

     
 
         if (errorStatus) e.target.classList.add('error');
    }

    const toggleErrorStatus= (cell) => {
        if(cell.value && (currentValues.includes(cell.value))){
            setErrorStatus(true);
        } else {
             setErrorStatus(false);
        }
    }

    const pressNumber = e => {  
        let val = e.target.value[0]
        setUserNumber(val);
        toggleErrorStatus(e.target);
           //e.preventDefault();
        //     if(String(e.target.value).length<1){
        //        setUserNumber(e.key);
        //         //e.target.value = e.key
        //         handleChangeValue(e.target);
        //         console.log(e.target)
        // }
        // console.log(numberValue)

        
    }

    useEffect(() => {
        setValueInFieldArray(parseInt(id), numberValue);
    }, [numberValue])


    const handleChangeValue = (cell) => {
console.log('рег')
        console.log(cell.value.slice(0,1))
        //console.log(cell.value)
        //if(String(cell.value).length<1){
           // setUserNumber(e.key);
        setUserNumber(cell.value.slice(0,1));
        toggleErrorStatus(cell);

       //setUserNumber(cell.value)

       //cell.value = number || '';


  

        
        //addValueInFieldArray(cell[id])
        // else if (cell.value && !errorStatus) {
        //     if (cell.classList.contains('error')){
        //         cell.classList.remove('error')
        //     }
            
        // }
        
    }

    return (
          <input
          type="number"
          className="cell-input"
         // readOnly={readOnly}
          x={x}
          y={y}
          s={s}
          id={id}
          key={id}
          value={String(numberValue)}
          selectedCell={selected}
          onFocus={ (e) => {setColorSelected(e)}}
          onBlur={ (e) => {setColorUnselected(e)}}
          onKeyDown={ (e) => {pressNumber(e)}}
          onChange={(e) => handleChangeValue(e.target)}
          onClick={(e) => {onSelectCell(e.target)}}
          error={errorStatus}
          />
      );
}