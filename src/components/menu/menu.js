import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import {
  RightSquareOutlined,
  BarChartOutlined,
  FullscreenOutlined,
  ControlOutlined
} from '@ant-design/icons';
//import './menu.css'

import checkGameInLS from '../../helpers/checkLS';
import toggleFullScreen from '../../helpers/toggleFullScreen';

export default class App extends Component {

  render() {
    return (
      <div
       style={{ width: 256 }}
       className="menu">
          <Menu
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
            inlineCollapsed={true}>
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
          <Menu.Item key="fullscreen" icon={<FullscreenOutlined />} onClick={() => toggleFullScreen()}>
            Fullscreen
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}