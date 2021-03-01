import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';

import Menu from './components/menu/menu';
import NewGame from './components/new-game';
import LoadGame from './components/load-game';
import Score from './components/score'
import Settings from './components/settings'

import Game from './components/game';

function App() {

  const [continueGame, setContinueGame] = useState(false);

  const checkGameInLS = () => {
    let i = 0;
    for (let key in localStorage) {
      if(key.match(/sudoku/)){
        i++;
      }
      return i ? true : false;
  }
}

  const checkIsContinue = (value) => {
    setContinueGame(value)
  }

  return (
    <div className="App">
      
      {/* <Menu onStartNewGame={onStartNewGame}  onShowScore={onShowScore}/>  onStartNewGame={onStartNewGame}  onShowScore={onShowScore} */}
      <header className="App-header">
        <Router>
        <Menu />
            <Route path="/new-game" component={NewGame} />
            <Route path="/load-game" render={ () => <LoadGame checkIsContinue={checkIsContinue}/> }/>
            <Route path="/game" render={ () => <Game continueGame={continueGame}/> }/>
            <Route path="/score" component={Score} />
            <Route path="/settings" component={Settings}  />
            { checkGameInLS() ? <Redirect from='/' to='/load-game' exact/> : <Redirect from='/' to='/new-game' exact/>}
        </Router>
      </header>
    </div>
  );
}

export default App;

