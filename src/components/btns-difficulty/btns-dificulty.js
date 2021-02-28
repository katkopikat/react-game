import React from 'react';
import 'antd/dist/antd.css';
import './btns-dificulty.css'
import { Radio, Checkbox } from 'antd';

 export default function Difficulty(props){
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

   return (
   <div className="wrapper-difficulty-btns">
    <Radio.Group onChange={(e)=> props.onChooseDifficulty(e.target.value)} defaultValue="medium">
      <Radio.Button value="cross-check" className="btn-difficulty">Cross-check</Radio.Button>
      <Radio.Button value="easy" className="btn-difficulty">Easy</Radio.Button>
      <Radio.Button value="medium" className="btn-difficulty">Medium</Radio.Button>
      <Radio.Button value="hard" className="btn-difficulty">Hard</Radio.Button>
    </Radio.Group>
{/* 
    <Checkbox onChange={onChange} className="checkbox-hint"> Show error hint? </Checkbox> */}
    </div>)

 }