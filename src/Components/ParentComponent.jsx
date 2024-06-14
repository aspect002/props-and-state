import React, { useState } from 'react';
import ChildComponent from './ChildComponent';
import SiblingComponent from './SiblingComponent';


const ParentComponent = () => {
    const [counter, setCounter] = useState(0);
    const name ='Stas';

    const buttonIncrement = () => {
      setCounter(counter + 1)
    };

    const buttonReset = () => {
      setCounter(0)
    };

    const buttonRandomValue = () => {
      setCounter(Math.floor(Math.random() * 100));
    }

    const buttonDecrement = () => {
      setCounter(counter > 0 ? counter - 1 : 0)
    }

    return (
      <div>
        <h2>Counter</h2>
        <p>Current count: {counter}</p>
        <button onClick={buttonIncrement}>Increment</button>
        <button onClick={buttonReset}>Reset</button>
        <button onClick={buttonRandomValue}>Randov Value</button>
        <button onClick={buttonDecrement}>Decrement</button>
        <ChildComponent name={name} counter={counter} />
        <SiblingComponent />
      </div>
    )
  };

export default ParentComponent
