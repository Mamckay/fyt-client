import React, { useState } from 'react';
import Endurance from '../assets/endurance.png';
import Strength from '../assets/strength.png';
import Balance from '../assets/balance.png';
import Flexibility from '../assets/flexibility.png';
import './css/workout.css';

export default function Workout() {

    const [endurance, setEndurance] = useState(false);
    const [strength, setStrength] = useState(false);
    const [balance, setBalance] = useState(false);
    const [reps, setReps] = useState(false);
    const [weight, setWeight] = useState(false);
    const [exercise, setExercise] = useState(false);

    const workoutInputs = () => {
        switch (exercise) {
            case 'pushups':
                return <React.Fragment>
                    <label>Reps</label>
                    <input onChange={e => {
                        setReps(e.target.value);
                    }}></input>
                </React.Fragment>;
            case 'squats':
                return <React.Fragment>
                    <label>Reps</label>
                    <input onChange={e => {
                        setReps(e.target.value);
                    }}></input>
                    <label>Weight</label>
                    <input onChange={e => {
                        setWeight(e.target.value);
                    }}></input>
                </React.Fragment>;
            case 'bench':
                return <React.Fragment>
                    <label>Reps</label>
                    <input onChange={e => {
                        setReps(e.target.value);
                    }}></input>
                    <label>Weight</label>
                    <input onChange={e => {
                        setWeight(e.target.value);
                    }}></input>
                </React.Fragment>;
            case 'incline':
                return <React.Fragment>
                    <label>Reps</label>
                    <input onChange={e => {
                        setReps(e.target.value);
                    }}></input>
                    <label>Weight</label>
                    <input onChange={e => {
                        setWeight(e.target.value);
                    }}></input>
                </React.Fragment>;
            case 'rows':
                return <React.Fragment>
                    <label>Reps</label>
                    <input onChange={e => {
                        setReps(e.target.value);
                    }}></input>
                    <label>Weight</label>
                    <input onChange={e => {
                        setWeight(e.target.value);
                    }}></input>
                </React.Fragment>;
            case 'pullups':
                return <React.Fragment>
                    <label>Reps</label>
                    <input onChange={e => {
                        setReps(e.target.value);
                    }}></input>
                </React.Fragment>;
            case 'situps':
                return <React.Fragment>
                    <label>Reps</label>
                    <input onChange={e => {
                        setReps(e.target.value);
                    }}></input>
                </React.Fragment>;
            default:
                return '';
        }
    }

    return (
        <section>
            <section>
                <h1 className='workout-title'>Choose A Category</h1>
            </section>
            <section className='workout-container'>
                <div onClick={() => {
                    setEndurance(!endurance)
                    setStrength(false);
                    setBalance(false);
                }}>
                    <h2>Cardio</h2>
                    <img alt='Endurance' className='workout-img' src={Endurance}></img>
                </div>
                <div onClick={() => {
                    setEndurance(false)
                    setStrength(!strength);
                    setBalance(false);
                }}>
                    <h2>Strength</h2>
                    <img alt='Endurance' className='workout-img' src={Strength}></img>
                </div>
                <div onClick={() => {
                    setEndurance(false)
                    setStrength(false);
                    setBalance(!balance);
                }}>
                    <h2>Balance</h2>
                    <img alt='Endurance' className='workout-img' src={Balance}></img>
                </div>
            </section>
            <section>
                {endurance ? (
                    <form onSubmit={e => {
                        e.preventDefault();
                        /* TODO Setup a fetch here */
                        console.log('here');
                    }} className='goals-form'>
                        <label>Choose Exercise</label>
                        <select onChange={e => {
                            setExercise(e.target.value);
                        }} name='type'>
                            <option></option>
                            <option value='biking'>Biking</option>
                            <option value='hiking'>Hiking</option>
                            <option value='walking'>Walking</option>
                            <option value='running'>Running</option>
                            <option value='swimming'>Swimming</option>
                        </select>
                        {workoutInputs()}
                        <button>Submit Goal</button>
                    </form>
                ) : null}
                {strength ? (
                    <form onSubmit={e => {
                        e.preventDefault();
                        /* TODO Setup a fetch here */
                        console.log('here');
                    }} className='goals-form'>
                        <label>Choose Exercise</label>
                        <select onChange={e => {
                            setExercise(e.target.value);
                        }} name='type'>
                            <option></option>
                            <option value='pushups'>Push Ups</option>
                            <option value='squats'>Squats</option>
                            <option value='bench'>Bench Press</option>
                            <option value='incline'>Incline Press</option>
                            <option value='rows'>Rows</option>
                            <option value='pullups'>Pull Ups</option>
                            <option value='situps'>Sit Ups</option>
                        </select>
                        {workoutInputs()}
                        <button>Submit Goal</button>
                    </form>
                ) : null}
                {balance ? (
                    <form onSubmit={e => {
                        e.preventDefault();
                        /* TODO Setup a fetch here */
                        console.log('here');
                    }} className='goals-form'>
                        <label>Choose Exercise</label>
                        <select onChange={e => {
                            setExercise(e.target.value);
                        }} name='type'>
                            <option></option>
                            <option value='yoga'>Yoga</option>
                            <option value='stretching'>Stretching</option>
                            <option value='meditation'>Meditation</option>
                            <option value='wall'>Wall Squats/Chair Squats</option>
                        </select>
                        {workoutInputs()}
                        <button>Submit Goal</button>
                    </form>
                ) : null}

            </section>
        </section>
    )
}