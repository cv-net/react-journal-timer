import React, { useState } from 'react';
import useInterval from '@use-it/interval';
let duration = 1500;
let timer = duration, minutes, seconds;

function TimerInterface(props) {
    duration = props.time;
    const [ play, setPlay ] = useState(false);
    const [ stop, setStop ] = useState(true);
    const [ delay, setDelay ] = useState(null);

    useInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes.toString().length == 1 ? `0${minutes}` : `${minutes}`;
        seconds = seconds.toString().length == 1 ? `0${seconds}` : `${seconds}`;

        console.log(`${minutes}:${seconds}`);

        if (timer < 0) {
            timer = 1500;
        }

        timer--;

        props.changeTimeDisplay(`${minutes}:${seconds}`);

    }, delay);

    const handlePlay = () => {
        setPlay(true);
        setStop(false);
        setDelay(1000); 
    }

    const handlePause = () => {
        setPlay(false);
        setStop(false);
        setDelay(null);
    }

    const handleStop = () => {
        setPlay(false);
        setStop(true);
        setDelay(null);
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