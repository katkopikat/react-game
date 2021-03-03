import React from 'react';
import { Radio } from 'antd';

 export default function Difficulty(props){
   return (
   <div className="wrapper-difficulty-btns">
    <h1 className="main-heading"> Let`s Sudoku! </h1>
      <Radio.Group onChange={(e)=> props.onChooseDifficulty(e.target.value)}>
        <Radio.Button value="cross-check" className="btn-difficulty">Cross-check</Radio.Button>
        <Radio.Button value="easy" className="btn-difficulty">Easy</Radio.Button>
        <Radio.Button value="medium" className="btn-difficulty">Medium</Radio.Button>
        <Radio.Button value="hard" className="btn-difficulty">Hard</Radio.Button>
      </Radio.Group>
    </div>)

 }

 //defaultValue="medium"