import React from 'react';
import 'antd/dist/antd.css';
import { Table, Tag } from 'antd';
import './Score.css'

const results = [
  {
    key: '1',
    time: '01:37:18',
    date: '28.02.21',
    tags: ['medium'],
  },
  {
    key: '2',
    date: '25.02.21',
    time: '01:12:18',
    tags: ['easy'],
  },
  {
    key: '3',
    date: '01.03.21',
    time: '00:40:18',
    tags: ['hard'],
  },
  {
    key: '4',
    date: '25.02.21',
    time: '01:07:18',
    tags: ['medium'],
  },
  {
    key: '5',
    date: '01.03.21',
    time: '00:36:18',
    tags: ['easy'],
  },
];

function sortScore(arr){
  return arr.sort((a, b) => {
    //let first = a.date.replace(':','');
    //let second = b.date.replace(':','');
    if (a.time > b.time) return 1;
    if (a.time < b.time) return -1;
    return 0;
  });
}

export default function Score(){
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
          render: text => <a>{text}</a>,
        },
      ];
      

      
      return(<Table columns={columns} dataSource={sortScore(results)} id="score-table"/>)
}