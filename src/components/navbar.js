import React, { useState, useEffect } from 'react';
import Login from './login';
import Register from './register';
import hamburger from '../assets/hamburger.png';
import logo from '../assets/icon.png';
import { withRouter } from "react-router";
import { Link } from 'react-router-dom';
import './css/navbar.css';

function Navbar(props) {
    const [loginModal, setLoginModal] = useState(false);
    const [registerModal, setRegisterModal] = useState(false);
    const [loginMenu, setLoginMenu] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);

    const setup = () => {
        let token = localStorage.getItem("jwtToken");
        if (!token) {
            setLoggedIn(true);
            props.history.push('/dashboard');
        }
    }

    useEffect(() => {
        setup();
    }, [])

    return <section className='navbar'>
        <Link className='nav-logo-container' to='/'>
            <div>
                <img alt='nav logo' className='nav-logo' src={logo} />
            </div>
        </Link>
        <header className='champion-header'>
            <h1>Champions</h1>
        </header>
        <div className='hamburger' onClick={() => setLoginMenu(!loginMenu)}>
            <img alt='nav burger' className='nav-burger' src={hamburger} />
        </div>
        {loginMenu && !loggedIn ? (
            <section className='sudo-select'>
                <div onClick={() => {
                    setLoginMenu(false);
                    setLoginModal(!loginModal);
                }} > Login</div>
                <div onClick={() => {
                    setLoginMenu(false);
                    setRegisterModal(!loginModal);
                }} > Sign Up</div>
            </section>
        ) : null}
        {loginMenu && loggedIn ? (
            <section className='sudo-select'>
                <div onClick={() => {
                    props.history.push('/dashboard');
                    setLoginMenu(false);
                }}>Dashboard</div>
                <div onClick={() => {
                    props.history.push('/workout');
                    setLoginMenu(false);
                }}>Workout</div>
                <div onClick={() => {
                    props.history.push('/goals');
                    setLoginMenu(false);
                }}>Goals</div>
                <div onClick={() => {
                    props.history.push('/timer');
                    setLoginMenu(false);
                }}>Timer</div>
                <div onClick={() => {
                    localStorage.setItem("jwtToken", null);
                    setLoggedIn(false);
                    props.history.push('/');
                }} > Logout</div>
            </section>
        ) : null}
        {loginModal ? (
            <Login history={props.history} setLoggedIn={() => setLoggedIn(true)} closeMenu={() => setLoginMenu(false)} onClose={() => setLoginModal(false)}>
            </Login>
        ) : null}
        {registerModal ? (
            <Register history={props.history} closeMenu={() => setLoginMenu(false)} onClose={() => setRegisterModal(false)}>
            </Register>
        ) : null}
    </section>
}

const NavbarR = withRouter(Navbar);

export default NavbarR;