import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';

import Menu from './components/menu/menu';
import NewGame from './components/new-game';
import LoadGame from './components/load-game';
import Score from './components/score'
import Settings from './components/settings'

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

  const checkGameInLS = () => {
    return localStorage.length ? true: false;
  }

  return (
    <div className="App">
      
      {/* <Menu onStartNewGame={onStartNewGame}  onShowScore={onShowScore}/>  onStartNewGame={onStartNewGame}  onShowScore={onShowScore} */}
      <header className="App-header">
        <Router>
        <Menu />
            <Route path="/new-game" component={NewGame} />
            <Route path="/load-game" component={LoadGame} />
            <Route path="/score" component={Score} />
            <Route path="/settings" component={Settings}  />
            { checkGameInLS() ? <Redirect from='/' to='/load-game' exact/> : <Redirect from='/' to='/new-game' exact/>}
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

