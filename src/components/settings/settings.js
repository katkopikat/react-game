import React, {useState} from 'react';
import { Checkbox, Switch, Slider } from 'antd';
import useSound from 'use-sound';
import mainSound from '../../assets/sounds/main.mp3'
import './settings.css'



export default function Settings(props){
 const { handleSetSettings, settings } = props;

 const [musicIsOn, setMusicIsOn] = useState(settings.music);
 const [play, { stop }] = useSound(mainSound, { volume: settings.volumeMusic});
  
    const handleSetSoundsOn = (checked) => {
       handleSetSettings ({...settings, sounds : checked })
    }

    const handleSetMusicOn = (checked) => {
        handleSetSettings ({...settings, music : checked })
        
        setMusicIsOn(checked)
        !musicIsOn ? play() : stop();
    }

    const handleChangeSoundVolume = value => {
        handleSetSettings ({...settings, volumeSounds : value/100 })
    };
   
    const handleChangeMusicVolume = value => {
        handleSetSettings ({...settings, volumeMusic : value/100 })
    };

    function onChangeShowHint(e) {
        handleSetSettings ({...settings, showHints : e.target.checked })
    }

    return(
        <div className="settings-wrapper">
            <h1>Settings</h1>
            <div> 
                <h3> Music </h3>
                <Switch checkedChildren="on" unCheckedChildren="off" onChange={handleSetMusicOn} checked={settings.music}/>
                <Slider defaultValue={settings.volumeMusic*100} onChange={handleChangeMusicVolume}/>

                <h3> Sounds </h3>
                <Switch checkedChildren="on" unCheckedChildren="off" onChange={handleSetSoundsOn} checked={settings.sounds}/>
                <Slider defaultValue={settings.volumeSounds*100} onChange={handleChangeSoundVolume}/>

                <h3> Game hints </h3>
                <Checkbox onChange={onChangeShowHint} className="checkbox-hint" defaultChecked> Show error hint? </Checkbox>
            </div>
        </div>
    )
}