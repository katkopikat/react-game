import React from 'react';
import './btn-start-game.css'

export default function NewGameBtn(props){
    return (
    <button className="new-game-btn"
        onClick={ () => {props.showDifficultyBtns()}}
    >
    New game
    </button>)
}