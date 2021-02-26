import React, { useState, useEffect }from 'react';
import './App.css';
import Grid from './components/grid';
import NewGameBtn from './components/btn-new-game';
import PauseGameBtn from "./components/btn-pause-game";
import Timer from './components/timer';
import Game from './components/game';
import Menu from './components/menu/menu';




const setData = (field, time) => {
  window.addEventListener('unload', function(event) {

    localStorage.setItem('sudoku', `Сохраненная игра + ${new Date().getSeconds()}`)
  });

  document.addEventListener("visibilitychange", function() {

  })
}


function App() {

  const [startNemGame, setStartedGame] = useState(false);
  const [gameIsStarted, setGameISStarted] = useState(false);

  const [statusField, setStatusField] = useState([]);
  // const [gameStatus, setGameStatus] = useState('not-started'); // not-startded --> paused --> process

  const onStartNewGame = () => {
    setStartedGame(true);
    // setGameStatus('process');
    // setGameISStarted(true);
 }

//  const pauseGame = () => {
//    if(gameStatus === 'process') setGameStatus('paused');
//    else if(gameStatus === 'paused') setGameStatus('process');
//    else setGameStatus('paused');
//  }

  return (
    <div className="App">
      <header className="App-header">
      <Menu onStartNewGame={onStartNewGame} />
        <h1 className="main-heading"> Sudoku </h1>
        {startNemGame ? null : <NewGameBtn onStartNewGame={onStartNewGame}/>}
        {startNemGame ? <Game/> : null}
      </header>
    </div>
  );
}

export default App;
