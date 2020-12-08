import { useState } from "react";

const FizzBuzz = () => {

    const [number, setNumber] = useState(1);
    
    const addNumber = () => {
        setNumber(number + 1);
    };

    const minusNumber = () => {
        if(number > 0){
            setNumber(number - 1);
        } else{
            return 0
        }
    };

    return(
        <>
            <h1>FizzBuzz</h1>
            <h2>{ number }</h2>
            <button onClick={() => addNumber()}>+1</button>
            <button onClick={() => minusNumber()}>-1</button>
        </>
    )
};

export default FizzBuzz;