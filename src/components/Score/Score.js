import React, { useEffect, useState } from 'react';
import { Table, Tag } from 'antd';
//import 'antd/dist/antd.css';
//import './score.css'


const getResultsfromLS = () => {
  let res = [];
  let j = 1;
  for (let key in localStorage) {
    if (key.match(/result/)) {
      let obj = JSON.parse(localStorage.getItem(`result${j}`)); 
      if (!obj.time.match(/0:00:00/)){  // TO DO!!! ЭТО ВРЕМЕННЫЙ КОСТЫЛЬ
        res.push(obj);
        j += 1;
      }
    }
  }
  return res;
}

function sortScore(arr){
  return arr.sort((a, b) => {
    if (a.time > b.time) return 1;
    if (a.time < b.time) return -1;
    return 0;
  });
}

export default function Score(){

    const [results, setResultsArray] = useState([]);

    useEffect(() => {
      let arrayRes = sortScore(getResultsfromLS());
      if (arrayRes.length === 0) arrayRes.push(
          {
            time: '',
            date: '',
            key: 0,
            tags: ['You haven`t results yet']
          }
        )
      if (arrayRes.length >= 10) arrayRes.length = 10;

      setResultsArray(arrayRes);
    }, [])
    
    const columns = [
        {
          title: 'Time',
          dataIndex: 'time',
          date: 'date',
          key: 'time',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Difficulty',
          key: 'tags',
          dataIndex: 'tags',
          render: tags => (
            <>
              {tags.map(tag => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'hard') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        },
        {
          title: 'Date',
          dataIndex: 'date',
          date: 'date',
          key: 'date',
          render: text => <a>{text.substr(0, 10)}</a>,
        },
    ];
      
    return ( 
      <div className="score-wrapper">
        <h1 className="main-heading"> Score </h1>
        <Table columns={columns} dataSource={results} id="score-table"/>
    </div> )
}