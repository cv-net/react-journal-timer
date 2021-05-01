function Timer(props) {

    startSession = ()=>{
        let duration = props.state.time * 60;
        console.log(duration)
        let timer = duration, minutes, seconds;
        this.session = setInterval(() => {           
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes.toString().length == 1 ? `0${minutes}` : `${minutes}`;
            seconds = seconds.toString().length == 1 ? `0${seconds}` : `${seconds}`;
            console.log(`${minutes}:${seconds}`);

            props.setState({
                time: this.time-1,
                timeDisplay: `${minutes}:${seconds}`
            })

            if (props.state.time < 0) {
                timer = duration;
            }
        }, 1000);
    }

    return(
        <div id='timerDisplay'>
            <h1>{this.state.timeDisplay}mins</h1>
        </div>
    )

}

export default Timer;