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
    const [results, setResults] = useState([]);

    const [goals, setGoals] = useState([]);

    const goalComplete = () => {

        fetch(`${API_BASE_URL}/stats`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
                Authorization: "Bearer ".concat(
                    localStorage.getItem("jwtToken")
                )
            }
        })
            .then(result => {
                return result
            })
            .catch(err => {
                console.log(err);
            })

    }

    const deleteGoal = (index) => {

        let data = {
            Category: results[index].goal.Category,
            Exercise: results[index].goal.Exercise,
            Reps: results[index].goal.Reps,
            Weight: results[index].goal.Weight,
            Distance: results[index].goal.Distance,
            Time: results[index].goal.Time
        }

        fetch(`${API_BASE_URL}/goal`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
                Authorization: "Bearer ".concat(
                    localStorage.getItem("jwtToken")
                )
            },
            body: JSON.stringify(data)
        })
            .then(result => {
                fetchGoals();
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            })
    }

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
            .then(resp => {
                fetchGoals();
                console.log(resp)
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
                setResults(results);
                const item = results.map((result, index) => {
                    let temp = Object.keys(result.goal);
                    let dog = temp.map((title, index) => {
                        if (title !== 'Category' && title !== 'Exercise') {
                            return <div key={index} >
                                {title}: {result.goal[title]}
                            </div>
                        }
                        if (title === 'Exercise') {
                            return <div className='goal-card-title' key={index} >
                                {result.goal[title]}
                            </div>
                        }
                    })

                    return <div key={index} className='goal-card'>
                        {dog}
                        <div className='button-container'>
                            <button onClick={() => {
                                goalComplete();
                                deleteGoal(index);
                            }} className='goal-card-button-left'>✔</button>
                            <button onClick={() => {
                                deleteGoal(index);
                            }} className='goal-card-button-right'>X</button>
                        </div>
                    </div>

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
                    <input aria-label='Pushups Reps' onChange={e => {
                        setReps(e.target.value);
                    }}></input>
                </React.Fragment>;
            case 'Squats':
                return <React.Fragment>
                    <label>Reps</label>
                    <input aria-label='Squats Reps' onChange={e => {
                        setReps(e.target.value);
                    }}></input>
                    <label>Weight</label>
                    <input aria-label='Squats Weight' onChange={e => {
                        setWeight(e.target.value);
                    }}></input>
                </React.Fragment>;
            case 'Bench':
                return <React.Fragment>
                    <label>Reps</label>
                    <input aria-label='Bench Reps' onChange={e => {
                        setReps(e.target.value);
                    }}></input>
                    <label>Weight</label>
                    <input aria-label='Bench Weight' onChange={e => {
                        setWeight(e.target.value);
                    }}></input>
                </React.Fragment>;
            case 'Incline':
                return <React.Fragment>
                    <label>Reps</label>
                    <input aria-label='Incline Reps' onChange={e => {
                        setReps(e.target.value);
                    }}></input>
                    <label>Weight</label>
                    <input aria-label='Incline Weight' onChange={e => {
                        setWeight(e.target.value);
                    }}></input>
                </React.Fragment>;
            case 'Rows':
                return <React.Fragment>
                    <label>Reps</label>
                    <input aria-label='Rows Reps' onChange={e => {
                        setReps(e.target.value);
                    }}></input>
                    <label>Weight</label>
                    <input aria-label='Rows Weight' onChange={e => {
                        setWeight(e.target.value);
                    }}></input>
                </React.Fragment>;
            case 'Pullups':
                return <React.Fragment>
                    <label>Reps</label>
                    <input aria-label='Pullups' onChange={e => {
                        setReps(e.target.value);
                    }}></input>
                </React.Fragment>;
            case 'Situps':
                return <React.Fragment>
                    <label>Reps</label>
                    <input aria-label='Situps' onChange={e => {
                        setReps(e.target.value);
                    }}></input>
                </React.Fragment>;
            case 'Biking':
                return <React.Fragment>
                    <label>Distance</label>
                    <input aria-label='Biking Distance' onChange={e => {
                        setDistance(e.target.value);
                    }}></input>
                    <label>Time</label>
                    <input aria-label='Biking Time' onChange={e => {
                        setTime(e.target.value);
                    }}></input>
                </React.Fragment>;
            case 'Hiking':
                return <React.Fragment>
                    <label>Distance</label>
                    <input aria-label='Hiking Distance' onChange={e => {
                        setDistance(e.target.value);
                    }}></input>
                </React.Fragment>;
            case 'Walking':
                return <React.Fragment>
                    <label>Distance</label>
                    <input aria-label='Walking Distance' onChange={e => {
                        setDistance(e.target.value);
                    }}></input>
                    <label>Time</label>
                    <input aria-label='Walking Time' onChange={e => {
                        setTime(e.target.value);
                    }}></input>
                </React.Fragment>;
            case 'Running':
                return <React.Fragment>
                    <label>Distance</label>
                    <input aria-label='Running Distance' onChange={e => {
                        setDistance(e.target.value);
                    }}></input>
                    <label>Time</label>
                    <input aria-label='Running Time' onChange={e => {
                        setTime(e.target.value);
                    }}></input>
                </React.Fragment>;
            case 'Swimming':
                return <React.Fragment>
                    <label>Distance</label>
                    <input aria-label='Swimming Distance' onChange={e => {
                        setDistance(e.target.value);
                    }}></input>
                </React.Fragment>;
            case 'Yoga':
                return <React.Fragment>
                    <label>Time</label>
                    <input aria-label='Yoga' onChange={e => {
                        setTime(e.target.value);
                    }}></input>
                </React.Fragment>;
            case 'Stretching':
                return <React.Fragment>
                    <label>Time</label>
                    <input aria-label='Stretching' onChange={e => {
                        setTime(e.target.value);
                    }}></input>
                </React.Fragment>;
            case 'Meditation':
                return <React.Fragment>
                    <label>Time</label>
                    <input aria-label='Meditation' onChange={e => {
                        setTime(e.target.value);
                    }}></input>
                </React.Fragment>;
            case 'Wall':
                return <React.Fragment>
                    <label>Time</label>
                    <input aria-label='Wall squats' onChange={e => {
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
                    <select aria-label='Strength' onChange={e => {
                        setExercise(e.target.value);
                        reset();
                    }} name='type'>
                        <option></option>
                        <option aria-label='Pushups' value='Pushups'>Push Ups</option>
                        <option aria-label='Squats' value='Squats'>Squats</option>
                        <option aria-label='Bench' value='Bench'>Bench Press</option>
                        <option aria-label='Incline' value='Incline'>Incline Press</option>
                        <option aria-label='Rows' value='Rows'>Rows</option>
                        <option aria-label='Pullups' value='Pullups'>Pull Ups</option>
                        <option aria-label='Situps' value='Situps'>Sit Ups</option>
                    </select>
                </React.Fragment>;
            case 'Endurance':
                return <React.Fragment>
                    <label>Choose Exercise</label>
                    <select aria-label='Endurance' onChange={e => {
                        setExercise(e.target.value);
                        reset();
                    }} name='type'>
                        <option></option>
                        <option aria-label='Biking' value='Biking'>Biking</option>
                        <option aria-label='Hiking' value='Hiking'>Hiking</option>
                        <option aria-label='Walking' value='Walking'>Walking</option>
                        <option aria-label='Running' value='Running'>Running</option>
                        <option aria-label='Swimming' value='Swimming'>Swimming</option>
                    </select>
                </React.Fragment>;
            case 'Balance':
                return <React.Fragment>
                    <label>Choose Exercise</label>
                    <select aria-label='Balance' onChange={e => {
                        setExercise(e.target.value);
                        reset();
                    }} name='type'>
                        <option></option>
                        <option aria-label='Yoga' value='Yoga'>Yoga</option>
                        <option aria-label='Stretching' value='Stretching'>Stretching</option>
                        <option aria-label='Meditation' value='Meditation'>Meditation</option>
                        <option aria-label='Wall Squats' value='Wall'>Wall Squats/Chair Squats</option>
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
                    }} className='goals-form'>
                        <label>Choose Category</label>
                        <select aria-label='Exercise Type' onChange={e => {
                            setCategory(e.target.value);
                            setExercise(null);
                        }} name='exercise'>
                            <option></option>
                            <option aria-label='Endurance' value='Endurance'>Endurance</option>
                            <option aria-label='Strength' value='Strength'>Strength</option>
                            <option aria-label='Balance' value='Balance'>Balance</option>
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