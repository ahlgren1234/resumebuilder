import { Button, Dropdown, Menu } from 'antd';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../resources/defaultlayout.css';

function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem('resumebuilder-user'));

  const navigate = useNavigate();

  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/home">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          localStorage.removeItem('resumebuilder-user');
          navigate('/login');
        }}
      >
        <span>Logout</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="layout">
      <div className="header">
        <h1>Resume Builder</h1>
        <Dropdown overlay={menu} placement="bottomLeft">
          <Button>{user.username}</Button>
        </Dropdown>
      </div>
      <div className="content">{props.children}</div>
    </div>
  );
}

export default DefaultLayout;
