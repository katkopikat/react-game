import React, { useEffect, useState } from 'react';
import { Table, Tag } from 'antd';

import getResultsfromLS from './getResultsFromLS';
import sortResults from './sortResults';


export default function Score(){

    const [results, setResultsArray] = useState([]);

    useEffect(() => {
      let arrayRes = sortResults(getResultsfromLS());
      if (arrayRes.length === 0) {
        arrayRes.push(
          {
            time: '',
            date: '',
            key: 0,
            tags: ['You haven`t results yet']
          }
        )
      }

      if (arrayRes.length >= 10) {
        arrayRes.length = 10;
        }

      setResultsArray(arrayRes);
    }, [])
    
    const columns = [
        {
          title: 'Time',
          dataIndex: 'time',
          date: 'date',
          key: 'time',
          render: text => <span>{text}</span>,
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
          render: text => <span>{text.substr(0, 10)}</span>,
        },
    ];
      
    return ( 
      <div className="score-wrapper">
        <h1 className="main-heading"> Score </h1>
        <Table columns={columns} dataSource={results} id="score-table"/>
    </div> 
  )
}