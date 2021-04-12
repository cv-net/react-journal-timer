import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            setting: props.settings.pomodoro,
            button: 'stop',
            notes: [],
            value: '',
            breakSetting: props.settings.break,
            time: props.settings.pomodoro.time,
            timeDisplay: props.settings.pomodoro.time,
            session: null
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
        let duration = this.state.time * 60;
        console.log(duration)
        let timer = duration, minutes, seconds;
        this.session = setInterval(() => {           
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
    
            minutes = minutes.toString().length == 1 ? `0${minutes}` : `${minutes}`;
            seconds = seconds.toString().length == 1 ? `0${seconds}` : `${seconds}`;
            console.log(`${minutes}:${seconds}`);

            this.setState({
                timeDisplay: `${minutes}:${seconds}`
            })

            if (timer < 0) {
                timer = duration;
            }
            timer--
        }, 1000);
    }

    stopSession() {
        clearInterval(this.session);
        console.log('stopped!')
    }

    handlePlay = ()=>{
        this.startSession() 
    }

    handlePause = ()=>{
        
    }

    handleStop = ()=>{
        this.stopSession()
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
                {/* <div></div> */}
                <div className='workJournal'>
                    <p><strong>{this.props.settings.pomodoro.timeStamp}</strong> {this.props.settings.pomodoro.title}</p>
                    <ul id='notepad'>
                        {savedNotes}
                    </ul>
                    <form onSubmit={this.handleSubmit}>
                        <input type='text' id='noteInput' value={this.state.value} onChange={this.handleNote}></input>
                        <input type='submit'></input>   
                    </form>
                </div>
            </div>
        );
    }
}

export default Card;

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
                    <img src='/stop.png'></img>
                </div>
            );
        } else if (this.state.play) {
            return(
                <div id='sessioncontrols'>
                    <img src='/pause.png' onClick={this.handlePause}></img>
                    <img src='/stopfalse.svg' onClick={this.handleStop}></img>
                </div>
            );
        } else {
            return(
                <div id='sessioncontrols'>
                    <img src='/play.png' onClick={this.handlePlay}></img>
                    <img src='/stop.svg'></img>
                </div>
            );
        }
    }
}





//   class ToggleableTimerForm extends React.Component {
//     render() {
//       if (this.props.isOpen) {
//         return (
//           <TimerForm />
//         );
//       } else {
//         return (
//           <div className='ui basic content center aligned segment'>
//             <button className='ui basic button icon'>
//               <i className='plus icon' />
//             </button>
//           </div>
//         );
//       }
//     }
//   }
  
//   class EditableTimerList extends React.Component {
//     render() {
//       return (
//         <div id='timers'>
//           <EditableTimer
//             title='Learn React'
//             project='Web Domination'
//             elapsed='8986300'
//             runningSince={null}
//             editFormOpen={false}
//           />
//           <EditableTimer
//             title='Learn extreme ironing'
//             project='World Domination'
//             elapsed='3890985'
//             runningSince={null}
//             editFormOpen={true}
//           />
//         </div>
//       );
//     }
//   }
  
//   class EditableTimer extends React.Component {
//     render() {
//       if (this.props.editFormOpen) {
//         return (
//           <TimerForm
//             title={this.props.title}
//             project={this.props.project}
//           />
//         );
//       } else {
//         return (
//           <Timer
//             title={this.props.title}
//             project={this.props.project}
//             elapsed={this.props.elapsed}
//             runningSince={this.props.runningSince}
//           />
//         );
//       }
//     }
//   }
  
//   class Timer extends React.Component {
//     render() {
//       const elapsedString = helpers.renderElapsedString(this.props.elapsed);
//       return (
//         <div className='ui centered card'>
//           <div className='content'>
//             <div className='header'>
//               {this.props.title}
//             </div>
//             <div className='meta'>
//               {this.props.project}
//             </div>
//             <div className='center aligned description'>
//               <h2>
//                 {elapsedString}
//               </h2>
//             </div>
//             <div className='extra content'>
//               <span className='right floated edit icon'>
//                 <i className='edit icon' />
//               </span>
//               <span className='right floated trash icon'>
//                 <i className='trash icon' />
//               </span>
//             </div>
//           </div>
//           <div className='ui bottom attached blue basic button'>
//             Start
//           </div>
//         </div>
//       );
//     }
//   }
  
//   class TimerForm extends React.Component {
//     render() {
//       const submitText = this.props.title ? 'Update' : 'Create';
//       return (
//         <div className='ui centered card'>
//           <div className='content'>
//             <div className='ui form'>
//               <div className='field'>
//                 <label>Title</label>
//                 <input type='text' defaultValue={this.props.title} />
//               </div>
//               <div className='field'>
//                 <label>Project</label>
//                 <input type='text' defaultValue={this.props.project} />
//               </div>
//               <div className='ui two bottom attached buttons'>
//                 <button className='ui basic blue button'>
//                   {submitText}
//                 </button>
//                 <button className='ui basic red button'>
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     }
//   }
  
//   ReactDOM.render(<TimersDashboard />, document.getElementById('content'));
  


// class Card extends Component() {
//     constructor() {
//         super();
//         this.state = {
          
//         }
//       }
//     render() {
//         return(
//             <div>
//                 <div id='timedisplay'>
//                     //Countdown variable
//                 </div>
//                 <button id='playpause'>
//                     if(.state.playing = true) {
//                         //display pause button
//                     } else {
//                         //display play button
//                     }
//                 </button>
//                 <div id='notedisplay'>

//                 </div>
//                 <input type='text' id='noteinput'/>
//                 <input type='submit' />

//             </div>
//         );
//     }
// }
// /*
//   eslint-disable react/prefer-stateless-function, react/jsx-boolean-value,
//   no-undef, jsx-a11y/label-has-for
// */