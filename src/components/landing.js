import React from 'react';
import './css/landing.css';
import logo from '../assets/icon.png';

export default function LandingPage() {


    return (
        <section>
            <h1>Champions</h1>
            <img className='landing-img' alt='landing icon' src={logo}></img>
            <div className='flex-column'>
                <button className='landing-button'>
                    Log In
                </button>
                <button className='landing-button'>
                    Sign Up
                </button>
            </div>
        </section>
    )
}