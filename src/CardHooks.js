// import React, { Component, useState, useEffect } from 'react';
// import Session from './Timer';

class Card extends Component {
    const [ settings, setSettings ] = React.useState(
        {
            time: 1500,
            timeDisplay: props.settings.pomodoro.time / 60 + ':00',
            session: null,
            timeElapsed: 0,
            notes: [],
            value: '',
        }
    )

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


