import React, { useState } from 'react';
import { Modal, Input, Button, Spin } from 'antd';
import { AppleOutlined, GoogleOutlined } from '@ant-design/icons';
import styles from './Log.module.css';
import { Formik, Form, Field } from "formik";


const LoginModal = ({ isOpen, onClose, onLogin, onSwitchToRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const {username, password} = e;

    if (username && password) {
      onLogin();
      onClose();     
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <Modal
      title="Welcome back"
      visible={isOpen}
      onCancel={onClose}
      footer={null}
      width={400}
    >
      <form onSubmit={handleSubmit} className={styles.form}>
        <Input
          type="email"
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.input}
        />
        <Input.Password
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.input}
        />
        <p className="page_link">
          <span className={styles.page_link_label}>Forgot Password?</span>
        </p>
        <Button
          type="primary"
          htmlType="submit"
          className={styles.form_btn}
          block
          icon={loading ? <Spin size="small" /> : null}
        >
          {loading ? 'Logging In' : 'Log In'}
        </Button>
      </form>
      <p className={styles.sign_up_label}>
        Don't have an account?         
        <span className="sign_up_link" onClick={onSwitchToRegister}>
          Sign up
        </span>
      </p>
      <div className={styles.buttons_container}>
        <Button
          icon={<AppleOutlined />}
          className={styles.apple_login_button}
          block
        >
          Log in with Apple
        </Button>
        <Button
          icon={<GoogleOutlined />}
          className={styles.google_login_button}
          block
        >
          Log in with Google
        </Button>
      </div>
    </Modal>


  );
};

export default LoginModal;
