import { useState } from "react";

const Button = ({text , clickEvent}) => {
    return (
        <button
            name={text}
            onClick = {clickEvent}
        >
            {text}
        </button>
    )
}

export default Button