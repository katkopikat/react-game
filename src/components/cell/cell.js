import React, { useState, useEffect } from 'react';
import './cell.css'

export default function Cell(props){
    let {x, y, s, id, value, readOnly, currentValues, setValueInCurruentField, onSelectCell, error } = props;
    const [numberValue, setUserNumber] = useState(String(value) || '');
    const [errorStatus, setErrorStatus] = useState(error);

    useEffect(() => {
        setValueInCurruentField(parseInt(id), numberValue, errorStatus);
   }, [numberValue])


    const setColorSelected = (e) =>{
        e.target.classList.add('selected');
    }
    
    const setColorUnselected = e =>{
        e.target.className='cell-input'

        if (errorStatus ==='true') e.target.classList.add('error');
    }

    const toggleErrorStatus= cell => {
        if(cell.value && currentValues.includes(cell.value)){
            setErrorStatus('true');
        } else {
             setErrorStatus('false');
        }
    }

    const pressNumber = e => {  
        let val = e.target.value[0]
        setUserNumber(val);
    }

    const handleChangeValue = cell => {
        setUserNumber(cell.value.slice(0,1));
        toggleErrorStatus(cell)
    }
    return (
          <input
          type="number"
          //className="cell-input"
          error={errorStatus}
          className={error == 'true' ?'cell-input error': 'cell-input'}
         // className={error? 'cell-input' : 'cell-input error'}
          x={x}
          y={y}
          s={s}
          id={id}
          key={id}
          value={String(numberValue)}
          readOnly={readOnly}
          
        //  selectedCell={selected}

          onFocus={ (e) => {setColorSelected(e);
                            onSelectCell(e.target)}}

          onBlur={ (e) => setColorUnselected(e)}
          onKeyDown={ (e) => pressNumber(e)}
          onChange={(e) => handleChangeValue(e.target)}

          />
      );
}