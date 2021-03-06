import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { API_BASE_URL } from "../config";
import './css/modal.css';

const modalRoot = document.getElementById('modal-root')

export default function Register(props) {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmationPassword] = useState("");

    const signUp = () => {
        let data = {
            username: user,
            password,
        };

        fetch(`${API_BASE_URL}/users/`, {
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
                    return true;
                }
            })
            .then(component => {
                if (component) {
                    props.onClose();
                    props.closeMenu();
                    props.history.push(`/`);
                    alert('Sign up Successful');
                }
                else {
                    alert('Error signing up');
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
                <h1 className='modal-title'> Sign Up</h1>
                <form className='form flex-column' onSubmit={e => {
                    e.preventDefault();
                    if (confirmPassword === password) {
                        signUp();
                    } else {
                        alert('Main password and confirmation password did not match.')
                    }
                }}>
                    <label className='modal-subtitle'>User Name </label>
                    <input className='modal-input' aria-label='Username' onChange={e => setUser(e.target.value)}></input>
                    <label className='modal-subtitle'>Password </label>
                    <input className='modal-input' aria-label='password' type='password' onChange={e => setPassword(e.target.value)}></input>
                    <label className='modal-subtitle'>Confirm Password </label>
                    <input className='modal-input' aria-label='confirm password' type='password' onChange={e => setConfirmationPassword(e.target.value)}></input>
                    <button className='modal-button' >Sign Up</button>
                </form>
                <div className='flex-column'>
                    <button className='modal-button' onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>,
        modalRoot,
    )
}
