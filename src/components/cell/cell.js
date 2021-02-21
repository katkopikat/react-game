import React, { useState } from 'react';
import './cell.css'

export default function Cell(props){
    return (
          <input
          type="number"
          className="cell-input"
          value={props.value}/>
      );
}