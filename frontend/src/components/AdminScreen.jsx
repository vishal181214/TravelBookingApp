import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Navigation from './Navigation';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function AdminScreen() {
  const [info, setInfo] = useState([]);
  const [details,setDetails] = useState();
  useEffect(() => {
    axios.get(`http://localhost:3500/home/getbookingdetails`).then(res => {
      const data = res.data;
      setInfo(data);
    })
      .catch((error) => console.log(error));
  }, [])

  const handleBookinStatus = (mail,booked) =>{
    axios.put(`http://localhost:3500/home/getbookingdetails`,{
      mail,
      booked
    }).then(res => {
      const num = res.data;
      setDetails(num);
    })
      .catch((error) => console.log(error));
  }
  return (
    <div>
      <Navigation />
      <h1 style={{ textAlign: "center", margin: "3%" }}>Booking Details</h1>
      <Table style={{ width: "80vw", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
        <thead>
          <tr>
            <th>Sr.NO</th>
            <th>Booking Id</th>
            <th>Passenger Name</th>
            <th>Email</th>
            <th>Mob. no</th>
            <th>Source</th>
            <th>Destination</th>
            <th>Seat Number</th>
            <th>Bus Id</th>
            <th>Bus Agency Name</th>
            <th>Fare</th>
            <th>Seat Status</th>
            <th>Booking Status</th>
          </tr>
        </thead>
        <tbody>
          {
            info.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item._id}</td>
                  <td>{item.userDetails}</td>
                  <td>{item.email}</td>
                  <td>{item.number}</td>
                  <td>{item.source}</td>
                  <td>{item.destination}</td>
                  <td>{item.seatNo}</td>
                  <td>{item.busId}</td>
                  <td>{item.compname}</td>
                  <td>{item.fare}</td>
                  <td><Button variant="secondary" onClick={handleBookinStatus(item.email,item.isBooked)}>Confirm</Button>{' '}</td>
                  <td>{(item.isBooked)? <Button variant="success">Booked</Button> : <p>Pending</p>}</td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  )
}
