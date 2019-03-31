import React, { useState } from 'react';
import Endurance from '../assets/endurance.png';
import Strength from '../assets/strength.png';
import Balance from '../assets/balance.png';
import { API_BASE_URL } from "../config";
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
        setDistance(false);
        setTime(false);
        setWeight(false);
        setReps(false);
    }

    const submitWorkout = () => {
        let data = {
            Category: category,
            Exercise: exercise,
            Reps: reps,
            Weight: weight,
            Time: time,
            Distance: distance
        }
        fetch(`${API_BASE_URL}/workout`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                Authorization: "Bearer ".concat(
                    localStorage.getItem("jwtToken")
                )
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                return res.json();
            })
            .then(result => console.log(result))
            .catch(err => {
                console.log(err);
            });
    }

    const workoutInputs = () => {
        switch (exercise) {
            case 'Pushups':
                return <React.Fragment>
                    <label>Reps</label>
                    <input onChange={e => {
                        setReps(e.target.value);
                    }}></input>
                </React.Fragment>;
            case 'Squats':
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
            case 'Bench':
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
            case 'Incline':
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
            case 'Rows':
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
            case 'Pullups':
                return <React.Fragment>
                    <label>Reps</label>
                    <input onChange={e => {
                        setReps(e.target.value);
                    }}></input>
                </React.Fragment>;
            case 'Situps':
                return <React.Fragment>
                    <label>Reps</label>
                    <input onChange={e => {
                        setReps(e.target.value);
                    }}></input>
                </React.Fragment>;
            case 'Biking':
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
            case 'Hiking':
                return <React.Fragment>
                    <label>Distance</label>
                    <input onChange={e => {
                        setDistance(e.target.value);
                    }}></input>
                </React.Fragment>;
            case 'Walking':
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
            case 'Running':
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
            case 'Swimming':
                return <React.Fragment>
                    <label>Distance</label>
                    <input onChange={e => {
                        setDistance(e.target.value);
                    }}></input>
                </React.Fragment>;
            case 'Yoga':
                return <React.Fragment>
                    <label>Time</label>
                    <input onChange={e => {
                        setTime(e.target.value);
                    }}></input>
                </React.Fragment>;
            case 'Stretching':
                return <React.Fragment>
                    <label>Time</label>
                    <input onChange={e => {
                        setTime(e.target.value);
                    }}></input>
                </React.Fragment>;
            case 'Meditation':
                return <React.Fragment>
                    <label>Time</label>
                    <input onChange={e => {
                        setTime(e.target.value);
                    }}></input>
                </React.Fragment>;
            case 'Wall':
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
                        submitWorkout();

                    }} className='goals-form'>
                        <label>Choose Exercise</label>
                        <select onChange={e => {
                            setExercise(e.target.value);
                            reset();
                        }} name='type'>
                            <option></option>
                            <option value='Biking'>Biking</option>
                            <option value='Hiking'>Hiking</option>
                            <option value='Walking'>Walking</option>
                            <option value='Running'>Running</option>
                            <option value='Swimming'>Swimming</option>
                        </select>
                        {workoutInputs()}
                        <button>Submit Workout</button>
                    </form>
                ) : null}
                {strength ? (
                    <form onSubmit={e => {
                        e.preventDefault();
                        /* TODO Setup a fetch here */
                        submitWorkout();

                    }} className='goals-form'>
                        <label>Choose Exercise</label>
                        <select onChange={e => {
                            setExercise(e.target.value);
                            reset();
                        }} name='type'>
                            <option></option>
                            <option value='Pushups'>Push Ups</option>
                            <option value='Squats'>Squats</option>
                            <option value='Bench'>Bench Press</option>
                            <option value='Incline'>Incline Press</option>
                            <option value='Rows'>Rows</option>
                            <option value='Pullups'>Pull Ups</option>
                            <option value='Situps'>Sit Ups</option>
                        </select>
                        {workoutInputs()}
                        <button>Submit Workout</button>
                    </form>
                ) : null}
                {balance ? (
                    <form onSubmit={e => {
                        e.preventDefault();
                        /* TODO Setup a fetch here */
                        submitWorkout();

                    }} className='goals-form'>
                        <label>Choose Exercise</label>
                        <select onChange={e => {
                            setExercise(e.target.value);
                            reset();
                        }} name='type'>
                            <option></option>
                            <option value='Yoga'>Yoga</option>
                            <option value='Stretching'>Stretching</option>
                            <option value='Meditation'>Meditation</option>
                            <option value='Wall'>Wall Squats/Chair Squats</option>
                        </select>
                        {workoutInputs()}
                        <button>Submit Workout</button>
                    </form>
                ) : null}

            </section>
        </section>
    )
}