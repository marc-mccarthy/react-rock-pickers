import React, {useState} from 'react';
import './App.css';
import RockCounter from '../RockCounter/RockCounter';
import TotalRocks from '../TotalRocks/TotalRocks';

function App() {

    const [sum, setSum] = useState(0);

  return (
    <div>
      <header>
        <h1>React Rock Pickers</h1>
        <p>
          "You ain't ever worked a day until you worked a day picking rocks." -Mike Schlangen
        </p>
      </header>
      <h2>Marc</h2>
      <RockCounter setSum={setSum}/>
      <h2>Jessica</h2>
      <RockCounter setSum={setSum}/>
      <h2>Mila</h2>
      <RockCounter setSum={setSum}/>
      <h2>Madden</h2>
      <RockCounter setSum={setSum}/>
      <h2>Reya</h2>
      <RockCounter setSum={setSum}/>
    </div>
  );
}

export default App;
