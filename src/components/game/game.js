import React, { useState } from 'react';
import Grid from '../grid'
import Timer from '../timer';
import WinMessage from '../win-message'
import randomGeneratedField from '../grid/randomGenerated';

export default function Game(props) {
  const { continueGame, difficulty, settings } = props;
  const [gameIsFinished, setGameIsFinished] = useState(false);
  const [startField, setStartField] = useState([]); 
  const [gameStatus, setGameStatus] = useState('non-started'); 

    const generateStartField = () => {
      let arr;
      if (continueGame) {
        for (const key in localStorage) {
          if (key.match(/sudoku/)) {
            const savedGame= JSON.parse(localStorage.getItem('sudoku'));
            arr = [...savedGame.currentField];
          } 
        }
      } else if (!continueGame) {
        arr = randomGeneratedField(difficulty);
      }
      setStartField(arr)
      setGameStatus('process');
      setGameIsFinished(false)
    };

    useState(() => {
          generateStartField();
          // TO DO! ОБРАБОТАТЬ СЛОЖНОСТЬ В LS - КОСТЫЛЬ
          let diffucultyLS = localStorage.getItem('difficulty');
          let difficultyFromLS = diffucultyLS && diffucultyLS !== 'undefined' ? diffucultyLS : 'medium';
    
          localStorage.setItem('difficulty', `${!continueGame && difficulty ? difficulty : difficultyFromLS}`);

    }, [])

    const toggleStatusGame = () => {
        if (gameStatus === 'process') {
          setGameStatus('paused');
        } else if (gameStatus === 'paused') {
          setGameStatus('process');
        } else {
          setGameStatus('paused');
        }
      }

    const finishedGame = (status) => { setGameIsFinished(status) }

    return (
      <React.Fragment>
        <div className="wrapper-game">
           <h1 className="main-heading"> Let`s Sudoku! </h1>
           <div className="wrapper-pause-timer">
              <button className="pause-btn"
                      onClick={ () => toggleStatusGame()}>
                      {gameStatus === 'paused' ? 'Play' : 'Pause'}
              </button>
              <Timer gameStatus={gameStatus}
                     setGameStatus={setGameStatus}
                     continueGame={continueGame}
                     gameIsFinished={gameIsFinished}
                     difficulty={difficulty}
              />
          </div>
           <div className={gameStatus === 'paused'? 'game-grid-paused' : 'game-grid'}>
              <Grid startField={startField} 
                    finishedGame={finishedGame}
                    difficulty={difficulty}
                    settings={settings}
              />
          </div> 
         </div>
      {gameIsFinished? <WinMessage /> : null}
      </React.Fragment>
    );
  }