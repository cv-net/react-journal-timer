import React, {useState} from 'react';
import TimerInterface from './Timer';
import TimeDisplay from './TimeDisplay';
// import SessionInput from './SessionInput';
// import WorkJournal from './WorkJournal';

function Card() {
    const [ time, setTime ] = useState(1500);
    const [ timeDisplay, setTimeDisplay ] = useState('25:00');

    const changeTimeDisplay = (display) => {
        setTimeDisplay(display);
    }

    return(
        <>
            < TimerInterface time={time} changeTimeDisplay={changeTimeDisplay} />
            < TimeDisplay display={timeDisplay} />
            {/* < SessionInput />
            < WorkJournal /> */}
        </>
    );
}

export default Card;


