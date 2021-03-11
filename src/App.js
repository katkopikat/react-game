import React, { useEffect, useState } from 'react';
import { Route, Redirect, Switch, useHistory } from 'react-router-dom';
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
  let history = useHistory();
  const [continueGame, setContinueGame] = useState(false);
  const [settings, setSettings] = useState({
                                    sounds: false,
                                    music: false,
                                    volumeSounds: 0.5,
                                    volumeMusic: 0.5,
                                    showError: true,
                                    showSelect: true,
                                    showEqualValue: false,
                                    theme: false
  })
  
  const [play, { stop }] = useSound(mainSound, { volume: settings.volumeMusic, loop: true});
  const [ keyPressed, setKeyPressed ] = useState(null);


  useEffect(() => { 
    document.addEventListener('keydown', (e) => {
      setKeyPressed(e)
    })

    window.addEventListener('unload', () => {
      history.push('/')
    })
  }, [])

  useEffect(() => { 
    if(keyPressed){
      if (keyPressed.code === 'KeyQ') {
        keyPressed.preventDefault();
        history.push('/new-game')
      }
      if (keyPressed.code   === 'KeyW') {
        keyPressed.preventDefault();
        history.push('/settings')
      }
      if (keyPressed.code  === 'KeyE') {
        keyPressed.preventDefault();
        history.push('/score')
      }
      if (keyPressed.code  === 'KeyR') {
        keyPressed.preventDefault();
        handleSetSettings({...settings, music : !settings.music} )
      }
      if (keyPressed.code  === 'KeyT') {
        keyPressed.preventDefault();
        handleSetSettings({...settings, sounds : !settings.sounds} )
      }
      // if (keyPressed.code  === 'KeyQ') {
      //   keyPressed.preventDefault();
      //   handleSetSettings({...settings, showSelect : !settings.showSelect} )
      // }
      // if (keyPressed.code  === 'KeyW') {
      //   keyPressed.preventDefault();
      //   handleSetSettings({...settings, showEqualValue : !settings.showEqualValue} )
      // }
      // if (keyPressed.code  === 'KeyE') {
      //   keyPressed.preventDefault();
      //   handleSetSettings({...settings, showError : !settings.showError} )
      // }
    }

  }, [keyPressed])

  useEffect(() => { settings.music ? play() : stop() }, [settings.music])
  useEffect(() => { document.documentElement.setAttribute('theme', (settings.theme ? 'light' : 'dark'))}, [settings.theme])

  const handleSetSettings = (obj) => { setSettings(obj) }
  const checkIsContinue = (value) => { setContinueGame(value)}

  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Switch>
            <Redirect from='/' to={ checkGameInLS() ? '/load-game' : '/new-game'} exact={true} />
            <Route path="/new-game" render={ () => <NewGame settings={settings}/> }/>
            <Route path="/load-game" render={ () => <LoadGame checkIsContinue={checkIsContinue}/> }/>
            <Route path="/game" render={ () => <Game continueGame={continueGame} settings={settings}/> }/>
            <Route path="/score" component={Score} />
            <Route path="/settings" render={ () => <Settings handleSetSettings={handleSetSettings} settings={settings}/> }/>
            </Switch>
      </header>
    </div>
  );
}

export default App;

