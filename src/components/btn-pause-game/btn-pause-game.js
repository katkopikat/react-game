import React, { useState, useEffect, useRef } from 'react';

export default function PauseGameBtn(props){
    return (
    <button className="pause-btn"
    onClick={ () => {props.onPauseGame()}}
    >
    {props.gameStatus === 'paused' ? 'Play' : 'Resume'}
    </button>)
}