import React, { useState } from 'react';
import LoginModal from './LogInModal';
import './log.css';

function LogInBtn(props) {
    return (
        <button onClick={props.onClick} className='Btn'>
            Log In
            <div className="icon">
                <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                        d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                        fill="currentColor"
                    ></path>
                </svg>
            </div>
        </button>
    );
}

function LogOutBtn(props) {
    return (
        <button onClick={props.onClick} className='Btn'>
            Log Out
            <div className="icon">
                <svg
                    height="24"
                    width="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M0 0h24v24H0z" fill="none"></path>
                    <path
                        d="M7.828 11l5.364-5.364-1.414-1.414L4 12l7.778 7.778 1.414-1.414L7.828 13h12v-2z"
                        fill="currentColor"
                    ></path>
                </svg>
            </div>
        </button>
    );
}

const LoginControl = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLoginClick = () => {
        setIsModalOpen(true);
    };

    const handleLogoutClick = () => {
        setIsLoggedIn(false);
    };

    const handleLogin = () => {
        setIsLoggedIn(true);
        setIsModalOpen(false);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            {isLoggedIn ? (
                <LogOutBtn onClick={handleLogoutClick} />
            ) : (
                <LogInBtn onClick={handleLoginClick} />
            )}
            <LoginModal isOpen={isModalOpen} onClose={closeModal} onLogin={handleLogin} />
        </div>
    );
};

export default LoginControl;
