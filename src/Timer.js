import React, { useState, useEffect } from 'react';

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
        console.log(duration + 'yello')
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
        clearInterval(this.session)
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
                <img src='/play.png' onClick={handlePlay}></img>
                <img src='/stopfalse.svg'></img>
            </div>
        );
    } else if (settings.play) {
        return(
            <div id='sessioncontrols'>
                <img src='/pause.png' onClick={handlePause}></img>
                <img src='/stop.png' onClick={handleStop}></img>
            </div>
        );
    } else {
        return(
            <div id='sessioncontrols'>
                <img src='/play.png' onClick={handlePlay}></img>
                <img src='/stop.png' onClick={handleStop}></img>
            </div>
        );
    }

}

export default Session;