
import React from 'react';
import './App.css';
import Title from './Title';
import Title2 from './Title2';
import User from './User';
import Login from './Login';
import Parent from './Parent';
import Dashboard from './Dashboard';
import Signin from './Signin';
import StorePost from './StorePost';
export const ComponentContext = React.createContext()
function App() {
  return (
    <div className="App">
    <StorePost />
     <ComponentContext.Provider value={<User data={'data'} />}>
       
        <Title2 />
        <Title />
             </ComponentContext.Provider>
             <h1>Use of useMemo Hooks</h1>
             <Login />
             <Parent />
<Dashboard name="Charan"/> 

    </div>
  );
}

export default App;
