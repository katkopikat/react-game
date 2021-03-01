import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button } from 'antd';
import {
  RightSquareOutlined,
  BarChartOutlined,
  FullscreenOutlined,
  // MenuUnfoldOutlined,
  // MenuFoldOutlined,
  ControlOutlined
} from '@ant-design/icons';
//import '../score/node_modules/antd/dist/antd.css';


import './menu.css'

import checkGameInLS from '../../helpers/checkLS';

const { SubMenu } = Menu;


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        collapsed: true, 
    };
  }

//   checkGameInLS = () => {
//     let i = 0;
//     for (let key in localStorage) {
//       console.log(key)
//       if(key.match(/sudoku/)){
//         i+=1;
//       }    
//   }
//   return i ? true : false;
// }
  // toggleCollapsed = () => {
  //   this.setState({
  //     collapsed: !this.state.collapsed,
  //   });
  // };

  // componentDidMount() {

  // }

  toggleScreen(){
    console.log('full')
    if(!document.fullscreenElement){
      document.documentElement.requestFullscreen();
    }
    else {
      if(document.fullscreenEnabled){
        document.exitFullscreen();
      }
    }
  }
 
  render() {
    return (
      <div
       style={{ width: 256 }}
       className="menu">
        <Menu
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}>

          <Menu.Item key="new-game" icon={<RightSquareOutlined />}>
          <Link to={() => checkGameInLS() ? '/load-game' : '/new-game'}/>
          Game
          </Menu.Item>

          <Menu.Item key="score" icon={<BarChartOutlined />}>
          <Link to="/score" />
          Score
          </Menu.Item>

          <Menu.Item key="settings" icon={<ControlOutlined />}>
          Settings
          <Link to="/settings" />
          </Menu.Item>

          <Menu.Item key="fullscreen" icon={<FullscreenOutlined />} onClick={() => this.toggleScreen()}>
          Fullscreen
          </Menu.Item>
          {/* <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu> */}
        </Menu>
      </div>
    );
  }
}

//ReactDOM.render(<App />, mountNode);