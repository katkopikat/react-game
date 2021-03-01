//const [field, setDOMfield] = useState(sudokuArray);

import React, { useState } from 'react';
import Grid from '../grid'
// import PauseGameBtn from "../btn-pause-game";
import Timer from '../timer';
import WinMessage from '../win-message'
import './game.css'
import randomGeneratedField from '../grid/randomGenerated';


export default function Game(props) {
const { continueGame, difficulty } = props;

  const [gameIsFinished, setGameIsFinished] = useState(false);
  const [startField, setStartField] = useState([]); 
    //gameStatus :  not-startded --> process --> paused --> process 
    const [gameStatus, setGameStatus] = useState('non-started');

    useState(() => {
          let arr;
          
          if (continueGame) {
            for (let key in localStorage) {
              if (key.match(/sudoku/)) {
                let temp1= JSON.parse(localStorage.getItem('sudoku'));
                arr = [...temp1.currentField];
              } 
            }
          } else if (!continueGame) {
              arr = randomGeneratedField(difficulty);
          }
          setStartField(arr)
          setGameStatus('process');
          setGameIsFinished(false)
    }, [])

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

                <Timer gameStatus={gameStatus} continueGame={continueGame} gameIsFinished={gameIsFinished} difficulty={difficulty}/>
            </div>
            <div className="game-grid">
                <Grid startField={startField} finishedGame={finishedGame} difficulty={difficulty} />
            </div> 
            {gameIsFinished? <WinMessage/> : null}
            
      </div>
    );
  }