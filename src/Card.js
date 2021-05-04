import React, {useState} from 'react';
import TimerInterface from './Timer';
import TimeDisplay from './TimeDisplay';
import SessionInput from './SessionInput';
// import WorkJournal from './WorkJournal';

function Card() {
    const [ sessionTime, setSessionTime ] = useState(1500);
    const [ timeDisplay, setDisplay ] = useState(`${sessionTime/60}:00`);
    const [ isRunning, setIsRunning ] = useState(false);


    const changeSessionTime = (session) => {
        isRunning ? alert('Stop it first!') :
            session = parseInt(session);
            setSessionTime(session * 60);
            setDisplay(`${session}:00`);
    }

    const isPlaying = (boolean) => {
        setIsRunning(boolean);
    }

    const changeTimeDisplay = (display) => {
        setDisplay(display);
    }
    

    return(
        <>
            < TimeDisplay display={timeDisplay} />
            < TimerInterface 
                time={sessionTime} 
                changeTimeDisplay={changeTimeDisplay} 
                isRunning={isPlaying}
            />
            < SessionInput changeSessionTime={changeSessionTime} />
            {/* < WorkJournal />  */}
        </>
    );
}

export default Card;


