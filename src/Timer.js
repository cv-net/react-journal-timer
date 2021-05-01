import React, { useState, useEffect, useRef } from 'react';
import useInterval from '@use-it/interval';

function Session(props) {
    const [ settings, setSettings ] = useState(
        {
            time: props.time,
            timeElapsed: 0,
            timeDisplay: props.time / 60 + ':00',
            session: null,
            play: false,
            stop: true,
            notes: [],
            value: '',
            session: '',
        }
    )

    const startSession = ()=>{
        let duration = settings.time;
        console.log(duration)
        let timer = duration, minutes, seconds;
        let timeElapsed = 0;
        let session = setInterval(() => {           
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes.toString().length == 1 ? `0${minutes}` : `${minutes}`;
            seconds = seconds.toString().length == 1 ? `0${seconds}` : `${seconds}`;
            console.log(`${minutes}:${seconds}`);

            if (timer < 0) {
                timer = duration;
            }
            timer--
            timeElapsed++
            setSettings({
                timeDisplay: `${minutes}:${seconds}`,
                timeElapsed: timeElapsed
            })
        }, 1000);
        setSettings({
            session: session
        })
    }

    const handlePlay = () => {
        setSettings({
            play: true,
            stop: false
        })
        startSession() 
    }

    const handlePause = () => {
        setSettings({
            play: false,
            stop: false
        })
        clearInterval(settings.session)
        setSettings({
            time: props.time - this.state.timeElapsed
        })
    }

    const handleStop =()=> {
        setSettings({
            play: false,
            stop: true
        })
        clearInterval(settings.session);
        setSettings({
            timeDisplay: props.time / 60 + ':00',
            time: props.time
        })
        console.log('stopped!')
    }

    if (settings.stop) {
        return(
            <div id='sessioncontrols'>
                <img src='/play.png' alt='play button' onClick={handlePlay}></img>
                <img src='/stopfalse.svg' alt='stop button' ></img>
                < IntervalId />
            </div>
        );
    } else if (settings.play) {
        return(
            <div id='sessioncontrols'>
                <img src='/pause.png' alt='pause button' onClick={handlePause}></img>
                <img src='/stop.png' alt='stop button' onClick={handleStop}></img>
                < IntervalId />
            </div>
            
        );
    } else {
        return(
            <div id='sessioncontrols'>
                <img src='/play.png' alt='play button' onClick={handlePlay}></img>
                <img src='/stop.png' alt='stop button' onClick={handleStop}></img>
                < IntervalId />
            </div>
        );
    }

}

export default Session;



function IntervalId() {
    // const [intervalId, setIntervalId] = useState();
    // const [isPlaying, setIsPlaying] = useState(false);
    // const [counter, setCounter] = useState(0);
    const [delay, setDelay] = useState(null);
    const [counter, setCounter] = useState(25)

    useInterval(()=>{
        setCounter((currentCount) => currentCount -1);
        console.log(counter)
    }, delay);

    const startTimer = () => {
        setDelay(1000);
    }

    const pauseTimer = () => {
        setDelay(null);
        console.log('paused Timer')
    }

    const stopTimer = () => {
        setDelay(null);
        setCounter(25);
    }

    return (
        <>
            <button onClick={startTimer}>Start</button>
            <button onClick={pauseTimer}>Pause</button>
            <button onClick={stopTimer}>Stop</button>

        </>
    );
}