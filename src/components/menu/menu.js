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
//   state = {
//     collapsed: true,
//   };

  constructor(props) {
    super(props);
    // Не вызывайте здесь this.setState()!
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
         // defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1" icon={<RightSquareOutlined />}
          onClick={(e) => this.props.onStartNewGame(e)}>
            New Game
          </Menu.Item>
          <Menu.Item key="2" icon={<BarChartOutlined />}>
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