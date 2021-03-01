import React from 'react';
import { Radio, Checkbox } from 'antd';

export default function Settings(){

    
    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
      }

    return(
        <div className="game-wrapper">
            <h1>Settings</h1>

             
            <Checkbox onChange={onChange} className="checkbox-hint"> Show error hint? </Checkbox>
        </div>
    )
}