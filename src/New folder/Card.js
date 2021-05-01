import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            setting: props.settings.pomodoro,
            notes: [],
            value: '',
            // breakSetting: props.settings.break,
            time: settings.time,
            timeDisplay: props.settings.pomodoro.time / 60 + ':00',
            session: null,
            timeElapsed: 0
        };
    }


    handleNote = (event)=>{
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit = (event)=>{
        const copyOfNotes = [...this.state.notes]
        copyOfNotes.push(this.state.value);
        console.log(copyOfNotes);
        this.setState({
            notes: copyOfNotes
        })
        event.preventDefault();
        this.setState({
            value: ''
        })
    }

    startSession = ()=>{
        let duration = this.state.time;
        console.log(duration)
        let timer = duration, minutes, seconds;
        let timeElapsed = 0;
        this.session = setInterval(() => {           
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
            this.setState({
                timeDisplay: `${minutes}:${seconds}`,
                timeElapsed: timeElapsed
            })
        }, 1000);
    }

    handlePlay = ()=>{
        this.startSession() 
    }

    handlePause = ()=>{
        clearInterval(this.session)
        this.setState({
            time: this.props.settings.pomodoro.time - this.state.timeElapsed
        })
    }

    handleStop = ()=>{
        clearInterval(this.session);
        this.setState({
            timeDisplay: this.props.settings.pomodoro.time / 60 + ':00',
            time: this.props.settings.pomodoro.time
        })
        console.log('stopped!')
    }

    render(){
        const savedNotes = this.state.notes.map((note, i)=>{
            return <li key={i}>{note}</li>
        });

        return(
            <div id='main-block'>
                <div id='timerDisplay'>
                    <h1>{this.state.timeDisplay}mins</h1>
                </div>
                < TogglingControls 
                    startSession={this.startSession}
                    handlePlay={this.handlePlay}
                    handlePause={this.handlePause}
                    handleStop={this.handleStop}
                />
                {/* < SessionInput handleSessionSelection={} /> */}
                {/* <div></div> */}
                <div className='workJournal'>
                    <p><strong>{this.props.settings.pomodoro.timeStamp}</strong> {this.props.settings.pomodoro.title}</p>
                    <ul id='notepad'>
                        {savedNotes}
                    </ul>
                    <form onSubmit={this.handleSubmit}>
                        <textarea type='text' id='noteInput' value={this.state.value} onChange={this.handleNote}></textarea>
                        <input type='submit'></input>   
                    </form>
                </div>
            </div>
        );
    }
}

export default Card;

class SessionInput extends Component {
    constructor(){

    }

    render(){
        return(
            <div>
                <select name='session'>
                    <option value='25'>25</option>
                    <option value='50'>50</option>
                </select>
            </div>
        );
    }
}

class TogglingControls extends Component {
    constructor(){
        super();
        this.state = {
            play: false,
            stop: true
        }
    }

    handlePlay = () => {
        this.setState({
            play: true,
            stop: false
        })
        this.props.handlePlay() 
    }

    handlePause = () => {
        this.setState({
            play: false,
            stop: false
        })
        this.props.handlePause() 
    }

    handleStop =()=> {
        this.setState({
            play: false,
            stop: true
        })
        this.props.handleStop() 
    }

    render() {
        if (this.state.stop) {
            return(
                <div id='sessioncontrols'>
                    <img src='/play.png' onClick={this.handlePlay}></img>
                    <img src='/stopfalse.svg'></img>
                </div>
            );
        } else if (this.state.play) {
            return(
                <div id='sessioncontrols'>
                    <img src='/pause.png' onClick={this.handlePause}></img>
                    <img src='/stop.png' onClick={this.handleStop}></img>
                </div>
            );
        } else {
            return(
                <div id='sessioncontrols'>
                    <img src='/play.png' onClick={this.handlePlay}></img>
                    <img src='/stop.png' onClick={this.handleStop}></img>
                </div>
            );
        }
    }
}


