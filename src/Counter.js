import React, {useState} from "react";

import './Counter.css'

const Counter = () => {

    const [contador, setContador] = useState(0)

    const clickButton = operador => {
        const novoValor = operador === '+'
        ? contador + 1
        : contador -1
        
        setContador(novoValor)
    }


    return (
        <div className="counter">
            <span>{contador}</span>
            <button onClick={() => clickButton('-')}>-</button>
            <button onClick={() => clickButton('+')}>+</button>
        </div>
    )
}

export default Counter