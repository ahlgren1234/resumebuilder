import React, { useEffect, useState } from 'react';
import { Form, Input, Button, message, Spin } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../resources/authentication.css';

function Login() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const user = await axios.post('/api/user/login', values);
      message.success('login successful');
      localStorage.setItem('resumebuilder-user', JSON.stringify(user.data));
      setLoading(false);
      navigate('/home');
    } catch (error) {
      setLoading(false);
      message.error('login failed');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('resumebuilder-user')) {
      navigate('/home');
    }
  });

  return (
    <div className="auth-parent">
      {loading && <Spin size="large" />}
      <Form layout="vertical" onFinish={onFinish}>
        <h1>Login</h1>
        <hr />
        <Form.Item name="username" label="Username">
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item name="password" label="Password">
          <Input type="password" />
        </Form.Item>

        <div className="d-flex align-items-center justify-content-between">
          <Link to="/register">Click Here to register</Link>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Login;
