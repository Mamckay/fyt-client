import React, { useState, useEffect } from 'react';
import target from '../assets/target.svg';
import workout from '../assets/yoga.png';
import history from '../assets/timer.png';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../config';
import './css/dashboard.css';

export default function Dashboard() {

    const [stats, setStats] = useState({ goals: 0, workouts: 0, weight: 0, time: 0, distance: 0, reps: 0 });
    /* 
        add a fetch to populate the workout data and statistics on load
    */
    const fetchUserStats = () => {
        fetch(`${API_BASE_URL}/stats/`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                Authorization: "Bearer ".concat(
                    localStorage.getItem("jwtToken")
                )
            }
        })
            .then(res => {
                return res.json();
            })
            .then(result => {
                setStats(result[0]);

            })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchUserStats();
    }, [stats.time])

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
                        <img alt='Goals icon' className='dashboard-img' src={target} />
                        <h2>Goals</h2>
                    </div>
                </Link>
                <Link to='/workout' className='dashboard-card'>
                    <div>
                        <img alt='Workout icon' className='dashboard-img' src={workout} />
                        <h2>Workout</h2>
                    </div>
                </Link>
                <Link to='/timer' className='dashboard-card'>
                    <div>
                        <img alt='Workout icon' className='dashboard-img' src={history} />
                        <h2>Timer</h2>
                    </div>
                </Link>
            </div>
            <div className='dashboard-statistics'>
                <div className='dashboard-text'>
                    <h2 className='dashboard-title'>Workouts Completed</h2>
                    <p>{stats.workouts}</p>
                </div>
                <div className='dashboard-text'>
                    <h2 className='dashboard-title'>Goals Reached</h2>
                    <p>{stats.goals}</p>
                </div>
                <div className='dashboard-text'>
                    <h2 className='dashboard-title'>Stats</h2>
                    <p>Distance: {stats.distance} </p>
                    <p>Time: {stats.time}</p>
                    <p>Weight: {stats.weight}</p>
                    <p>Reps: {stats.reps}</p>
                </div>
            </div>
        </section>
    )
}