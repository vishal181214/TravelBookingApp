import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import BookedScreen from "./components/BookedScreen";
import Error from "./components/Error";
import Lowerbus from "./productpage/Lowerbus";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import UserDetails from "./components/UserDetails";
import AdminScreen from "./components/AdminScreen";
function App() {
  const [res, setResult] = useState();

  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem('user'));
    // (data !== null) ? setResult(data.data.isAdmin) : setResult(false);
    if(data !== null)
    {
      setResult(data.data.isAdmin);
    }
  },[]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/BookedScreen/:id' element={<BookedScreen/>}/>
        <Route path='/Lowerbus' element={<Lowerbus/>}/>
        <Route path='/LogIn' element={<LogIn/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/*' element={<Error/>}/>
        <Route path='/userdetails/:info' element={<UserDetails/>}/>
        {
          (res) ? <Route path='/admin' element={<AdminScreen/>}/> :
          <Route path='/' element={<Home/>} />
        }
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
