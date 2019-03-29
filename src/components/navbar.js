import React, { useState, useEffect } from 'react';
import Modal from './modal';
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
        <Link to='/'>
            <div>
                <img alt='nav logo' className='nav-logo' src={logo} />
            </div>
        </Link>
        <div className='hamburger' onClick={() => setLoginMenu(!loginMenu)}>
            <img alt='nav burger' className='nav-burger' src={hamburger} />
        </div>
        {loginMenu && !loggedIn ? (
            <section className='sudo-select'>
                <div onClick={() => setLoginModal(!loginModal)} > Login</div>
                <div onClick={() => setRegisterModal(!loginModal)} > Sign Up</div>
            </section>
        ) : null}
        {loginMenu && loggedIn ? (
            <section className='sudo-select'>
                <div onClick={() => {
                    props.history.push('/dashboard');
                }}>Dashboard</div>
                <div onClick={() => {
                    props.history.push('/workout');
                }}>Workout</div>
                <div onClick={() => {
                    props.history.push('/goals');
                }}>Goals</div>
                <div onClick={() => {
                    localStorage.setItem("jwtToken", null);
                    setLoggedIn(false);
                    props.history.push('/');
                }} > Logout</div>
            </section>
        ) : null}
        {loginModal ? (
            <Modal history={props.history} setLoggedIn={() => setLoggedIn(true)} closeMenu={() => setLoginMenu(false)} onClose={() => setLoginModal(false)}>
            </Modal>
        ) : null}
        {registerModal ? (
            <Modal history={props.history} setLoggedIn={() => setLoggedIn(true)} closeMenu={() => setLoginMenu(false)} onClose={() => setRegisterModal(false)}>
            </Modal>
        ) : null}
    </section>
}

const NavbarR = withRouter(Navbar);

export default NavbarR;