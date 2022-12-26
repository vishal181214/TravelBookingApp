import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import AirlineSeatFlatOutlinedIcon from '@mui/icons-material/AirlineSeatFlatOutlined';
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import ElectricalServicesOutlinedIcon from '@mui/icons-material/ElectricalServicesOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';

export default function Cards() {
    const [info, setInfo] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:3500/home`).then(res => {
            const data = res.data;
            setInfo(data);
        })
            .catch((error) => console.log(error));
    }, [])

    return (
        info.map((item,index) => {
            return (
                <div className='card' key={index}>
                    <div className="cardLeft">
                        <img src={"https://www.abinayatravels.com/assets/images/about-image.png"} alt='background' /><br />
                    </div>
                    <div className="cardRight">
                        <h2 className="card-title">{item.name}</h2>
                        <div className='location'>
                            <p className="descrispantion"><b>Source: {item.source}</b></p>
                            <p className="description"><b>Destination: {item.destination}</b></p>
                        </div>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Departure</th>
                                    <th>Duration</th>
                                    <th>Arrival</th>
                                    <th>Ratings</th>
                                    <th>Fare</th>
                                    <th>SeatsAvailable</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>{item.departure}</th>
                                    <th>{item.duration}</th>
                                    <th>{item.arrival}</th>
                                    <th>{item.rating}</th>
                                    <th>{item.fare}</th>
                                    <th>{item.seatAvailable}</th>
                                </tr>
                            </tbody>
                        </Table>
                        <div className='facilities'>
                            <div className="service">
                                <h2><AirlineSeatFlatOutlinedIcon /></h2>
                                <h2><WifiOutlinedIcon /></h2>
                                <h2><ElectricalServicesOutlinedIcon /></h2>
                                <h2><LocationOnOutlinedIcon /></h2>
                            </div>
                            <p>{item.busId}</p>
                            <Stack direction="row" spacing={5} style={{marginRight:"10%", marginTop:"5%"}}>
                            <Link to={`/BookedScreen/${item._id}`} style={{textDecoration:"none"}}>
                                <Button variant="contained" color="success">Booked Now</Button>
                            </Link>
                            </Stack>
                        </div>
                        
                    </div>
                </div>
            )
        })
    )
}

