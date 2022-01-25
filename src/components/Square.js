import React from 'react'
import { useState , useEffect} from 'react/cjs/react.development'

function Square() {
    const [count, setCount]= useState(0);
    const [calculation, setCalculation] = useState(0);
    useEffect(() => {
        setCalculation(()=> count*count);},[count])
    return (
    <><div id='countt'>
     <p>Number: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Square root: {calculation}</p>
      </div>
        </>
         )
}

export default Square
