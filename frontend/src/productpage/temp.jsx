import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';

export default function BusScreen() {
    const [info, setInfo] = useState([]);
    const [selectSeat, setSelectSeat] = useState([]);
    const [count, setCount] = useState(0);
    const [seatinfo, setSeatInfo] = useState([]);
    const [seatArray, setSeatArray] = useState([]);
    const params = useParams();
    const busId = params.id;
    useEffect(() => {
        const getbus = async () => {
            await axios.get(`http://localhost:3500/home/bus/${busId}`).then(res => {
                const result = res.data;
                setInfo(result);
                // console.log(result);
            })
                .catch((error) => {
                    toast.error("Bus is Not Found!");
                })
        }
        getbus();

        // const seatInfo = async () =>{
        //     const bus = info.busId;
        //     await axios.get(`http://localhost:3500/home/getseatinfo/${bus}`).then(res=>{
        //         const seatData = res.data;
        //         setSeatInfo(seatData);
        //     })
        // }
        // seatInfo();
    }, [busId])
    const seatHandle = (seat) => {
        const seatData = seat;
        const ans = selectSeat.includes(seatData);
        if (ans) {
            setSelectSeat(selectSeat.filter((item) => item !== seatData));
        } else {
            selectSeat.push(seatData);
        }
        setCount(selectSeat.length);
    }
    const handleSeats = async () =>{
        toast.success("Seat Booked Sucessfully");
        seatinfo.push(selectSeat);
    //    const seatData = await axios.post(`http://localhost:3500/home/seatinfo`,{
    //     selectSeat,
    //     busId
    //    })
    //    if(seatData)
       console.log("successfull");
        for(let i=0; i<seatinfo.length;i++)
        {
            console.log(seatinfo[i]);
            break;
        }
        console.log(seatinfo.length);
        console.log(seatArray);
        localStorage.setItem("seatInfo", JSON.stringify(seatinfo));
        const seatData = await axios.post(`http://localhost:3500/home/seatinfo`,{
        seatinfo,
        busId
       })
    }
    return (
        <>
        
            <div className="travelInfo">
                <h3>{info.name}</h3>
                <div className='travelSD'>
                <h6 className="card-title">{info.busId}</h6>
                    <div className='source'><h5>Source:</h5><h6 className='sourceName'>{info.source}</h6></div>
                    <hr className="hrstyle" />
                    <div>
                        <h5>{info.duration}</h5>
                    </div>
                    <hr className="hrstyle" />
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
                        <thead></thead>
                        <tbody>
                            <tr style={{ height: "5rem" }}>
                                <td onClick={() => { seatHandle('A11') }}>
                                    <div className="seat"
                                        style={{ backgroundColor: ((selectSeat.includes('A11'))) ? "tomato" : " " }}></div>
                                </td>
                                <td onClick={() => { seatHandle("A12") }} style={{ width: "5rem" }}>
                                    <div className="seat"
                                        style={{ backgroundColor: ((selectSeat.includes('A12'))) ? "tomato" : " " }}></div>
                                </td>
                                <td onClick={() => { seatHandle("A13") }}>
                                    <div className="seat"
                                        style={{ backgroundColor: ((selectSeat.includes('A13'))) ? "tomato" : " " }}></div>
                                </td>
                                <td onClick={() => { seatHandle("A14") }}>
                                    <div className="seat"
                                        style={{ backgroundColor: ((selectSeat.includes('A14'))) ? "tomato" : " " }}></div>
                                </td>
                            </tr>
                            <tr style={{ height: "5rem" }}>
                                <td onClick={() => { seatHandle('B11') }}>
                                    <div className="seat"
                                        style={{ backgroundColor: ((selectSeat.includes('B11'))) ? "tomato" : " " }}></div>
                                </td>
                                <td onClick={() => { seatHandle("B12") }} style={{ width: "5rem" }}>
                                    <div className="seat"
                                        style={{ backgroundColor: ((selectSeat.includes('B12'))) ? "tomato" : " " }}></div>
                                </td>
                                <td onClick={() => { seatHandle("B13") }}>
                                    <div className="seat"
                                        style={{ backgroundColor: ((selectSeat.includes('B13'))) ? "tomato" : " " }}></div>
                                </td>
                                <td onClick={() => { seatHandle("B14") }}>
                                    <div className="seat"
                                        style={{ backgroundColor: ((selectSeat.includes('B14'))) ? "tomato" : " " }}></div>
                                </td>
                            </tr>
                            <tr style={{ height: "5rem" }}>
                                <td onClick={() => { seatHandle('C11') }}>
                                    <div className="seat"
                                        style={{ backgroundColor: ((selectSeat.includes('C11'))) ? "tomato" : " " }}></div>
                                </td>
                                <td onClick={() => { seatHandle("C12") }} style={{ width: "5rem" }}>
                                    <div className="seat"
                                        style={{ backgroundColor: ((selectSeat.includes('C12'))) ? "tomato" : " " }}></div>
                                </td>
                                <td onClick={() => { seatHandle("C13") }}>
                                    <div className="seat"
                                        style={{ backgroundColor: ((selectSeat.includes('C13'))) ? "tomato" : " " }}></div>
                                </td>
                                <td onClick={() => { seatHandle("C14") }}>
                                    <div className="seat"
                                        style={{ backgroundColor: ((selectSeat.includes('C14'))) ? "tomato" : " " }}></div>
                                </td>
                            </tr>
                            <tr style={{ height: "5rem" }}>
                                <td onClick={() => { seatHandle('D11') }}>
                                    <div className="seat"
                                        style={{ backgroundColor: ((selectSeat.includes('D11'))) ? "tomato" : " " }}></div>
                                </td>
                                <td onClick={() => { seatHandle("D12") }} style={{ width: "5rem" }}>
                                    <div className="seat"
                                        style={{ backgroundColor: ((selectSeat.includes('D12'))) ? "tomato" : " " }}></div>
                                </td>
                                <td onClick={() => { seatHandle("D13") }}>
                                    <div className="seat"
                                        style={{ backgroundColor: ((selectSeat.includes('D13'))) ? "tomato" : " " }}></div>
                                </td>
                                <td onClick={() => { seatHandle("D14") }}>
                                    <div className="seat"
                                        style={{ backgroundColor: ((selectSeat.includes('D14'))) ? "tomato" : " " }}></div>
                                </td>
                            </tr>
                            <tr style={{ height: "5rem" }}>
                                <td onClick={() => { seatHandle('E11') }}>
                                    <div className="seat"
                                        style={{ backgroundColor: ((selectSeat.includes('E11'))) ? "tomato" : " " }}></div>
                                </td>
                                <td onClick={() => { seatHandle("E12") }} style={{ width: "5rem" }}>
                                    <div className="seat"
                                        style={{ backgroundColor: ((selectSeat.includes('E12'))) ? "tomato" : " " }}></div>
                                </td>
                                <td onClick={() => { seatHandle("E13") }}>
                                    <div className="seat"
                                        style={{ backgroundColor: ((selectSeat.includes('E13'))) ? "tomato" : " " }}></div>
                                </td>
                                <td onClick={() => { seatHandle("E14") }}>
                                    <div className="seat"
                                        style={{ backgroundColor: ((selectSeat.includes('E14'))) ? "tomato" : " " }}></div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='inditification'>
                    <table>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td><div className='idinti booked'></div></td>
                                <td>Booked</td>
                            </tr>
                            <tr>
                                <td><div className='idinti available'></div></td>
                                <td>Available</td>
                            </tr>
                        </tbody>
                    </table>
                    <div style={{ margin: "10% 0%" }}>
                        <h6 style={{ margin: "5% 0%" }}>Seats: {selectSeat.length}</h6>
                        <h6 style={{ margin: "5% 0%" }}>Amount: {selectSeat.length * info.fare}</h6>
                        {
                            (selectSeat.length > 0) ?
                                    <Button variant="primary" type="button" onClick={handleSeats} style={{ margin: "5% 0%" }}>Booked</Button>
                                : 
                                    <Button variant="primary" type="button" disabled style={{ margin: "5% 0%" }}>Booked</Button>
                        }
                        <ToastContainer/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
