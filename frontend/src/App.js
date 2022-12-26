import "./App.css";
import React from "react";
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
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/BookedScreen/:id' element={<BookedScreen/>}/>
        <Route path='/Lowerbus' element={<Lowerbus/>}/>
        <Route path='/LogIn' element={<LogIn/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/*' element={<Error/>}/>
        <Route path='/userdetails' element={<UserDetails/>}/>
        <Route path='/admin' element={<AdminScreen/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
