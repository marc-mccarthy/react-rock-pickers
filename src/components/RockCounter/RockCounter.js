import {useState} from 'react';

function RockCounter(props) {

    const [count, setCount] = useState(0);
    const [overFifty, setOverFifty] = useState('');

    const increaseCount = () => {
        if (count > 49) {
            setCount(count + 1);
            setOverFifty('Done');
            props.groupTotal(1);
        } else {
            setCount(count + 1);
            props.groupTotal(1);
        }
    }

    const decreaseCount = () => {
        count <  1 ? alert(`Can't go below 0`) : setCount(count - 1);
        props.groupTotal(-1);
    }

    const resetCount = () => {
        setCount(0);
        setOverFifty('');
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
