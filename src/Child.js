import React, { memo } from "react";
function Child({updateCounter, secoundCount}){
    console.log("child compoent render")
    return(
        <>
        {secoundCount}
        <h1>Child</h1>
        <button onClick={updateCounter}>Child Counter</button>
        </>
    )
}



export default memo(Child);