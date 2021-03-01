import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useSound } from 'use-sound';

import Menu from './components/menu/menu';
import NewGame from './components/new-game';
import LoadGame from './components/load-game';
import Game from './components/game';
import Score from './components/score'
import Settings from './components/settings'
import './App.css';

import checkGameInLS from './helpers/checkLS'

function App() {

  const [continueGame, setContinueGame] = useState(false);
  const checkIsContinue = (value) => { setContinueGame(value) }

  return (
    <div className="App">
      <header className="App-header">
        <Router>
        <Menu />
            <Redirect from='/' to={ checkGameInLS() ? '/load-game' : '/new-game'} exact/>
            <Route path="/new-game" component={NewGame} />
            <Route path="/load-game" render={ () => <LoadGame checkIsContinue={checkIsContinue}/> }/>
            <Route path="/game" render={ () => <Game continueGame={continueGame}/> }/>
            <Route path="/score" component={Score} />
            <Route path="/settings" component={Settings} />
        </Router>
      </header>
    </div>
  );
}

export default App;

