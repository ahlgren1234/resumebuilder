import React, { useState } from 'react';
import { Form, Input, Button, message, Spin } from 'antd';
import '../resources/authentication.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await axios.post('/api/user/register', values);
      setLoading(false);
      message.success('registration successful');
    } catch (error) {
      setLoading(false);
      message.error('registration failed');
    }
  };

  return (
    <div className="auth-parent">
      {loading && <Spin size="large" />}
      <Form layout="vertical" onFinish={onFinish}>
        <h1>Register</h1>
        <hr />
        <Form.Item name="username" label="Username">
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item name="password" label="Password">
          <Input type="password" />
        </Form.Item>

        <Form.Item name="cpassword" label="Confirm Password">
          <Input type="password" />
        </Form.Item>

        <div className="d-flex align-items-center justify-content-between">
          <Link to="/login">Click Here to login</Link>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Register;
