import { useState } from "react";

const FizzBuzz = () => {

    const [number, setNumber] = useState(1);
    
    const addNumber = () => {
        setNumber(number + 1);
    };

    const minusNumber = () => {
        setNumber(number - 1);
    };

    return(
        <>
            <h1>FizzBuzz</h1>
            <h2>{ number }</h2>
            <button>+1</button>
            <button>-1</button>
        </>
    )
};

export default FizzBuzz;