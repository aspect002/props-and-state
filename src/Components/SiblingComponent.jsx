import React, { useState } from "react";

const SiblingComponent = () => {
    const [text, setText] = useState('');

    const ButtonSetText = () => {
        setText('Redev');
    }
    return (
        <div>
            <h4>SiblingComponent</h4>
            <p>Текущий текст: {text}</p>
            <button onClick={ButtonSetText}> изменить текст</button>
        </div>
    )
}

export default SiblingComponent;
