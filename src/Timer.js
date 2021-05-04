import React, { useState, useRef } from 'react';
import useInterval from '@use-it/interval';
let duration, minutes, seconds;

function TimerInterface(props) {
    const [ play, setPlay ] = useState(false);
    const [ stop, setStop ] = useState(true);
    const [ delay, setDelay ] = useState(null);
    const timer = useRef(props.time);

    useInterval(() => {
        minutes = parseInt(timer.current / 60, 10);
        seconds = parseInt(timer.current % 60, 10);

        minutes = minutes.toString().length == 1 ? `0${minutes}` : `${minutes}`;
        seconds = seconds.toString().length == 1 ? `0${seconds}` : `${seconds}`;

        console.log(`${minutes}:${seconds}`);

        if (timer.current < 0) {
            timer.current = props.time;
        }

        timer.current--;

        props.changeTimeDisplay(`${minutes}:${seconds}`);

    }, delay);

    const handlePlay = () => {
        setPlay(true);
        setStop(false);
        setDelay(1000); 
        props.isRunning(true);
    }

    const handlePause = () => {
        setPlay(false);
        setStop(false);
        setDelay(null);
        props.isRunning(false);
    }

    const handleStop = () => {
        setPlay(false);
        setStop(true);
        setDelay(null);
        timer.current = props.time;
        props.changeTimeDisplay(`${props.time/60}:00`);
        props.isRunning(false);

    }

    if (stop) {
        return(
            <div id='sessioncontrols'>
                <img src='/play.png' alt='play button' onClick={handlePlay}></img>
                <img src='/stopfalse.svg' alt='stop button' ></img>
            </div>
        );
    } else if (play) {
        return(
            <div id='sessioncontrols'>
                <img src='/pause.png' alt='pause button' onClick={handlePause}></img>
                <img src='/stop.png' alt='stop button' onClick={handleStop}></img>
            </div>
            
        );
    } else {
        return(
            <div id='sessioncontrols'>
                <img src='/play.png' alt='play button' onClick={handlePlay}></img>
                <img src='/stop.png' alt='stop button' onClick={handleStop}></img>
            </div>
        );
    }

}

export default TimerInterface;