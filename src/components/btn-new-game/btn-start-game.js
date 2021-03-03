import React from 'react';

export default function NewGameBtn(){

    const clearLastGameData = () => {
        localStorage.removeItem('diffuculty');
        localStorage.removeItem('sudoku');
        localStorage.removeItem('timer');
    }
    
    return (
            <button className="new-game-btn"
                    onClick={() => clearLastGameData()}> 
                    New game
            </button>
    )
}