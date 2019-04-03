import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { API_BASE_URL } from "../config";
import './css/modal.css';

const modalRoot = document.getElementById('modal-root')

export default function Login(props) {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const userLogin = () => {
        let data = {
            username: user,
            password
        };

        fetch(`${API_BASE_URL}/auth/login`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                return res.json();
            })
            .then(result => {
                if (result.reason) {
                    alert(result.data.message);
                    return false;
                } else {
                    const token = result.authToken;
                    localStorage.setItem("jwtToken", token);
                    return true;
                }
            })
            .then(component => {
                if (component) {
                    props.onClose();
                    props.closeMenu();
                    props.setLoggedIn();
                    props.history.push(`dashboard`);
                }
            })
            .catch(err => {
                console.log(err);
            });
    }


    return ReactDOM.createPortal(
        <div
            className='modal-container'
        >
            <div
                className='login-modal'
            >
                <h1 className='modal-title'> Sign In</h1>
                <form className='form flex-column' onSubmit={e => {
                    e.preventDefault();
                    userLogin();
                }}>
                    <label className='modal-subtitle'>User Name </label>
                    <input className='modal-input' aria-label='Username' onChange={e => setUser(e.target.value)}></input>
                    <label className='modal-subtitle'>Password </label>
                    <input className='modal-input' aria-label='password' type='password' onChange={e => setPassword(e.target.value)}></input>
                    <button className='modal-button' >Login</button>
                </form>
                <div className='flex-column'>
                    <button className='modal-button' onClick={props.onClose}>Close</button>
                </div>
                <div className='demo-account'><span>Demo account:</span> <span>demovip</span><span>restisrust</span></div>
            </div>
        </div>,
        modalRoot,
    )
}
