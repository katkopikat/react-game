import React  from 'react';
import { Checkbox, Switch, Slider } from 'antd';

//import './settings.css'

export default function Settings(props){
    const { handleSetSettings, settings } = props;

    return(
        <div className="settings">
            <h1>Settings</h1>
            <div className="settings-wrapper">
                <h4> Music </h4>
                <Switch checkedChildren="on"
                        unCheckedChildren="off"
                        checked={settings.music}
                        onChange={ (checked) => handleSetSettings ({...settings, music : checked})} />  
                <Slider defaultValue={settings.volumeMusic*100}
                        onChange={(value) => handleSetSettings ({...settings, volumeMusic : value/100 })}/>

                <h4> Sounds </h4>
                <Switch checkedChildren="on"
                        unCheckedChildren="off"
                        onChange={(checked) => handleSetSettings ({...settings, sounds : checked})}
                        checked={settings.sounds}/>
                <Slider defaultValue={settings.volumeSounds*100}
                        onChange={(value) => handleSetSettings ({...settings, volumeSounds : value/100 })}/>

                <h4> Game hints </h4>
                <Checkbox onChange={ (e) => handleSetSettings ({...settings, showHints : e.target.checked })}
                        className="checkbox-hint"
                        defaultChecked> 
                        Show error hint?
                </Checkbox>
                <h4> Theme </h4>
                <Switch checkedChildren="light"
                        unCheckedChildren="dark"
                        onChange={(checked) => handleSetSettings ({...settings, theme : checked }) }
                        checked={settings.theme}
                        />
            </div>
        </div>
    )
}