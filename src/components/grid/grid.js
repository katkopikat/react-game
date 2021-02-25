import React, { useState, useEffect } from 'react';
import Cell from '../cell';
import './grid.css';


// export default class Sudoku extends Component{
//     state = {
//        field = []
//       } 
// }

// selectedRow = (cell) => {
//     const { field } = this.state;
//     const row = [];
//     row.push()
//     return row;
// }



// selectedArea = (cell) =>{

// }
// function BaseGrid(props){
//     // const baseString = '123000000000070000000000000000000000000000000000080000000000000000000000000000087';
//     // const startGrid = baseString
//     //                         .split('')
//     //                         .filter(x => '0123456789'.includes(x))
//     //                         .map(x => Number(x))



export default function Grid(props){
    
    const {difficulty, sudokuArray} = props;
    const [grid, setGrid] = useState(null);
    const [selRaw, setSelectedRaw] = useState(null);
    const [selCol, setSelectedCol] = useState(null);
    const [sel, setSelected] = useState(null);

 
    let idCount = 1;
    const baseField = [];
    for (let x = 0; x < 9; x++ ){
        for (let y = 0; y < 9; y++ ){
            let prop = {
                x,
                y,
                id: idCount,
                value: sudokuArray[idCount-1],
                readOnly: !sudokuArray[idCount-1] ? true : ''
            }
            baseField.push(prop)  
            idCount++;
        }
    }
     useEffect(() => {
         if(sel){
           document.querySelectorAll('.sub-selected').forEach(it => it.className='cell-input');

           let row = document.querySelectorAll(`input[x="${sel.getAttribute('x')}"]`).forEach(it => it.className='cell-input sub-selected');
           let col = document.querySelectorAll(`input[y="${sel.getAttribute('y')}"]`).forEach(it => it.className='cell-input sub-selected');
         }
     }, [sel]);

    const onSelectCell = (val) => {
        setSelected(val);
    }

  

    return (  baseField.map(cell => 
        <Cell
             x={cell.x+1}
             y={cell.y+1}
             key={cell.id}
             value={cell.value}
             readOnly={cell.readOnly}
             onSelectCell={onSelectCell}
        />)

    )
}
