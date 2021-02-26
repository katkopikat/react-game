import React, { useState, useEffect, useRef } from 'react';
import './btn-start-game.css'

export default function NewGameBtn(props){
    return (
    <button className="new-game-btn"
        onClick={ () => {props.onStartNewGame()}}
    >
    New game
    </button>)
}