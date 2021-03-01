import React from 'react';
import './btn-start-game.css'
import { Link } from 'react-router-dom';

export default function NewGameBtn(){
    return (
        <Link to="/new-game">
            <button className="new-game-btn">
                New game
            </button>
        </Link>
    )
}