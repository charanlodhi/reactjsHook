import React, { useContext } from "react";
import { ComponentContext } from "./App";

function Title2(){
    const name = useContext(ComponentContext)
    return(<>
{name}
    </>)
}

export default Title2;