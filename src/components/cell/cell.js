import React, { useState, useEffect } from 'react';
//import './cell.css'

import useSound from 'use-sound';
import clickSound from '../../assets/sounds/soundClick.wav'
import pressSound from '../../assets/sounds/soundKey.wav'

export default function Cell(props){
    let {x, y, s, id, value, readOnly, currentValues, setValueInCurruentField, onSelectCell, error, settings } = props;
    const [numberValue, setUserNumber] = useState(String(value) || '');
    const [errorStatus, setErrorStatus] = useState(error);
    const [volumeSound, setVolumeSounds] = useState(settings.volumeSounds);
    const [soundsIsOn, setSoundsIsOn] = useState(settings.sounds);

    const [playClick] = useSound(clickSound, { volume: settings.volumeSounds});
    const [playPress] = useSound(pressSound, { volume: volumeSound });

    useEffect(() => {
        setVolumeSounds(settings.volumeSounds);
        setSoundsIsOn(settings.sounds)
    }, [settings])
    
  

    const handleClickSound = () => {
        if(soundsIsOn){
            playClick();
        }
    };

    const handlePressSound = () => {
        if(soundsIsOn){
        playPress();
        }
    };

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
          error={errorStatus}
          className={error === 'true' && settings.showHints? 'cell-input error': 'cell-input'}
          x={x}
          y={y}
          s={s}
          id={id}
          key={id}
          value={String(numberValue)}
          readOnly={readOnly}
          onFocus={ (e) => {setColorSelected(e);
                            onSelectCell(e.target)
                            handleClickSound();
                            }}

          onBlur={ (e) => setColorUnselected(e)}
          onKeyDown={ (e) => { pressNumber(e);
                               handlePressSound()}}
          onChange={(e) => handleChangeValue(e.target)}

          />
      );
}