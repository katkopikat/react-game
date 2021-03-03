import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import useSound from 'use-sound';

import Navigation from './components/menu/menu';
import NewGame from './components/new-game';
import LoadGame from './components/load-game';
import Game from './components/game';
import Score from './components/score'
import Settings from './components/settings'
import checkGameInLS from './helpers/checkLS'

import mainSound from './assets/sounds/main.mp3'
import './App.css';



function App() {
  const [continueGame, setContinueGame] = useState(false);
  const [settings, setSettings] = useState({
                                    sounds: false,
                                    music: false,
                                    volumeSounds: 0.5,
                                    volumeMusic: 0.5,
                                    showError: true,
                                    showSelect: true,
                                    theme: false
                          
  })

  const [play, { stop }] = useSound(mainSound, { volume: settings.volumeMusic, loop: true});

  useEffect(() => { settings.music ? play() : stop() }, [settings.music])
  useEffect(() => { document.documentElement.setAttribute('theme', (settings.theme ? 'light' : 'dark'))}, [settings.theme])

  const handleSetSettings = (obj) => { setSettings(obj) }
  const checkIsContinue = (value) => { setContinueGame(value)}


  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Navigation />
        <Switch>
            <Redirect from='/' to={ checkGameInLS() ? '/load-game' : '/new-game'} exact={true} />
            <Route path="/new-game" render={ () => <NewGame settings={settings}/> }/>
            <Route path="/load-game" render={ () => <LoadGame checkIsContinue={checkIsContinue}/> }/>
            <Route path="/game" render={ () => <Game continueGame={continueGame} settings={settings}/> }/>
            <Route path="/score" component={Score} />
            <Route path="/settings" render={ () => <Settings handleSetSettings={handleSetSettings} settings={settings}/> }/>
            </Switch>
      </Router>
      </header>
    </div>
  );
}

export default App;

