import React from 'react';
import { Link } from 'react-router-dom';
//import './btn-start-game.css'

export default function LoadGameBtn(props){
    return (
        <Link to="/game">
            <button
                className="new-game-btn"
                onClick={() => { props.checkIsContinue(true)} }>
                Continue
            </button>
        </Link>
    )
}