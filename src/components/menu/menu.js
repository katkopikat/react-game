import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Drawer } from 'antd';
import {
  RightSquareOutlined,
  BarChartOutlined,
  FullscreenOutlined,
  ControlOutlined,
  QuestionOutlined,
  FullscreenExitOutlined
} from '@ant-design/icons';

import checkGameInLS from '../../helpers/checkLS';
import toggleFullScreen from '../../helpers/toggleFullScreen';

export default function  Navigation (){
  const [visible, setVisible] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);

  const showDrawer = (value) => { setVisible(value) };

    return (
      <React.Fragment>
          <div className="menu">
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
              <Menu.Item key="fullscreen"
                         icon={ fullScreen ? <FullscreenExitOutlined /> : <FullscreenOutlined /> } 
                         onClick={() => {toggleFullScreen();
                                         setFullScreen(!fullScreen)}}>
                         Fullscreen
              </Menu.Item>
              <Menu.Item key="about" icon={ <QuestionOutlined /> } onClick={() => showDrawer(true)}>
                Developer
              </Menu.Item>
            </Menu>
          </div>

          <Drawer
            title="About"
            placement="right"
            closable={false}
            onClose={() => showDrawer(false)}
            visible={visible}
          >
            <div className="about">
                <div className='wrapper-made'>
                <a href="https://rs.school/js/"> <img className="logo" src="static/images/rs_logo.png" alt="logo" /> </a>
                  <a href="https://github.com/katkopikat" className="made-by">katkopikat </a>
                  <span> 2021 </span>
                </div>
                <div className="keys">
                    <p className="keys__title">Hot keys</p>
                    <p className="keys__descr"><kbd>Q</kbd>New game</p>
                    <p className="keys__descr"><kbd>W</kbd>Settings</p>
                    <p className="keys__descr"><kbd>E</kbd>Score</p>
                    <p className="keys__descr"><kbd>R</kbd>ON/OFF music</p>
                    <p className="keys__descr"><kbd>T</kbd>ON/OFF sounds</p>
                    {/* <p className="keys__descr"><kbd>Q</kbd>Show/hide selected row, col and section</p>
                    <p className="keys__descr"><kbd>W</kbd>On/off colored cells with equal value</p>
                    <p className="keys__descr"><kbd>E</kbd>On/off colored cells with conflicts</p> */}
                </div>
            </div>
          </Drawer>
      </React.Fragment>
    )
}
