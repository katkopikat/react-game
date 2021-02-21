import React, { useState, Component } from 'react';
import Cell from '../cell';
import './grid.css';


// export default class Sudoku extends Component{
//     state = {
//        field = []
//       } 
// }

function Matrix(){
    const baseField = [];
    for (let x = 0; x < 9; x++ ){
        for (let y = 0; y < 9; y++ ){
            baseField.push({x , y})  
        }
    }

    // console.log(baseField)
    // this.setState(({ field }) => {
    //     field = [...baseField]
    // })

    return baseField.map((cell, i ) => <Cell value={i%9+1}/>)
}

// selectedRow = (cell) => {
//     const { field } = this.state;
//     const row = [];
//     row.push()
//     return row;
// }

//  selectedCol = (cell) => {

// }

// selectedArea = (cell) =>{

// }

export default function Grid(props){
    return (
        <div className="game-grid">
            <Matrix/>
        </div>
    );
}