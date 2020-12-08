import { useEffect, useState } from "react";

const FizzBuzz = () => {

    const [number, setNumber] = useState(1);
    const [result, setResult] = useState("");
    
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

    useEffect(() =>{
        if (number % 5 == 0 && number % 3 == 0){
            setResult("FizzBuzz")
        } else if (number % 5 == 0){
            setResult("Buzz")
            } else if(number % 3 == 0){
                setResult("Fizz")
            } else {
                setResult(number)
            }
        }, [number])

    return(
        <>
            <h1>FizzBuzz</h1>
            <h2>{ number }</h2>
            <h3>{result}</h3>
            <button onClick={() => addNumber()}>+1</button>
            <button onClick={() => minusNumber()}>-1</button>
        </>
    )
};

export default FizzBuzz;