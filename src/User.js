import { useEffect, useState } from "react";

function User(prop){
   const [user, setUser] = useState([]);
   const url = "https://jsonplaceholder.typicode.com/users";
 useEffect(() =>{
    fetch(url)
    .then((response) => response.json())
    .then((data) => setUser(data))
    console.log(user)
 },[])
    return(
        <div className="wrapper">
        {/* {prop.data} */}
            {
                user.map((item, id) =>{
                    return(
                        <div className="card" key={id}>
                            <div>{item.name}</div>
                            <div>{item.username}</div>
                            <div>{item.email}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default User;