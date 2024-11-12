import React, { useState } from 'react';
import { Modal, Input, Button, Spin } from 'antd';
import { AppleOutlined, GoogleOutlined } from '@ant-design/icons';
import styles from './Log.module.css';  // Якщо ваші стилі зберігаються у CSS


const LoginModal = ({ isOpen, onClose, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

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
        Don't have an account? <span className="sign_up_link">Sign up</span>
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





// import React, { useState } from 'react';
// import styles from './Log.module.css';
// import './transition.css';

// const LoginModal = React.forwardRef(({ isOpen, onClose, onLogin }, ref) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (username && password) {
//       onLogin();
//       onClose();
//     }
//   };

//   return (
//     <div ref={ref} className={`${styles.modal} ${isOpen ? styles.open : ''}`}>
//       <div className={styles.form_container}>
//         <button className={styles.close} onClick={onClose} aria-label="Close Modal">
//           &times;
//         </button>
//         <p className={styles.title}>Welcome back</p>
//         <form className={styles.form} onSubmit={handleSubmit}>
//           <input type="email" className={styles.input} placeholder="Email" value={username} onChange={(e) => setUsername(e.target.value)} />
//           <input type="password" className={styles.input} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
//           <p className={styles.page_link}>
//             <span className={styles.page_link_label}>Forgot Password?</span>
//           </p>
//           <button className={styles.form_btn} type="submit">Log In</button>
//         </form>
//         <p className={styles.sign_up_label}>
//           Don't have an account?<span className={styles.sign_up_link}>Sign up</span>
//         </p>
//         <div className={styles.buttons_container}>
//           <div className={styles.apple_login_button}>
//             <svg stroke="currentColor" fill="currentColor" strokeWidth="0" className={styles.apple_icon} viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//               <path d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z"></path>
//             </svg>
//             <span>Log in with Apple</span>
//           </div>
//           <div className={styles.google_login_button}>
//             <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" x="0px" y="0px" className={styles.google_icon} viewBox="0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
//               <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
//               <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
//               <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
//               <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
//             </svg>
//             <span>Log in with Google</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// });

// export default LoginModal;