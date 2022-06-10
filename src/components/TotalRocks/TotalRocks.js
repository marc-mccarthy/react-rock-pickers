import {useState} from 'react';

function TotalRocks(props) {

    const [overallCount, setOverallCount] = useState(0);

    return (
        <div>
            <div>Total Rocks Picked: {props.setSum(2)}</div>
        </div>
    );
}

export default TotalRocks;
