import React from 'react';
import './css/landing.css';
import landing from '../assets/tiremainpage.png';

export default function LandingPage() {


    return (
        <section className=''>
            <div className='landing-intro flex-column'>
                <div>
                    <header className='champion-header'>
                        <h1>Champions</h1>
                    </header>
                    <div className='landing-background' />
                </div>
            </div>
        </section>
    )
}