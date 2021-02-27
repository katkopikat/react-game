import React from 'react';
import 'antd/dist/antd.css';
import { Result, Button } from 'antd';
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
            // status="success"
                title="You win!"
                subTitle="Hey! You're awesome! You solved sudoku!
                Maybe play more?"
                extra={[
                <Button type="primary" key="console" className="btns">
                New Game
                </Button>
                ]}
                />
             </div>
        </div>
        <div className="overlay"/>
    </div>
    )
}
