import { useState } from "react";

export const useCounter = (initialValue= 0, maxValue = 1, step = 1) =>{ //esto es una funcion flecha. useCounter es el nombre de la función que la hemos combertido en hook

    const [count, setCount] = useState(initialValue)

    const increment = () =>{
        if (count + step <= maxValue)
            setCount(count + step)
    }

    const decrement = () =>{
        if(count - step >= 1)
            setCount(count - step)
    }
    const reset = () =>{
        setCount(1)
    }

   return {count, increment, decrement, reset}
} 
export default useCounter;