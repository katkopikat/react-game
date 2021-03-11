import React, { useState, useEffect } from 'react';

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
    
    useEffect(() => {
        setValueInCurruentField(parseInt(id), numberValue, errorStatus);
    }, [numberValue])

    const handleClickSound = () => {
        if (soundsIsOn) {
            playClick();
        }
    };

    const handlePressSound = () => {
        if (soundsIsOn){
            playPress();
        }
    };

    const setColorSelected = (e) =>{
            e.target.classList.add('selected');
    }
    
    const setColorUnselected = e =>{
        e.target.className='cell-input'
        if (errorStatus ==='true' && settings.showError) {
            e.target.classList.add('error')
        }
    }

    const toggleErrorStatus= cell => {
        if(cell.value && currentValues.includes(cell.value)){
            setErrorStatus('true');
        } else {
             setErrorStatus('false');
        }
    }

    const handleChangeValue = cell => {
        let { value } = cell;
        let val = value !== '0' ? value.slice(0,1) : '';
        setUserNumber(val);
        toggleErrorStatus(cell)
    }

    const handleFocus = e => {
        setColorSelected(e);
        onSelectCell(e.target)
        handleClickSound();
    }

    return (
          <input
          type="number"
          error={errorStatus}
          className={error === 'true' && settings.showError? 'cell-input error': 'cell-input'}
          x={x}
          y={y}
          s={s}
          id={id}
          key={id}
          value={String(numberValue)}
          readOnly={readOnly}
          onFocus={ (e) => { handleFocus(e) }}
          onBlur={ (e) => setColorUnselected(e)}
          onKeyDown={ () => { handlePressSound()}}
          onChange={(e) => handleChangeValue(e.target)}
          />
    );
}