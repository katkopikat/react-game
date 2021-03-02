import React, { useState, useEffect } from 'react';
import Grid from '../grid'
import Timer from '../timer';
import WinMessage from '../win-message'
import randomGeneratedField from '../grid/randomGenerated';
import './game.css'


export default function Game(props) {
  const { continueGame, difficulty, settings } = props;
  const [gameIsFinished, setGameIsFinished] = useState(false);
  const [startField, setStartField] = useState([]); 
  const [gameStatus, setGameStatus] = useState('non-started'); // not-startded --> process --> paused --> process 
  //const [isMounted, setIsMounted] = useState(false);




    // const removeGame = () => {
    //   setIsMounted(false);
    // };

    const generateStartField = () => {
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
    }

    useState(() => {
      generateStartField();
     // setIsMounted(true);
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
        <div className="wrapper-game">
           <div className="wrapper-pause-timer">
                <button className="pause-btn"
                onClick={ () => toggleStatusGame()}
                >
                {gameStatus === 'paused' ? 'Play' : 'Pause'}
                </button>

                <Timer gameStatus={gameStatus} continueGame={continueGame} gameIsFinished={gameIsFinished} difficulty={difficulty}/>
            </div>
            <div className="game-grid">
          
            <Grid startField={startField} finishedGame={finishedGame} difficulty={difficulty} settings={settings}/>
            </div> 
            {gameIsFinished? <WinMessage/> : null}
            
      </div>
    );
  }