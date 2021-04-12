import React from 'react';
import './App.css';
import settings from './data';
import Card from './Card';
// import Timer from './Timer';
// import PlayStop from './Timer';

function App() {
  return (
    <div id='grid'>
      {/* <PlayStop /> */}
      <div></div>
      <Card settings={settings}/>
      <div></div>
      {/* <Break /> */}
      {/* <cardHistory /> */}
    </div>
  );
}


export default App;