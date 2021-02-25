import React, { useState, useEffect, useRef } from 'react';

export default function NewGameBtn(props){
    return (
    <button className="new-game-btn"
    onClick={ () => {props.onStartNewGame()}}
    >
    New game
    </button>)
}