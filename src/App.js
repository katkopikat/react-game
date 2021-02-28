import React, { useState }from 'react';
import './App.css';
import NewGameBtn from './components/btn-new-game';
import Game from './components/game';
import Menu from './components/menu/menu';
import Difficulty from './components/btns-difficulty/btns-dificulty';
import Score from './components/Score'




// const setData = (field, time) => {
//   window.addEventListener('unload', function(event) {

//     localStorage.setItem('sudoku', `Сохраненная игра + ${new Date().getSeconds()}`)
//   });

//   document.addEventListener("visibilitychange", function() {

//   })
// }


function App() {
  const [startNemGame, setStartedGame] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [difficulty, setDifficulty] = useState('medium');
  //gameStatus :  not-startded --> process --> paused --> process 
  const [gameStatus, setStatus] = useState('non-started');
  
  const onStartNewGame = () => {
      setStartedGame(true);
      setStatus('process');
  }

  const onShowScore = () => {
    setShowScore(true);
  }

  const setGameStatus= (status) => {
      setStatus(status);
  }

  const onChooseDifficulty = (val) => {
      setDifficulty(val)
      setStartedGame(true);
      setStatus('process');
  }

  return (
    <div className="App">
      <header className="App-header">
      <Menu onStartNewGame={onStartNewGame}  onShowScore={onShowScore}/>
        <h1 className="main-heading"> Let`s Sudoku! </h1>
        <div className="game-wrapper">
        {startNemGame ? null : <Difficulty onChooseDifficulty={onChooseDifficulty}/>}
        {startNemGame ? <Game difficulty={difficulty} setGameStatus={setGameStatus} gameStatus={gameStatus}/> : null}
        {showScore ? <Score /> : null}
        </div>
      </header>
    </div>
  );
}

export default App;

