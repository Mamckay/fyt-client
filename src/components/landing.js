import React from 'react';
import './css/landing.css';
import landing from '../assets/tiremainpage.png';

export default function LandingPage() {


    return (
        <section className=''>
            <div className='landing-intro flex-column'>
                <div>
                    <header>
                        <h1 className='champion-header'>Champions</h1>
                    </header>
                    <img className='landing-background' src={landing} />
                </div>
            </div>
        </section>
    )
}