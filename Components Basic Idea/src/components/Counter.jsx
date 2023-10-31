import { useState } from "react"

export default function Counter(props){
    const [count, setCount] = useState(0);

    const onIncrementClick = () => {
        setCount(count + 1)
    }


    const clearCounter = () => {
        setCount(0);
    }
    return(
        <div>
            <h1>Counter</h1>

            <p>Count: {count}</p>
            <button onClick={onIncrementClick}> + </button>
            <button onClick={clearCounter}> clear </button>
            <button onClick={() => setCount(count - 1)}> - </button>

        </div>
    )
}