import React, { useState, useEffect } from 'react';
import plusSign from '../assets/plussign.png';
import { API_BASE_URL } from "../config";
import './css/goals.css';

export default function Goals() {

    const [newGoal, setNewGoal] = useState(false);
    const [category, setCategory] = useState(false);
    const [exercise, setExercise] = useState(false);
    const [reps, setReps] = useState(false);
    const [weight, setWeight] = useState(false);
    const [time, setTime] = useState(false);
    const [distance, setDistance] = useState(false);

    const [goals, setGoals] = useState([]);

    const submitGoal = () => {
        let data = {
            Category: category,
            Exercise: exercise,
            Reps: reps,
            Weight: weight,
            Time: time,
            Distance: distance
        }
        fetch(`${API_BASE_URL}/goal`, {
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
            .then(result => {
                fetchGoals();
                console.log(result)
            })
            .catch(err => {
                console.log(err);
            });
    }

    const fetchGoals = () => {
        fetch(`${API_BASE_URL}/goal/user/all`, {
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
            .then(results => {
                const item = results.map((result, index) => {
                    let temp = Object.keys(result.goal);
                    let dog = temp.map((title, index) => {
                        return <div key={index}>{title}: {result.goal[title]}</div>
                    })

                    return <div key={index} className='goal-card'>{dog}</div>

                })

                setGoals(item);
            })
            .catch(err => {
                console.log(err);
            });
    }

    useEffect(() => {
        fetchGoals()
    }, [goals.length])


    const reset = () => {
        setDistance(false);
        setTime(false);
        setWeight(false);
        setReps(false);
    }

    const goalInputs = () => {
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
                        setReps(e.target.value);
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

    const workoutOptions = () => {
        switch (category) {
            case 'Strength':
                return <React.Fragment>
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
                </React.Fragment>;
            case 'Endurance':
                return <React.Fragment>
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
                </React.Fragment>;
            case 'Balance':
                return <React.Fragment>
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
                    {goals}
                    <div onClick={() => {
                        setNewGoal(!newGoal);
                    }} className='goal-card'><img alt='Add goal plus sign' src={plusSign} /></div>
                </div>
            </section>
            <section>
                {newGoal ? (
                    <form onSubmit={e => {
                        e.preventDefault();
                        /* TODO Setup a fetch here */
                        submitGoal();
                        console.log('Type: Goal');
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