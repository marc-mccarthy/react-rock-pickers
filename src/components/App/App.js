import React from 'react';
import './App.css';
import RockCounter from '../RockCounter/RockCounter';

function App() {
  return (
    <div>
      <header>
        <h1>React Rock Pickers</h1>
        <p>
          "You ain't ever worked a day until you worked a day picking rocks." -
          Mike Schlangen
        </p>
      </header>
      <h2>Luke</h2>
      <RockCounter />
      <h2>JJ</h2>
      <RockCounter />
      <h2>Sam</h2>
      <RockCounter />
      <h2>Pete</h2>
      <RockCounter />
    </div>
  );
}

export default App;
