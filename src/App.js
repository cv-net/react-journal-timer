import React, { useState } from 'react';
import './App.css';
// import settings from './New folder/data';
// import Card from './New folder/Card';
import Session from './Timer';
// import Timer from './Timer';
// import PlayStop from './Timer';

function App() {
  const [ time, setTime ] = useState(1500);
  return (
    <div id='grid'>
      {/* <PlayStop /> */}
      <div></div>
      {/* <Card settings={settings}/> */}
      <Session time={time}/>
      <div></div>
      {/* <Break /> */}
      {/* <cardHistory /> */}
    </div>
  );
}


export default App;