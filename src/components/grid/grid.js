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
function BaseGrid(props){
    const baseString = '123000000000070000000000000000000000000000000000080000000000000000000000000000087';
    const startGrid = baseString
                            .split('')
                            .filter(x => '0123456789'.includes(x))
                            .map(x => Number(x))
                            //console.log(startGrid-1)
    //const {difficulty} = props;

    // getPotentials(){
    //     const potentails = [];

    // }

    let idCount = 1;
    const baseField = [];
    for (let x = 0; x < 9; x++ ){
        for (let y = 0; y < 9; y++ ){
            console.log(typeof(startGrid[idCount-1]))
            let prop = {
                x,
                y,
                id: idCount,
                value: startGrid[idCount-1],
                readOnly: !startGrid[idCount-1] ? true : ''
            }
            baseField.push(prop)  
            idCount++;
        }
    }
    // console.log(baseField)
    return (baseField.map(cell => <Cell x={cell.x+1} y={cell.y+1} key={cell.id} value={cell.value} readOnly={cell.readOnly}/>))
}


export default function Grid(props){
    const {difficulty} = props;
    const [grid, setGrid] = useState(null);
    const [selRaw, setSelectedRaw] = useState(null);
    const [selCol, setSelectedCol] = useState(null);
    const [sel, setSelected] = useState(null);

    const updateSelection = (value) => {
        setSelected(value);
     }

    //  const baseField = [];
    //  for (let x = 0; x < 9; x++ ){
    //      for (let y = 0; y < 9; y++ ){
    //          baseField.push({x, y})  
    //      }
    //  }

     useEffect(() => {
        console.log(sel)
  
        //let f = field.filter(cell => cell.x === sel)
        //console.log(f)//.map((item) => { item.className='cell-input sub-selected'});
     }, [sel]);


    // const selectedCol = (e) => {
    //     const cell = e.target
    //     if(cell.selected){
    //         console.log('выделена')
    //     }
    // }
        
       //baseField.filter((cell.y) =>  cell.className='selected sub-selected')
   

//    useEffect(() => {
//     console.log(selectedCell)
//     //console.log(x)
//     //props.selectedCell
// });

    //i%9+1
    return <BaseGrid difficulty={difficulty}/>
}
