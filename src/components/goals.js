import React, { useState } from 'react';
import plusSign from '../assets/plussign.png'
import './css/goals.css';

export default function Goals() {

    const [newGoal, setNewGoal] = useState(false);
    const [category, setCategory] = useState(false);
    const [exercise, setExercise] = useState(false);
    const [reps, setReps] = useState(false);
    const [weight, setWeight] = useState(false);
    const [time, setTime] = useState(false);
    const [distance, setDistance] = useState(false);


    const goals = () => {
        return <div onClick={() => {
            setNewGoal(!newGoal);
        }} className='goal-card'><img src={plusSign}></img></div>
    }

    const goalInputs = () => {
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

    const workoutOptions = () => {
        switch (category) {
            case 'Strength':
                return <React.Fragment>
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
                </React.Fragment>;
            case 'Endurance':
                return <React.Fragment>
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
                </React.Fragment>;
            case 'Balance':
                return <React.Fragment>
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
                </React.Fragment>;
            default:
                return '';
        }
    }

    return (
        <section>
            <section>
                <h1 className='goals-title'>My Goals</h1>
                <div className='goal-container'>
                    {goals()}
                </div>
            </section>
            <section>
                {newGoal ? (
                    <form onSubmit={e => {
                        e.preventDefault();
                        /* TODO Setup a fetch here */
                        console.log(category);
                        console.log(exercise);
                        console.log(reps);
                        console.log(weight);
                        console.log(time);
                        console.log(distance);
                    }} className='goals-form'>
                        <label>Choose Category</label>
                        <select onChange={e => {
                            setCategory(e.target.value);
                            setExercise(null);
                        }} name='exercise'>
                            <option></option>
                            <option value='Endurance'>Endurance</option>
                            <option value='Strength'>Strength</option>
                            <option value='Balance'>Balance</option>
                        </select>
                        {workoutOptions()}
                        {goalInputs()}
                        <button>Submit Goal</button>
                    </form>
                ) : null}
            </section>
        </section>
    )
}