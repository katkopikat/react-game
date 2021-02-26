import React, { useState, useEffect }from 'react';
import './App.css';
import Grid from './components/grid';
import NewGameBtn from './components/btn-new-game';
import PauseGameBtn from "./components/btn-pause-game";
import Timer from './components/timer';


const sudokuArray = [
  '', '', 7, 5, 8, 9, 1, '', '',
  '', '', '', '', 2, '', '', '', '', 
  8, 9, '', '', '', '', '', 5, 6,
  '', 2, '', 3, '', 8, '', 6, '',
  '', 1, '', '', '', '', '', 9, '', 
  '', 3, '', 2, '', 5, '', 4, '', 
  9, 4, '', '', '', '', '', 2, 7,
  '', '', '', '', 6, '', '', '', '', 
  '', '', 6, 4, 7, 2, 9, '', '', 
]

const setData = (field, time) => {
  window.addEventListener('unload', function(event) {

    localStorage.setItem('sudoku', `Сохраненная игра + ${new Date().getSeconds()}`)
  });

  document.addEventListener("visibilitychange", function() {

  })
}


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
