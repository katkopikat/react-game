import React, { useState, useEffect, useRef } from 'react';

export default function PauseGameBtn(props){
    return (
    <button className="pause-btn"
   // onClick={ () => {props.props.setGameStatus('pause')}}
    >
    {props.gameStatus === 'paused' ? 'Play' : 'Resume'}
    </button>)
}