import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Menu from './components/menu/menu';
import NewGame from './components/new-game';
import LoadGame from './components/load-game';
import Game from './components/game';
import Score from './components/score'
import Settings from './components/settings'
import checkGameInLS from './helpers/checkLS'

import './App.css';

function App() {
  const [continueGame, setContinueGame] = useState(false);
  const [settings, setSettings] = useState({
                                    sounds: false,
                                    music: false,
                                    volumeSounds: 0.5,
                                    volumeMusic: 0.5,
                                    showHints: true
  })

  const handleSetSettings = (obj) => { setSettings(obj) }
  const checkIsContinue = (value) => { setContinueGame(value)}

  return (
    <div className="App">
      <header className="App-header">
        <Router>
        <Menu />
            <Redirect from='/' to={ checkGameInLS() ? '/load-game' : '/new-game'} exact={true} />
            <Route path="/new-game" render={ () => <NewGame settings={settings}/> }/>
            <Route path="/load-game" render={ () => <LoadGame checkIsContinue={checkIsContinue}/> }/>
            <Route path="/game" render={ () => <Game continueGame={continueGame} settings={settings}/> }/>
            <Route path="/score" component={Score} />
            <Route path="/settings" render={ () => <Settings handleSetSettings={handleSetSettings} settings={settings}/> }/>
        </Router>
      </header>
    </div>
  );
}

export default App;

