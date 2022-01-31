import React from 'react';
import { useState } from 'react';


const Button = (props) => {
    const [textChange, textChangeHandler] = useState(props.text)

    return (
        <button onClick={() => { textChangeHandler('Thank you :)') }}>

            <span>{textChange}</span>
        </button>
    )
}

export default Button;