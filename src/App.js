import React, { useEffect, useState }from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import NewGameBtn from './components/btn-new-game';
import LoadGameBtn from './components/btn-load-game';
import Game from './components/game';
import Menu from './components/menu/menu';
import Difficulty from './components/btns-difficulty/btns-dificulty';
import Score from './components/score'
import randomGeneratedField from './components/grid/randomGenerated';

import NewGame from './components/new-game';

function App() {
  // const [startNemGame, setStartedGame] = useState(false);
  // const [showDiffBtns, setShowDifficultyBtns] = useState(true);

  // const [showScore, setShowScore] = useState(false);
  // const [difficulty, setDifficulty] = useState('medium');
  // //gameStatus :  not-startded --> process --> paused --> process 
  // const [gameStatus, setStatus] = useState('non-started');

  // const [startField, setStartField] = useState(null);

  // useEffect(()=> {
  //   if(localStorage.length){
  //     setShowDifficultyBtns(false)
  //   }
  
  // }, [])

  // const onStartNewGame = () => {
  //     setStartedGame(true);
  //     setStatus('process');
  // }

  // const onShowScore = () => {
  //   setShowScore(true);
  // }

  // const setGameStatus = (status) => {
  //     setStatus(status);
  // }

  // const onChooseDifficulty = (val) => {
  //     setDifficulty(val)
  //     setStartField(randomGeneratedField(val));
  //     setStartedGame(true);
  //     setStatus('process');
  // }

  // const showDifficultyBtns = () => {
  //   setShowDifficultyBtns(true);
  // }
  // // const newGame = () => {
    
  // // }

  // const loadGame = () => {
  //   let arr;
  //   if(localStorage.length > 0){
  //     for(let key in localStorage) {
  //         if (key.match(/sudoku/)) {
  //         let loadedGame= JSON.parse(localStorage.getItem('sudoku'));
  //         arr = [...loadedGame.currentField]
  //       }
  //     }
  //     showDifficultyBtns(false);
  //     setStartField(arr);
  //     setStartedGame(true);
  //     setStatus('process');
  //   }
  // }

  return (
    <div className="App">
      <Menu />
      {/* <Menu onStartNewGame={onStartNewGame}  onShowScore={onShowScore}/>  onStartNewGame={onStartNewGame}  onShowScore={onShowScore} */}
      <header className="App-header">
        <Router>
            <Route path="/" component={NewGame} exect />
            {/* <Route path="/loadgame" component={LoadGame} />
            <Route path="/score" component={Score} />
            <Route path="/settings" /> */}
             <Route path="/score" component={Score} />
        </Router>
          
          {/* <h1 className="main-heading"> Let`s Sudoku! </h1>
          {localStorage.length > 0 || gameStatus !== 'non-started'
                                    ? <div className="wrapper-loaded-game">
                                          <h3 className="sub-heading"> You have don`t finished game. Do you want continue or start new?</h3>
                                          <LoadGameBtn loadGame={loadGame}/>
                                          <NewGameBtn showDifficultyBtns={showDifficultyBtns}/>
                                      </div>
                                    : <div><Difficulty onChooseDifficulty={onChooseDifficulty}/></div>
            }

          <div className="game-wrapper">
            {showDiffBtns ? <Difficulty onChooseDifficulty={onChooseDifficulty}/> : null}
            {startNemGame ? <Game setGameStatus={setGameStatus} gameStatus={gameStatus} startField={startField}/> : null}
            {showScore && !startNemGame ? <Score /> : null}
          </div> */}
      </header>
    </div>
  );
}

export default App;

