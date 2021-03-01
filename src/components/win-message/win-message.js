import React from 'react';
//import '../score/node_modules/antd/dist/antd.css';
import { Result, Button } from 'antd';
import NewGameBtn from '../btn-new-game';
import './win-message.css'

export default function WinMessage(){

    return(
        <div>
        <div className="message-wrapper">
            <div className="win-message">
                <div className="icon-animation">
                    <span className="icon-animation-text"/>
                </div>
                <Result
                title="You win!"
                subTitle="Hey! You're awesome! You solved sudoku!
                Maybe play more?"
                extra={[

                < NewGameBtn />
                // <Button type="primary" key="console" className="btns">
                // New Game
                // </Button>
                ]}
                />
             </div>
        </div>
        <div className="overlay"/>
    </div>
    )
}
