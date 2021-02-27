//const [field, setDOMfield] = useState(sudokuArray);

import React, { useState } from 'react';
import Grid from '../grid'
import PauseGameBtn from "../btn-pause-game";
import Timer from '../timer';
import './game.css'

// const sudokuArray = [
//     '', '', 7, 5, 8, 9, 1, '', '',
//     '', '', '', '', 2, '', '', '', '', 
//     8, 9, '', '', '', '', '', 5, 6,
//     '', 2, '', 3, '', 8, '', 6, '',
//     '', 1, '', '', '', '', '', 9, '', 
//     '', 3, '', 2, '', 5, '', 4, '', 
//     9, 4, '', '', '', '', '', 2, 7,
//     '', '', '', '', 6, '', '', '', '', 
//     '', '', 6, 4, 7, 2, 9, '', '', 
//   ]
  

//let sudokuArray = Array(1,2,3,4,6,7,5,8,9).sort(function() {return 0.5 - Math.random()});
//console.log(sudokuArray)




export default function Game(props) {
  const { setGameStatus, gameStatus } = props;
    //const [gameStatus, setGameStatus] = useState('not-started'); 

    const toggleStatusGame = () => {
        if(gameStatus === 'process') setGameStatus('paused');
        else if(gameStatus === 'paused') setGameStatus('process');
        else setGameStatus('paused');

      //  console.log(gameStatus)
    }

    return (
        <div>
           <div className="wrapper-pause-timer">
                <button className="pause-btn"
                onClick={ () => toggleStatusGame()}
                >
                {gameStatus === 'paused' ? 'Play' : 'Resume'}
                </button>

                <Timer gameStatus={gameStatus}/>
            </div>
            <div className="game-grid">
                <Grid difficulty={props.difficulty}
                //sudokuArray={sudokuArray}
                />
            </div>        
      </div>
    );
  }