import React, { Component } from 'react';

class WorkJournal extends Component {
    render() {
        return(
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
        );
    }
}

export default WorkJournal;