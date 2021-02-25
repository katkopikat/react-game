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
    const [selRow, setSelectedRow] = useState(null);
    const [selCol, setSelectedCol] = useState(null);
    const [selSegm, setSelectedSegmnent] = useState(null);
    const [selectedCell, setSelected] = useState(null);
   // const [currentValueInRow, setValueInRow] = useState([]);
    const [currentValues, setValues] = useState([]);

 
    let idCount = 1;
    const baseField = [];
    for (let y = 0; y < 9; y++ ){
        for (let x = 0; x < 9; x++ ){
            let prop = {
                x,
                y,
                s: parseInt(y / 3) * 3 + parseInt(x / 3),
                id: idCount,
                value: sudokuArray[idCount-1],
               // readOnly: !sudokuArray[idCount-1] ? true : ''
            }
            baseField.push(prop)  
            idCount++;
        }
    }

    const findElementInDOM = (attr) => {
        const findAttr = selectedCell.getAttribute(`${attr}`);
        return document.querySelectorAll(`input[${attr}="${findAttr}"]`);
    }


     useEffect(() => {
         if(selectedCell){
           document.querySelectorAll('.sub-selected').forEach(it => it.classList.remove('sub-selected'));

           const rowElements = findElementInDOM('x');
           const colElements = findElementInDOM('y');
           const segmElements = findElementInDOM('s');

           setSelectedRow(rowElements)
           setSelectedCol(colElements)
           setSelectedSegmnent(segmElements)
         }
     }, [selectedCell]);


     useEffect(() => {
        // let tempRow = [];
        // let tempCol = [];

        let values = [];


        if(selRow){
          [...selRow, ...selCol, ...selSegm].forEach(it => {
              it.classList.add('sub-selected');
              if(it.value){
                values.push(it.value);
              }
        });

        //   selCol.forEach(it => {
        //     it.classList.add('sub-selected');
        //       if(it.value){
        //       tempCol.push(it.value);
        //       }
        //   })

          
        }
        //console.log(values)
        setValues([...values])
       // setValueInCol(...tempCol)

    }, [selRow, selCol, selSegm]);


    const onSelectCell = (val) => {
        setSelected(val);
    }

    return (  baseField.map(cell => 
        <Cell
             x={cell.x+1}
             y={cell.y+1}
             s={cell.s+1}
             key={cell.id}
             value={cell.value}
           //  readOnly={cell.readOnly}
             onSelectCell={onSelectCell}
            // selectedRow={selRow}
             //selecredCol={selCol}
            // currentValueInRow={currentValueInRow}
            currentValues={currentValues}
        />)

    )
}
