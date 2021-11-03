import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value = 10 }) => {
    const [counter, setCounter] = useState(value);

    return (
        <div id="counter-component">
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <div>
                <button onClick={() => setCounter(counter - 1)}>-1</button>
                <button onClick={() => setCounter(value)}>reset</button>
                <button onClick={() => setCounter(counter + 1)}>+1</button>
            </div>
        </div>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number,
};

export default CounterApp;
