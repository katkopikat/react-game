import React, { useState, useEffect }from 'react';
import './App.css';
import Grid from './components/grid';
import NewGameBtn from './components/btn-new-game';
import PauseGameBtn from "./components/btn-pause-game";
import Timer from './components/timer';

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
          <Grid difficulty={30}/>
        </div>
      </header>
      
    </div>
  );
}

export default App;
