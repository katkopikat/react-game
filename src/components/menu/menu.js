import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Drawer } from 'antd';
import {
  RightSquareOutlined,
  BarChartOutlined,
  FullscreenOutlined,
  ControlOutlined,
  QuestionOutlined
} from '@ant-design/icons';

import checkGameInLS from '../../helpers/checkLS';
import toggleFullScreen from '../../helpers/toggleFullScreen';

export default function  Navigation (){
  const [visible, setVisible] = useState(false);

  const showDrawer = () => { setVisible(true) };
  const onClose = () => { setVisible(false) };

    return (
      <React.Fragment>
      <div style={{ width: 256 }} className="menu">
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
          
          <Menu.Item key="about" icon={ <QuestionOutlined />} onClick={showDrawer}>
            Developer
          </Menu.Item>
        </Menu>
      </div>

      <Drawer
        title="About"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
      <div className="about">
          <a href="https://github.com/katkopikat"> Made by katkopikat</a>
          <span className="year">2021</span>
          <a className="rs__link" href="https://rs.school/js/">  <img class="logo__img" src="../src/assets/images/rs_logo.png"></img></a>
      </div>
      </Drawer>
      </React.Fragment>
    )
}

// <a class="rs__link" href="https://rs.school/js/"> <img class="logo__img" src="../src/assets/images/rs_logo.png"></a>
