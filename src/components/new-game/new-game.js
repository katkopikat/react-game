
import React, { useState } from 'react';
import Game from '../game';
import Difficulty from '../btns-difficulty';

export default function NewGame(props){
    const { settings } = props;
    const [startNemGame, setStartedGame] = useState(false);
    const [difficulty, setDifficulty] = useState(null);

    const onChooseDifficulty = (val) => {
        setDifficulty(val)
        setStartedGame(true);
    }
  
    return(
        <div className="game-wrapper">
           {startNemGame ? null : <Difficulty onChooseDifficulty={onChooseDifficulty}/>}
           {startNemGame ? <Game difficulty={difficulty} settings={settings}/> : null} 
        </div>
    )
}