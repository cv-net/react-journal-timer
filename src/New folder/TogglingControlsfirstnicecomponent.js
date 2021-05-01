class TogglingControls extends Component {
    constructor(){
        super();
        this.state = {
            play: false,
            stop: true
        }
    }

    handlePlay = ()=>{
        this.setState({
            play: true,
            stop: false
        })
        this.props.startSession() 
    }

    handlePause = ()=>{
        this.setState({
            play: false,
            stop: false
        })
    }

    handleStop = ()=>{
        this.setState({
            play: false,
            stop: true
        })
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