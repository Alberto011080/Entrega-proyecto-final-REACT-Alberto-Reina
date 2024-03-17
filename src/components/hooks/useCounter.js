import { useState } from "react";

export const useCounter = (minValue= 0, maxValue = 1, step = 1) =>{ //esto es una funcion flecha. useCounter es el nombre de la función que la hemos combertido en hook

    const [count, setCount] = useState(minValue)

    const increment = () =>{
        if (count + step <= maxValue)
            setCount(count + step)
    }

    const decrement = () =>{
        if(count - step >= minValue)
            setCount(count - step)
    }
    const reset = () =>{
        setCount(minValue)
    }

   return {count, increment, decrement, reset}
} 
export default useCounter;