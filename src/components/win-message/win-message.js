import React from 'react';
import { Result } from 'antd';
import NewGameBtn from '../btn-new-game';
import { Link } from 'react-router-dom';

export default function WinMessage(){

    return (
        <div className="message">
            <div className="message-wrapper">
                <div className="win-message">
                    <div className="icon-animation">
                        <span className="icon-animation-text" />
                    </div>
                    <Result
                    title="You win!"
                    subTitle="Hey! You're awesome! You solved sudoku! Maybe play more?"
                    >
                    </Result>
                    <Link exact={'true'} to="/" >
                        <NewGameBtn />
                    </Link>
                     </div>
                </div>
            <div className="overlay" />
        </div>
    )
}
