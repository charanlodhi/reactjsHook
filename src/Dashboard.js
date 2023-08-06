import React from "react";
import Hoc from './Hoc'
function Dashboard(props){
    return(
        <>
            <h1>Dashboard</h1>
            <h3>Welcome {props.name}</h3>
        </>
    )
}

export default Hoc(Dashboard);