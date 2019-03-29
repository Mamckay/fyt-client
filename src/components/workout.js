import React, { useState } from 'react';
import Endurance from '../assets/endurance.png';
import Strength from '../assets/strength.png';
import Balance from '../assets/balance.png';
import './css/workout.css';

export default function Workout() {

    const [category, setCategory] = useState(false);
    const [endurance, setEndurance] = useState(false);
    const [strength, setStrength] = useState(false);
    const [balance, setBalance] = useState(false);
    const [reps, setReps] = useState(false);
    const [weight, setWeight] = useState(false);
    const [time, setTime] = useState(false);
    const [distance, setDistance] = useState(false);
    const [exercise, setExercise] = useState(false);

    const reset = () => {
        console.log('hello');
        setDistance(false);
        setTime(false);
        setWeight(false);
        setReps(false);
    }

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
            case 'biking':
                return <React.Fragment>
                    <label>Distance</label>
                    <input onChange={e => {
                        setDistance(e.target.value);
                    }}></input>
                    <label>Time</label>
                    <input onChange={e => {
                        setTime(e.target.value);
                    }}></input>
                </React.Fragment>;
            case 'hiking':
                return <React.Fragment>
                    <label>Distance</label>
                    <input onChange={e => {
                        setReps(e.target.value);
                    }}></input>
                </React.Fragment>;
            case 'walking':
                return <React.Fragment>
                    <label>Distance</label>
                    <input onChange={e => {
                        setDistance(e.target.value);
                    }}></input>
                    <label>Time</label>
                    <input onChange={e => {
                        setTime(e.target.value);
                    }}></input>
                </React.Fragment>;
            case 'running':
                return <React.Fragment>
                    <label>Distance</label>
                    <input onChange={e => {
                        setDistance(e.target.value);
                    }}></input>
                    <label>Time</label>
                    <input onChange={e => {
                        setTime(e.target.value);
                    }}></input>
                </React.Fragment>;
            case 'swimming':
                return <React.Fragment>
                    <label>Distance</label>
                    <input onChange={e => {
                        setDistance(e.target.value);
                    }}></input>
                </React.Fragment>;
            case 'yoga':
                return <React.Fragment>
                    <label>Time</label>
                    <input onChange={e => {
                        setTime(e.target.value);
                    }}></input>
                </React.Fragment>;
            case 'stretching':
                return <React.Fragment>
                    <label>Time</label>
                    <input onChange={e => {
                        setTime(e.target.value);
                    }}></input>
                </React.Fragment>;
            case 'meditation':
                return <React.Fragment>
                    <label>Time</label>
                    <input onChange={e => {
                        setTime(e.target.value);
                    }}></input>
                </React.Fragment>;
            case 'wall':
                return <React.Fragment>
                    <label>Time</label>
                    <input onChange={e => {
                        setTime(e.target.value);
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
                    let form = document.getElementById("create-workout");
                    if (form) {
                        form.reset();
                        setExercise(false);
                    }
                    setEndurance(!endurance)
                    setStrength(false);
                    setBalance(false);
                    setCategory('Endurance');
                }}>
                    <h2>Cardio</h2>
                    <img alt='Endurance' className='workout-img' src={Endurance} />
                </div>
                <div onClick={() => {
                    let form = document.getElementById("create-workout");
                    if (form) {
                        form.reset();
                        setExercise(false);
                    }
                    setEndurance(false)
                    setStrength(!strength);
                    setBalance(false);
                    setCategory('Strength');
                }}>
                    <h2>Strength</h2>
                    <img alt='Strength' className='workout-img' src={Strength} />
                </div>
                <div onClick={() => {
                    let form = document.getElementById("create-workout");
                    if (form) {
                        form.reset();
                        setExercise(false);
                    }
                    setEndurance(false)
                    setStrength(false);
                    setBalance(!balance);
                    setCategory('Balance');
                }}>
                    <h2>Balance</h2>
                    <img alt='Endurance' className='workout-img' src={Balance} />
                </div>
            </section>
            <section>
                {endurance ? (
                    <form id='create-workout' onSubmit={e => {
                        e.preventDefault();
                        /* TODO Setup a fetch here */
                        console.log('Type: Workout');
                        console.log('Category:', category);
                        console.log('Exercise:', exercise);
                        console.log('Reps:', reps);
                        console.log('Weight:', weight);
                        console.log('Time:', time);
                        console.log('Distance:', distance);
                    }} className='goals-form'>
                        <label>Choose Exercise</label>
                        <select onChange={e => {
                            setExercise(e.target.value);
                            reset();
                        }} name='type'>
                            <option></option>
                            <option value='biking'>Biking</option>
                            <option value='hiking'>Hiking</option>
                            <option value='walking'>Walking</option>
                            <option value='running'>Running</option>
                            <option value='swimming'>Swimming</option>
                        </select>
                        {workoutInputs()}
                        <button>Submit Workout</button>
                    </form>
                ) : null}
                {strength ? (
                    <form onSubmit={e => {
                        e.preventDefault();
                        /* TODO Setup a fetch here */
                        console.log('Type: Workout');
                        console.log('Category:', category);
                        console.log('Exercise:', exercise);
                        console.log('Reps:', reps);
                        console.log('Weight:', weight);
                        console.log('Time:', time);
                        console.log('Distance:', distance);
                    }} className='goals-form'>
                        <label>Choose Exercise</label>
                        <select onChange={e => {
                            setExercise(e.target.value);
                            reset();
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
                        <button>Submit Workout</button>
                    </form>
                ) : null}
                {balance ? (
                    <form onSubmit={e => {
                        e.preventDefault();
                        /* TODO Setup a fetch here */
                        console.log('Type: Workout');
                        console.log('Category:', category);
                        console.log('Exercise:', exercise);
                        console.log('Reps:', reps);
                        console.log('Weight:', weight);
                        console.log('Time:', time);
                        console.log('Distance:', distance);
                    }} className='goals-form'>
                        <label>Choose Exercise</label>
                        <select onChange={e => {
                            setExercise(e.target.value);
                            reset();
                        }} name='type'>
                            <option></option>
                            <option value='yoga'>Yoga</option>
                            <option value='stretching'>Stretching</option>
                            <option value='meditation'>Meditation</option>
                            <option value='wall'>Wall Squats/Chair Squats</option>
                        </select>
                        {workoutInputs()}
                        <button>Submit Workout</button>
                    </form>
                ) : null}

            </section>
        </section>
    )
}