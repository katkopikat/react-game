import React, { useState, useEffect, useRef } from 'react';
import './timer.css'


export default function Timer (props){
  
    let { gameStatus } = props.gameStatus;
    let [minutes, setTimerMinutes] = useState(0);
    let [seconds, settimerSeconds] = useState(0);
    let [timerText, setTimerText] = useState('00:00');

    let idInterval = useRef();

    // if(gameInProcess){
        
    //     console.log('Игра в процессе')
    // } else {
    //     console.log('не в процессе')
    // }

    useEffect(() => {
        if (gameStatus === 'process'){
            const timer = setTimeout(() => {
                console.log('This will run after 1 second!')
              }, 1000);
              return () => clearTimeout(timer);
        }
        
      }, [gameStatus]);


    useEffect(()=> {
        console.log('gameStatus', gameStatus)
        //clearTimer()
      // startTimer();
      let timeMinute = 0;
      const timer = setInterval(() => {
        seconds = timeMinute % 60;
        minutes = Math.trunc((timeMinute / 60) % 60);
        settimerSeconds(seconds); 
        setTimerMinutes(minutes); 
        timerDisplay();
        timeMinute += 1;
      }, 1000);

      return () => clearTimeout(timer);

    }, [gameStatus]);

    const startTimer = () => {
        console.log('Таймер идёт')
        let timeMinute = 0;
        idInterval = setInterval(() => {
          seconds = timeMinute % 60;
          minutes = Math.trunc((timeMinute / 60) % 60);
          settimerSeconds(seconds); 
          setTimerMinutes(minutes); 
          timerDisplay();
          timeMinute += 1;
        }, 1000);
    }


    const timerDisplay = () => {
        let sec = seconds > 9 ?  seconds : `0${seconds}`;
        let min = minutes > 9 ? minutes : `0${minutes}`;
        setTimerText(`Time: ${min}:${sec}`);
    }


    const clearTimer = () => {
        setTimeout(() => {
          clearInterval(idInterval);
        }, 0);
      }

  
      return (
        <button className="wrapper-timer">
            <span className="timer">{timerText}</span>
        </button>
  )
}