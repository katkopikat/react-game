import React from 'react';
import NewGameBtn from '../btn-new-game';
import LoadGameBtn from '../btn-load-game';

export default function LoadGame(){


    return (
        <div className="game-wrapper">
            <h1 className="main-heading"> Let`s Sudoku! </h1>
                 <div className="wrapper-loaded-game">
                    <h3 className="sub-heading"> You have don`t finished game. Do you want continue or start new?</h3>
                    <LoadGameBtn/>
                    <NewGameBtn />
                </div>
        </div>
    )
} 