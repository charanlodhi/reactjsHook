import React, { useMemo, useState } from "react";
function Login() {
  const [username, setUsename] = useState("");
  const [password, setPassword] = useState("");
  const userHandleChange = (e) => {
    setUsename(e.target.value);
  };

  const passHandleChange = (e) => {
    setPassword(e.target.value);
  };

  const errorMessage = useMemo(() => {
   console.log("error message")
    return username.length > 10;
  },[username]);
  
  return (
    <div className="login">
      <input
        type="text"
        placeholder="Username"
        onChange={userHandleChange}
        value={username}
      />
      <input
        type="password"
        placeholder="password"
        onChange={passHandleChange}
        value={password}
      />
      <button>Login</button>
      {errorMessage ? "Error" : "ok"}
      <div>{username}</div>
    </div>
  );
}

export default Login;
