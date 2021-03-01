
import React, { useState } from 'react';
import Game from '../game';
import Difficulty from '../btns-difficulty/btns-dificulty';
import randomGeneratedField from '../grid/randomGenerated';

export default function NewGame(){
    const [startNemGame, setStartedGame] = useState(false);
    const [difficulty, setDifficulty] = useState('medium');
    //gameStatus :  not-startded --> process --> paused --> process 
    const [gameStatus, setStatus] = useState('non-started');
    const [startField, setStartField] = useState([]);

    const setGameStatus = (status) => {
        setStatus(status);
    }

    const onChooseDifficulty = (val) => {
        setDifficulty(val)
        setStartField(randomGeneratedField(val));
        setStartedGame(true);
        setStatus('process');

        localStorage.setItem('difficulty', difficulty)
    }
  
    return(

        <div className="game-wrapper">
            <h1 className="main-heading"> Let`s Sudoku! </h1>
           {startNemGame ? null : <Difficulty onChooseDifficulty={onChooseDifficulty}/>}
           {startNemGame ? <Game startField={startField} setGameStatus={setGameStatus} gameStatus={gameStatus}/> : null}
        </div>
    )
}