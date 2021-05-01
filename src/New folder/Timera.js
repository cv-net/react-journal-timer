import React, { useState, useEffect } from 'react';

// function Timer() {
//     const [ time, setTime ] = useState({
//       minutes: 0,
//       seconds: 0,
//       initial: 1500,
//       display: ''
//     })
//     const [second, setSecond] = useState('00');
//     const [minute, setMinute] = useState('00');
//     const [play, setPlay] = useState(false);
//     const [stop, setStop] = useState(true);

//     useEffect(() => {
//       let intervalId;
  
//       if (play) {
//         intervalId = setInterval(() => {
//           let duration = time.initial * 60;
//           let timer = duration, minutes, seconds;
          
//           setTime({...time, 
//             minutes: parseInt(timer / 60, 10),
//             seconds: parseInt(timer % 60, 10)            
//           })

  
//           if({minutes}.toString().length === 1){
//             setMinute(`0${minutes}`)
//             } else {
//             setMinute(`${minutes}`)
//             };
//           if({seconds}.toString().length === 1){
//               setMinute(`0${second}`)
//               } else {
//               setMinute(`${second}`)
//               };
//           setTime({...time, 
//             display: `${time.minute}:${time.second}`     
//           })

//           if (--timer < 0) {
//               timer = duration;
//           }

//           setTime( time.initial-- )
//       }, 1000)
//     }
  
//       return () => clearInterval(intervalId);

//   }, [play, time])

//     function stopTimer() {
//         setPlay(false);
//         setTime.initial(0);
//         setSecond('00');
//         setMinute('00')
//     }

//     function handlePlay() {
//       setPlay(true);
//       setStop(false)
//     }


//     return (
//       <div className="container">
//         <h1>{time.display}</h1>
//         <button onClick={handlePlay}>Play</button>
//       </div>
//     )
// }

// 3 functions
// custom hook for play and stop booleans
function usePlayStop() {
  const [playStop, setPlayStop] = useState({
    play: false,
    stop: true
  })


  //handler to set Play or not
  function handlePlay() {
    setPlay(true)
    setStop(false)
    console.log('play = true')
  }

  function handleStop() {
    setPlay(false)
    setStop(true)
    console.log('stop = true')
  }

  if()
  return(
    <div>
        <h1>play = { play }, stop = { stop }</h1>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handleStop}>Stop</button>
    </div>
  );

}
// pass down:
//  timer functionality, setInterval effect hooks
//  button render
function ButtonRender() {
  const play = usePlayStop()
  const stop = usePlayStop()

  //should I just render the buttons here?
  if (stop) {

  }
  
}



    
export default usePlayStop;