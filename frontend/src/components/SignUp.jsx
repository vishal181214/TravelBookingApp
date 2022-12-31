import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from './Footer';
import Navigation from './Navigation';
import { useNavigate } from 'react-router-dom';
import { data } from 'jquery';
export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth)
            navigate('/')
    })

  const collectData = async ()=> {
    console.warn(name,email,password);
    try {
      const data = await axios.post('https://red-clean-cobra.cyclic.app/home/users/signup',{
        name,
        email,
        password,
      });
      console.log(data);
      localStorage.setItem("user", JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
    if(data)
    {
      navigate('/BookedScreen/63a6a6f3d0435bdb01b27f84');
    }
  }
  return (
    <>
    <Navigation/>
      <div style={{ width: "40vw", height: "75vh", margin: "auto"}}>
        <Form style={{border:"1px solid black", padding:"5% 10% 10% 10%", marginTop:"5%"}}>
        <h3 style={{marginBottom:"5%"}}>Register</h3>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <Form.Text className="text-muted">
              Enter you Name
            </Form.Text>
          </Form.Group>

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

          <Button variant="primary" onClick={collectData} type="button">SignUp</Button>
        </Form>
      </div>
      <Footer/>
    </>
  )
}
