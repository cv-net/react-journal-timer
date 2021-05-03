import React from 'react';

function TimeDisplay(props) {
    return(
        <div id='timerDisplay'>
            <h1>{props.display}mins</h1>
        </div>
    );
}


export default TimeDisplay;