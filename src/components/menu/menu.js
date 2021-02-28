import React, { Component } from 'react';
import { Menu, Button } from 'antd';
import {
  RightSquareOutlined,
  BarChartOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ControlOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import './menu.css'

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
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1" icon={<RightSquareOutlined />}
          onClick={() => this.props.onStartNewGame()}>
            New Game
          </Menu.Item>

          <Menu.Item key="2" icon={<BarChartOutlined />}
           onClick={() => this.props.onShowScore()}>
            Score
          </Menu.Item>

          <Menu.Item key="3" icon={<ControlOutlined />}>
            Settings
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