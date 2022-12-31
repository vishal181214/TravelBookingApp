import React from 'react'
import Navigation from './Navigation'
import axios from 'axios';
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const collectData = async ()=> {
    try {
      const data = await axios.post('https://red-clean-cobra.cyclic.app/home/users/login',{
        email,
        password,
      });
      if(data){
        localStorage.setItem("user", JSON.stringify(data));
        console.log(JSON.stringify(data));
        console.log(data.data.isAdmin);
        (data.data.isAdmin) ? navigate('/admin') : navigate('/BookedScreen/63a6a6f3d0435bdb01b27f84');
      }
      
    } catch (error) {
      toast.error("Invalid email or password");
    }
  }
  return (
    <>
    <Navigation/>
      <div style={{ width: "40vw", height: "75vh", margin: "auto"}}>
        <Form style={{border:"1px solid black", padding:"5% 10% 10% 10%", marginTop:"5%"}}>
        <h3 style={{marginBottom:"5%"}}>Log In</h3>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <Form.Text className="text-muted">
              Email id should contain @
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </Form.Group>

          <Button variant="success" onClick={collectData} type="button">Log In</Button>
          <Link to='/SignUp' style={{marginLeft:"5%",textDecoration:"none"}}><b>New User?</b> create account.</Link>
        </Form>
      </div>
      <ToastContainer/>
      <Footer/>
    </>
  )
}
