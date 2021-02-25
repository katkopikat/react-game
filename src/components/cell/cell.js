import React, { useState, useEffect } from 'react';
import './cell.css'

export default function Cell(props){
    let {x, y, s, id, value, readOnly, selectedRow, selecredCol, currentValues } = props;
    const [selected, setSelected] = useState(false);

    const [number, setUserNumber] = useState(value || '');
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
        changeValue(e.target);
    }

    const pressNumber = e => {  
        
           //e.preventDefault();
            if(String(e.target.value).length<1){
               setUserNumber(e.key);
                //e.target.value = e.key
                changeValue(e.target);
        }
    }



    const changeValue = (cell) => {
       cell.value = number || '';

       if(cell.value && (currentValues.includes(cell.value))){
           setErrorStatus(true);
       } else {
            setErrorStatus(false);
       }


        if (errorStatus) cell.classList.add('error');
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
          key={id}
          value={number}
          selectedCell={selected}
          onFocus={ (e) => {setColorSelected(e)}}
          onBlur={ (e) => {setColorUnselected(e)}}
          onKeyDown={ (e) => {pressNumber(e)}}
          onChange={changeValue}
          onClick={ (e) => {props.onSelectCell(e.target)}}
          error={errorStatus}
          />
      );
}