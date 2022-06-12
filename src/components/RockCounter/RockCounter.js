import {useState} from 'react';

function RockCounter(props) {

    const [count, setCount] = useState(0);
    const [overFifty, setOverFifty] = useState('');

    const increaseCount = () => {
        if (count >= 50) {
            setOverFifty('Done');
            setCount(count + 1);
            props.groupTotal(1);
        } else {
            setCount(count + 1);
            props.groupTotal(1);
        }
    }

    const decreaseCount = () => {
        if (count < 1) {
            alert(`Can't go below 0`);
        } else if (count < 51) {
            setOverFifty('');
            setCount(count - 1);
            props.groupTotal(-1);
        } else {
            setCount(count - 1);
            props.groupTotal(-1);
        }
    }

    const resetCount = () => {
        setCount(0);
        setOverFifty('');
        props.groupTotal(-count);
    }

    return (
        <div>
            <div>Rocks Picked: {count} {overFifty}</div>
            <div>
                <button onClick={increaseCount}>Increase</button>
                <button onClick={decreaseCount}>Decrease</button>
                <button onClick={resetCount}>Reset</button>
            </div>
        </div>
    );
}

export default RockCounter;
