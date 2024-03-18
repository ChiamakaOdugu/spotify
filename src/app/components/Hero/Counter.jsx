import { useState } from 'react'
import { CustomButton } from "../Button"
 
let count = 0;
 
export const Counter = () => {
    let [count, setCount] = useState(0)
    const addNumber = () => {
      setCount(count + 1)
    }
    return (
        <div>
          <h1> My number: {count} </h1>
          <CustomButton onClick={addNumber}>
            Count up
          </CustomButton>
        </div>
    )
}