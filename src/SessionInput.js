function SessionInput(props) {

    // const changeSessionTime = (value) => {
    //     console.log(value)
    //     props.changeSessionTime(value)
    // }

    return(
        <div>
            <select name='session' onChange={e => props.changeSessionTime(e.target.value)} >
                <option value='25'>25</option>
                <option value='50'>50</option>
            </select>
        </div>
    );
}

export default SessionInput;