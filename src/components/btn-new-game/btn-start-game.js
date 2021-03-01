import React from 'react';
import { Link } from 'react-router-dom';

import './btn-start-game.css'

export default function NewGameBtn(){
    
    return (
        <Link to="/new-game">

            <button className="new-game-btn">
            {/* onClick={() => localStorage.clear()}> */}
                New game
            </button>
        </Link>
    )
}