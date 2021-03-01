
import React, { useState } from 'react';
import Game from '../game';
import Difficulty from '../btns-difficulty';


export default function NewGame(props){
    const [startNemGame, setStartedGame] = useState(false);
    const [difficulty, setDifficulty] = useState(null);
    //gameStatus :  not-startded --> process --> paused --> process 

    const onChooseDifficulty = (val) => {
        setDifficulty(val)
        setStartedGame(true);
        //setStatus('process');
        
    }
  
    return(
        <div className="game-wrapper">
            <h1 className="main-heading"> Let`s Sudoku! </h1>
           {startNemGame ? null : <Difficulty onChooseDifficulty={onChooseDifficulty}/>}
           {startNemGame ? <Game difficulty={difficulty}/> : null} 
        </div>
    )
}