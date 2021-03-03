import React, { useState, useEffect } from 'react';

export default function Timer (props){
    const { gameStatus, setGameStatus, continueGame, gameIsFinished, difficulty } = props;

    let [hours, setTimerHours] = useState(0);
    let [minutes, setTimerMinutes] = useState(0);
    let [seconds, settimerSeconds] = useState(0);
    let [timerText, setTimerText] = useState('0:00:00');
    let [timePaused, setTimePaused] = useState(continueGame ? +localStorage.getItem('timer') : 0);

    useEffect(() => { localStorage.setItem('timer', timePaused)}, [timerText])

    useEffect(()=> {
      const timer = setInterval(() => {
        if (gameStatus === 'process'){
          seconds = timePaused % 60;
          minutes = Math.trunc((timePaused/ 60) % 60);
          hours = Math.trunc((minutes/60));
          settimerSeconds(seconds); 
          setTimerMinutes(minutes); 
          setTimerHours(hours); 
          timerDisplay();
          setTimePaused(timePaused + 1)
        } 
      }, 1000);
  
      return () => {clearTimeout(timer)};
    }, [timePaused, gameStatus])

    useEffect(()=> {
      let i = 0;
      for (let key in localStorage) {
        if (key.match(/result/)) {
          i += 1;
        }
      }

      if(gameIsFinished) {
        setGameStatus('finished')
        localStorage.setItem(`result${i+1}`, JSON.stringify({time: timerText, tags: [difficulty || localStorage.getItem('difficulty')], date: new Date(), key: i+1}))
        localStorage.removeItem('timer')
        localStorage.removeItem('sudoku');
        localStorage.removeItem('difficulty');
      }
    }, [gameIsFinished])

    const timerDisplay = () => {
        let sec = seconds > 9 ?  seconds : `0${seconds}`;
        let min = minutes > 9 ? minutes : `0${minutes}`;
        setTimerText(`${hours}:${min}:${sec}`);
    }
  
    return (
        <button className="wrapper-timer">
            <span className="timer">{timerText}</span>
        </button>
    )
}
