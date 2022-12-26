import React, { useEffect, useState } from 'react'
import Seat from './Seat'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
export default function Bus() {
    const [info, setInfo] = useState([]);
    const params = useParams();
    const busId = params.id;
    useEffect(() => {
        const getbus = async () => {
            await axios.get(`http://localhost:3500/home/bus/${busId}`).then(res => {
                const result = res.data;
                setInfo(result);
            })
                .catch((error) => {
                    toast.error("Bus is Not Found!");
                })
        }
        getbus();
    }, [busId])
    // console.log(busId);
    // console.log(info.name);
    return (
        <>
            <div className="travelInfo">
                <h3>{info.name}</h3>
                <div className='travelSD'>
                    <div className='source'><h5>Source:</h5><h6 className='sourceName'>{info.source}</h6></div>
                    <hr  className="hrstyle"/>
                    <div>
                        <h5>{info.duration}</h5>     
                    </div>
                    <hr className="hrstyle"/>
                    <div className="desti"><h5>Destination:</h5><h6 className='destName'>{info.destination}</h6></div>
                </div>
                <div className="otherinfo">
                    <div><b>Departure: </b>{info.departure}</div>
                    <div><b>Arrival: </b>{info.barrival}</div>
                    <div><b>Rating: </b>{info.rating}</div>
                    <div><b>Seat Type: </b>{info.bustype}</div>
                    <div><b>Fare: </b>INR {info.fare}</div>
                </div>

            </div>
            <div className='busseat'>
                <div className="lowerseats">
                    <table className='busTable'>
                        <tr style={{ height: "5rem" }}>
                            <td><Seat /></td>
                            <td style={{ width: "5rem" }}><Seat /></td>
                            <td><Seat /></td>
                            <td><Seat /></td>
                        </tr>
                        <tr style={{ height: "5rem" }}>
                            <td><Seat /></td>
                            <td><Seat /></td>
                            <td><Seat /></td>
                            <td><Seat /></td>
                        </tr>
                        <tr style={{ height: "5rem" }}>
                            <td><Seat /></td>
                            <td><Seat /></td>
                            <td><Seat /></td>
                            <td><Seat /></td>
                        </tr>
                        <tr style={{ height: "5rem" }}>
                            <td><Seat /></td>
                            <td><Seat /></td>
                            <td><Seat /></td>
                            <td><Seat /></td>
                        </tr>
                        <tr style={{ height: "5rem" }}>
                            <td><Seat /></td>
                            <td><Seat /></td>
                            <td><Seat /></td>
                            <td><Seat /></td>
                        </tr>
                    </table>
                </div>
                <div className='inditification'>
                    <table>
                        <tr>
                            <td><div className='idinti booked'></div></td>
                            <td>Booked</td>
                        </tr>
                        <tr>
                            <td><div className='idinti available'></div></td>
                            <td>Available</td>
                        </tr>
                        <tr>
                            <td><div className='idinti'></div></td>
                            <td>Not Defined</td>
                        </tr>
                    </table>

                </div>
            </div>
        </>
    )
}
