import React, { useState } from "react";
import axios from 'axios';
function StorePost(){
const [form, setForm] = useState({
    name:"",
    email:"",
    mobile:""
});
    const handleChange = (e) =>{
      setForm({...form, [e.target.name] : e.target.value})
   // console.log(form)
}
const handlleSubmit = (e) =>{
      e.preventDefault();
    axios.post('https://jsonplaceholder.typicode.com/posts', form)
    .then((response) =>{
        console.log(response)
    })
    .catch((error) =>{
        console.log(error)
    })
}
 return(
    <>
<form onSubmit={handlleSubmit}>
<h1>Form Submit using Post request</h1>
    <div className="userinfo">
        <div className="formField">
            <label>Name</label>
            <input name="name" type="text" onChange={handleChange} />
        </div>
        <div className="formField">
            <label>Email</label>
            <input name="email" type="text" onChange={handleChange} />
        </div>
        <div className="formField">
            <label>Mobile</label>
            <input name="mobile" type="text" onChange={handleChange} />
        </div>
        <button>Submit</button>
    </div>
</form>
    </>
 )
}

export default StorePost;