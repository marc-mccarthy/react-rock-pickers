import React, {useState} from 'react';
import './App.css';
import RockCounter from '../RockCounter/RockCounter';

function App() {

    const [groupTotal, setGroupTotal] = useState(0);

    const updateGroupTotal = (returnNum) => {
        setGroupTotal(returnNum + groupTotal);
    }

    return (
        <div>
            <header>
                <h1>React Rock Pickers</h1>
                <h2>Total Count: {groupTotal}</h2>
                <p>
                    "You ain't ever worked a day until you worked a day picking rocks." -Mike Schlangen
                </p>
            </header>
            <h2>Marc</h2>
            <RockCounter groupTotal={updateGroupTotal}/>
            <h2>Jessica</h2>
            <RockCounter groupTotal={updateGroupTotal}/>
            <h2>Mila</h2>
            <RockCounter groupTotal={updateGroupTotal}/>
            <h2>Madden</h2>
            <RockCounter groupTotal={updateGroupTotal}/>
            <h2>Reya</h2>
            <RockCounter groupTotal={updateGroupTotal}/>
        </div>
    );
}

export default App;
