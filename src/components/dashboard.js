import React, { useState, useEffect } from 'react';
import target from '../assets/target.svg';
import workout from '../assets/yoga.png';
import history from '../assets/timer.png';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../config';
import './css/dashboard.css';

export default function Dashboard() {

    const [stats, setStats] = useState({ goals: 0, workouts: 0, weight: 0, time: 0, distance: 0, reps: 0 });
    const [name, setName] = useState('user');
    /* 
        add a fetch to populate the workout data and statistics on load
    */
    const fetchUserStats = () => {
        let token = localStorage.getItem("jwtToken")


        function parseJwt(i) {
            var base64Url = i.split('.')[1];
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            return JSON.parse(window.atob(base64));
        };
        if (token !== 'null' && token !== null) {
            setName(parseJwt(token).user.username);
        }

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
                    Welcome back {name}!
                </h1>
            </header>
            <div className='dashboard-container'>
                <Link to='/goals' className='dashboard-card'>
                    <div>
                        <img alt='Goals icon' className='dashboard-img' src='https://as2.ftcdn.net/jpg/01/37/40/83/160_F_137408357_CexBRuseaKpSNFoJD2bdj786NuEqfNvi.jpg' />
                        <h2>Goals</h2>
                    </div>
                </Link>
                <Link to='/workout' className='dashboard-card'>
                    <div>
                        <img alt='Workout icon' className='dashboard-img' src='https://as2.ftcdn.net/jpg/01/95/63/79/160_F_195637927_WfYRtfPcO20UoqBpO417b9T0x2IWydEK.jpg' />
                        <h2>Workout</h2>
                    </div>
                </Link>
                <Link to='/timer' className='dashboard-card'>
                    <div>
                        <img alt='Workout icon' className='dashboard-img' src='https://as2.ftcdn.net/jpg/01/17/09/11/160_F_117091198_rBKKyusIVMzzCGF7R9uyQpGImfEmO6d6.jpg' />
                        <h2>Timer</h2>
                    </div>
                </Link>
            </div>
            <div className='dashboard-statistics'>
                <div className='dashboard-text'>
                    <h2 className='dashboard-title center'>Workouts Completed</h2>
                    <p className='center'>{stats.workouts}</p>
                </div>
                <div className='dashboard-text'>
                    <h2 className='dashboard-title center'>Goals Reached</h2>
                    <p className='center'>{stats.goals}</p>
                </div>
                <div className='dashboard-text'>
                    <h2 className='dashboard-title center'>Stat Totals</h2>
                    <p>Total Distance: {stats.distance} miles</p>
                    <p>Total Time: {stats.time} seconds</p>
                    <p>Total Weight: {stats.weight} lbs</p>
                    <p>Total Reps: {stats.reps}</p>
                </div>
            </div>
        </section>
    )
}