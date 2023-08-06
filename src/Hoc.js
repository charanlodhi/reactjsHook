import React from "react";
import Login from "./Login";
function Hoc(WrapComponent){
    return function(props){
const isLogin = true;
return isLogin ? <WrapComponent {...props} /> : <Login />
    }
}
export default Hoc;