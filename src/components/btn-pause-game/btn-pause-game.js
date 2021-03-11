import React from 'react';

export default function PauseGameBtn(props){
    return (
    <button className="pause-btn">
    {props.gameStatus === 'paused' ? 'Play' : 'Pause'}
    </button>)
}