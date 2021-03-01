//const [field, setDOMfield] = useState(sudokuArray);

import React, { useState } from 'react';
import Grid from '../grid'
import PauseGameBtn from "../btn-pause-game";
import Timer from '../timer';
import WinMessage from '../win-message'
import './game.css'


export default function Game(props) {
  const { setGameStatus, gameStatus } = props;
  const [gameIsFinished, setGameIsFinished] = useState(false); 

    const toggleStatusGame = () => {
        if(gameStatus === 'process') setGameStatus('paused');
        else if(gameStatus === 'paused') setGameStatus('process');
        else setGameStatus('paused');
    }

    const finishedGame = (status) => {
      setGameIsFinished(status);
    }

    return (
        <div>
           <div className="wrapper-pause-timer">
                <button className="pause-btn"
                onClick={ () => toggleStatusGame()}
                >
                {gameStatus === 'paused' ? 'Play' : 'Pause'}
                </button>

                <Timer gameStatus={gameStatus}/>
            </div>
            <div className="game-grid">
                <Grid startField={props.startField} finishedGame={finishedGame} />
            </div> 
            {gameIsFinished? <WinMessage/> : null}
            
      </div>
    );
  }