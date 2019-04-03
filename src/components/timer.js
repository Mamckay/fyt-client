import React from 'react';
import axios from 'axios';
import music from '../assets/audio/letsGo.mp3';
import './css/timer.css';

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
            isOn: false,
            start: 0,
            minutes: 0,
            finished: false,
            img: ''
        }
        this.setImage = this.setImage.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.stopTimer = this.stopTimer.bind(this);
        this.resetTimer = this.resetTimer.bind(this);
        this.setMinutes = this.setMinutes.bind(this);
        this.setFinished = this.setFinished.bind(this)
    }

    setImage(gif) {
        this.setState({
            img: gif
        })
    }

    setFinished() {

        axios({
            method: "get",
            url: `https://api.giphy.com/v1/gifs/random?api_key=uGDA18rq10Z0wh6l5jk1I3IyXUdY8G5O&tag=dancing&rating=g`,
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then(res => {
                console.log(res.data.data);
                this.setImage(<img alt='gif magic' className='gif' src={res.data.data.fixed_height_downsampled_url} />);
            })
            .catch(err => {
                alert('Event name and description must be unique');
            });

    }

    setMinutes(min) {
        console.log('minutes set');
        this.setState({
            minutes: min * 60
        })
    }

    startTimer() {
        this.setState({
            isOn: true,
            time: this.state.time,
            start: Date.now() - this.state.time
        })
        this.timer = setInterval(() => {
            console.log(this.state.time);
            if (this.state.time > this.state.minutes) {
                this.stopTimer();
                this.setFinished();
            }
            this.setState({
                time: this.state.time + 1
            })
        }, 1000);
    }
    stopTimer() {
        this.setState({ isOn: false })
        clearInterval(this.timer)
    }
    resetTimer() {
        this.setImage('');
        this.setState({ time: 0, isOn: false });
    }

    render() {
        return (<div className='timer-container'>
            <h1>Timer</h1>
            {!this.state.isOn ?
                <h2> How many minutes?</h2> : null
            }
            {this.state.isOn ? <p className='timer-showtime'>{this.state.time}</p> : null}
            {this.state.img}
            <input aria-label='Set timer in minutes' className='timer-input' onChange={e => {
                this.setMinutes(e.target.value);
            }}></input>
            <button className='timer-button' onClick={() => {
                if (!this.state.isOn) {
                    this.startTimer();
                } else {
                    this.stopTimer();
                }
            }}>Start/Stop</button>
            {!this.state.isOn ? <button className='timer-button' onClick={() => {
                this.resetTimer();
            }}>Reset</button> : null}
            {this.state.finished ? <audio autoPlay><source src={music} type="audio/ogg" />Your browser does not support the audio element.</audio> : null}
        </div>)
    }
}