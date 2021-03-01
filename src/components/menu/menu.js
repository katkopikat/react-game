import React, { Component } from 'react';
import { Menu, Button } from 'antd';
import {
  RightSquareOutlined,
  BarChartOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ControlOutlined
} from '@ant-design/icons';
//import '../score/node_modules/antd/dist/antd.css';
import './menu.css'
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        collapsed: true, 
    };
  }


  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

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
          {/* onClick={() => this.props.onStartNewGame()}> */}
          <Link to="/" exact/>
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