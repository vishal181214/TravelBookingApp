import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';

export default function UserBookInfo(props) {
    const [ name, setName ] = useState([]);
    const [ age, setAge ] = useState([]);
    const [ gender, setGender] = useState([]);
    const [ arr, setArr] = useState([]);
    let data = {
        name: name,
        age: age,
        gender: gender
    }
    console.log(data);
    console.log(props.index);
    // console.log(gender);
  return (
    <div>
        <div className="custName" style={{ display: "flex" }}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" style={{ width: "20vw" }} value={name} onChange={(e)=>setName(e.target.value)}/>
                  <Form.Text className="text-muted">
                    Enter you Name
                  </Form.Text>
                </Form.Group>
    
                <Form.Group className="mb-3" style={{ marginLeft: "3%" }} controlId="formBasicAge">
                  <Form.Label>Age</Form.Label>
                  <Form.Control type="number" value={age}  onChange={(e)=>setAge(e.target.value)}/>
                  <Form.Text className="text-muted">
                    Enter Your age
                  </Form.Text>
                </Form.Group>

                <div className="gender" style={{ display: "flex", margin: "5%" }}>
                  <Form.Check type="radio" aria-label="radio 1" checked={gender === 'Male'} name="gender" value={'male'} onChange={(e)=> setGender(e.target.value)}></Form.Check>
                  <Form.Label style={{ margin: "0% 2%" }} >Male</Form.Label>
                  <Form.Check type="radio" style={{ margin: "0% 0% 0% 5%" }}  value={'female'} checked={gender === 'Female'} onChange={(e)=> setGender(e.target.value)} aria-label="radio 1" name="gender" />
                  <Form.Label style={{ margin: "0% 2%" }}>Female</Form.Label>
                </div>
              </div>
    </div>
  )
}
