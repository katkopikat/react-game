import React from 'react';
import { Link } from 'react-router-dom';
// import Difficulty from '../btns-difficulty';

import './btn-start-game.css'

export default function NewGameBtn(){

    const clearLastGameData = () => {
        localStorage.removeItem('diffuculty');
        localStorage.removeItem('sudoku');
        localStorage.removeItem('timer');
    }
    
    return (
        <Link to="/new-game">
            <button className="new-game-btn"
                    onClick={() => clearLastGameData()}> 
                     New game
            </button>
        </Link>
    )
}