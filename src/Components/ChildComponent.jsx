import React from 'react'

const ChildComponent = ({ name, counter }) => {
    return (

        <div>
            <h3>Child Component</h3>
            <p>- Привет, {name}! Текущий счетчик: {counter}</p>
            </div>
    )
}


export default ChildComponent;
