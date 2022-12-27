import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from './Footer';
import Navigation from './Navigation';
import Nav from 'react-bootstrap/Nav';
import { useNavigate, useParams } from 'react-router-dom';
import UserBookInfo from './UserBookInfo';

export default function UserDetails() {
  const [ name, setName ] = useState([]);
  const [ age, setAge ] = useState([]);
  const [ gender, setGender] = useState([]);
  const [ email, setEmail ] = useState();
  const [ number, setNumber ] = useState();
  const [ data, setData ] = useState([])
  const result = localStorage.getItem("seatInfo");
  const ans = JSON.parse(result);
  console.log(result);
  console.log(result.length);
  console.log(ans);
  console.log(ans.length);
  console.log(gender);
  console.log(data);
  return (
    <>
      <Navigation />
      <div style={{ width: "60vw", height: "auto", margin: "auto auto 5vh auto" }}>
        <Form style={{ border: "1px solid black", padding: "5% 10% 10% 10%", marginTop: "5%" }}>
          <h3 style={{ marginBottom: "5%" }}>Passenger Information</h3>
          {
            ans.map((i)=>{             
              return(
                <UserBookInfo key={i} />
              )})
          }
            <h5 style={{ marginTop: "1vh" }}>Contact Details</h5>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email Id</Form.Label>
              <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
              <Form.Label>Cell No</Form.Label>
              <Form.Control type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
            </Form.Group>
            <div style={{display:"flex", marginTop:"5%", justifyContent:"space-evenly"}}>
            <h6>Total Amount: 1500</h6>
            <Nav.Link href="/userdetails">
                <Button variant="primary" type="button">Processed to Pay</Button>
            </Nav.Link>
            
            </div>
          
        </Form>
      </div>
      <Footer />
    </>
  )
}
