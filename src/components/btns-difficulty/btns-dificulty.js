import React from 'react';
import 'antd/dist/antd.css';
import './btns-dificulty.css'
import { Radio } from 'antd';

 export default function Difficulty(props){

   return (
   <div className="wrapper-difficulty-btns">
    <Radio.Group onChange={(e)=> props.onChooseDifficulty(e.target.value)} defaultValue="medium">
      <Radio.Button value="cross-check">Cross-check</Radio.Button>
      <Radio.Button value="easy">Easy</Radio.Button>
      <Radio.Button value="medium">Medium</Radio.Button>
      <Radio.Button value="hard">Hard</Radio.Button>
    </Radio.Group>
    </div>
     )

 }