import React from 'react';
//import './btn-start-game.css'

export default function LoadGameBtn(props){
    return (
        <button
            className="new-game-btn"
            onClick={ () => {props.loadGame()}}>
            Continue
        </button>
    )
}