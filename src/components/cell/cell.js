import React, { useState, useEffect } from 'react';
import './cell.css'

export default function Cell(props){
    let {x, y, id, value, readonly} = props;  //updateSelection
    const [selected, setSelected] = useState(false);

    const [number, setUserNumber] = useState(value || '');

 
    const setColorSelected = (e) =>{
       if(!readonly){
        setSelected(true);
        e.target.className='cell-input selected'
        }
    }

    // useEffect(() => {
    //     updateSelection(x)
    //     // props.selectedCell = x;
    //     // console.log(props.x)
    //      //props.selectedCell
    //  }, [selected]);
    
    const setColorUnselected = (e) =>{
        setSelected(false);
        e.target.className='cell-input'
        changeValue(e.target);
        //e.target.value = number;
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
    }

    return (
          <input
          type="number"
          className="cell-input"
          readonly={readonly}
          x={x}
          y={y}
          key={id}
          value={number}
          selectedCell={selected}
          onFocus={ (e) => {setColorSelected(e)}}
          onBlur={ (e) => {setColorUnselected(e)}}
          onKeyDown={ (e) => {pressNumber(e)}}
          onChange={changeValue}
          onClick={ (e) => {props.onSelectCell(e.target)}}
          />
      );
}