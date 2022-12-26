import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from './Footer';
import Navigation from './Navigation';
import { useNavigate } from 'react-router-dom';
import { data } from 'jquery';

export default function UserDetails() {
  return (
    <>
      <Navigation />
      <div style={{ width: "60vw", height: "auto", margin: "auto auto 5vh auto" }}>
        <Form style={{ border: "1px solid black", padding: "5% 10% 10% 10%", marginTop: "5%" }}>
          <h3 style={{ marginBottom: "5%" }}>Passenger Information</h3>
          <div className="custName" style={{ display: "flex" }}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" style={{ width: "20vw" }} />
              <Form.Text className="text-muted">
                Enter you Name
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" style={{ marginLeft: "3%" }} controlId="formBasicAge">
              <Form.Label>Age</Form.Label>
              <Form.Control type="number" />
              <Form.Text className="text-muted">
                Eneter Your age
              </Form.Text>
            </Form.Group>
            <div className="gender" style={{ display: "flex", margin: "5%" }}>
              <Form.Check type="radio" aria-label="radio 1" name="gender" />
              <Form.Label style={{ margin: "0% 2%" }}>Male</Form.Label>
              <Form.Check style={{ margin: "0% 0% 0% 5%" }} type="radio" aria-label="radio 1" name="gender" />
              <Form.Label style={{ margin: "0% 2%" }}>Female</Form.Label>
            </div>
          </div>
            <h5 style={{ marginTop: "1vh" }}>Contact Details</h5>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email Id</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
              <Form.Label>Cell No</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
            <div style={{display:"flex", marginTop:"5%", justifyContent:"space-evenly"}}>
            <h6>Total Amount: 1500</h6>
            <Button variant="primary" type="button">Processed to Pay</Button>
            </div>
          
        </Form>
      </div>
      <Footer />
    </>
  )
}
