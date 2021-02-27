import React, { useState }from 'react';
import './App.css';
import NewGameBtn from './components/btn-new-game';
import Game from './components/game';
import Menu from './components/menu/menu';
import Difficulty from './components/btns-difficulty/btns-dificulty'




// const setData = (field, time) => {
//   window.addEventListener('unload', function(event) {

//     localStorage.setItem('sudoku', `Сохраненная игра + ${new Date().getSeconds()}`)
//   });

//   document.addEventListener("visibilitychange", function() {

//   })
// }


function App() {

  const [startNemGame, setStartedGame] = useState(false);
  // const [gameIsStarted, setGameISStarted] = useState(false);
  // const [statusField, setStatusField] = useState([]);
  const [difficulty, setDifficulty] = useState('medium');
  const [gameStatus, setStatus] = useState('non-started'); // not-startded --> paused --> process

  const onStartNewGame = () => {
    setStartedGame(true);
    setStatus('process');
 }

 const setGameStatus= (status) => {
    setStatus(status);
 }

 const onChooseDifficulty = (val) => {
    setDifficulty(val)
 }

  return (
    <div className="App">
      <header className="App-header">
      <Menu onStartNewGame={onStartNewGame} />
        <h1 className="main-heading"> Sudoku </h1>
        {startNemGame ? null : <NewGameBtn onStartNewGame={onStartNewGame}/>}
        {startNemGame ? null : <Difficulty onChooseDifficulty={onChooseDifficulty}/>}
        {startNemGame ? <Game difficulty={difficulty} setGameStatus={setGameStatus} gameStatus={gameStatus}/> : null}
      </header>
    </div>
  );
}

export default App;
