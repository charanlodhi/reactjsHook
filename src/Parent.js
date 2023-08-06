import { useCallback, useState } from "react"
import Child from "./Child";

function Parent(){
   const[counter, setCounter] = useState(0);
   const[secoundCount, setSecoundCount] = useState(0)
           console.log("Parent component rendered")
const updateCounter = useCallback(() => {
    setSecoundCount(secoundCount + 1)
},[secoundCount])

   return(<div className="counter">
        <div>
        <h1>useCallback demo</h1>
        <Child updateCounter={updateCounter} secoundCount={secoundCount} />
<h1>{counter}</h1>
<button onClick={()=>{setCounter(counter + 1)}}>Counter</button>
        </div>
    </div>)
}

export default Parent;