import React from 'react';
import target from '../assets/target.svg';
import workout from '../assets/yoga.png';
import { Link } from 'react-router-dom';
import './css/dashboard.css';

export default function Dashboard() {

    /* 
        add a fetch to populate the workout data and statistics on load
    */

    return (
        <section>
            <header>
                <h1>
                    Welcome back User!
                </h1>
            </header>
            <div className='dashboard-container'>
                <Link to='/goals' className='dashboard-card'>
                    <div>
                        <img alt='Goals icon' className='dashboard-img' src={target}></img>
                        <h2>Goals</h2>
                    </div>
                </Link>
                <Link to='/workout' className='dashboard-card'>
                    <div>
                        <img alt='Workout icon' className='dashboard-img' src={workout}></img>
                        <h2>Workout</h2>
                    </div>
                </Link>
            </div>
            <div className='dashboard-statistics'>
                <div className='dashboard-text'>
                    <h2 className='dashboard-title'>Workouts Completed</h2>
                    <p>3</p>
                </div>
                <div className='dashboard-text'>
                    <h2 className='dashboard-title'>Goals Reached</h2>
                    <p>3/5</p>
                </div>
                <div className='dashboard-text'>
                    <h2 className='dashboard-title'>Stats</h2>
                    <p>Distance: </p>
                    <p>Time: </p>
                    <p>Weight: </p>
                </div>
            </div>
        </section>
    )
}