import React, { useState, useEffect }from 'react';
import './App.css';
import Grid from './components/grid';
import NewGameBtn from './components/btn-new-game';
import PauseGameBtn from "./components/btn-pause-game";
import Timer from './components/timer';


const sudokuArray = [
  0, 0, 7, 5, 8, 9, 1, 0, 0,
  0, 0, 0, 0, 2, 0, 0, 0, 0, 
  8, 9, 0, 0, 0, 0, 0, 5, 6,
  0, 2, 0, 3, 0, 8, 0, 6, 0,
  0, 1, 0, 0, 0, 0, 0, 9, 0, 
  0, 3, 0, 2, 0, 5, 0, 4, 0, 
  9, 4, 0, 0, 0, 0, 0, 2, 7,
  0, 0, 0, 0, 6, 0, 0, 0, 0, 
  0, 0, 6, 4, 7, 2, 9, 0, 0, 
]



function App() {
  const [startNemGame, setStartedGame] = useState(false);
  const [gameStatus, setGameStatus] = useState('not-started'); // not-startded --> paused --> process

  const startNewGame = () => {
    setStartedGame(true);
    setGameStatus('process');
    // console.log('status?', gameStatus)
   //  console.log('startNewGame в Апп передали в чайлд')
 }

 const pauseGame = () => {
   if(gameStatus === 'process') setGameStatus('paused');
   else if(gameStatus === 'paused') setGameStatus('process');
   else setGameStatus('paused');
 }

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Sudoku
        </h1>
        <NewGameBtn
         onStartNewGame={startNewGame}
         />
         <PauseGameBtn
         onPauseGame={pauseGame}
         gameStatus={gameStatus}/>
         <Timer
          gameStatus={gameStatus}
          />
        <div className="game-grid">
          <Grid difficulty={30} sudokuArray={sudokuArray}/>
        </div>
      </header>
      
    </div>
  );
}

export default App;
