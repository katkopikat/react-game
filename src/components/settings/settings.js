import React  from 'react';
import { Checkbox, Switch, Slider } from 'antd';

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

                <h4> Theme </h4>
                <Switch checkedChildren="light"
                        unCheckedChildren="dark"
                        onChange={(checked) => handleSetSettings ({...settings, theme : checked }) }
                        checked={settings.theme}
                        />

                <div className="checkbox-hint-wrapper">
                <h4> Game hints </h4>
                <Checkbox onChange={ (e) => handleSetSettings ({...settings, showError : e.target.checked })}
                        className="checkbox-hint"
                        checked={settings.showError}> 
                        Show error hint?
                </Checkbox>

                <Checkbox onChange={ (e) => handleSetSettings ({...settings, showSelect: e.target.checked })}
                        className="checkbox-hint"
                        checked={settings.showSelect}> 
                        Show select hint?
                </Checkbox>

                <Checkbox onChange={ (e) => handleSetSettings ({...settings, showEqualValue: e.target.checked })}
                        className="checkbox-hint"
                        checked={settings.showEqualValue}> 
                        Color cells with equal value?
                </Checkbox>
                </div>
            </div>
        </div>
    )
}