import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from "@emotion/styled";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';
import EventSeatIcon from '@mui/icons-material/EventSeat';

const SeatCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: ${(props) => props.status === "booked" && "red"}
`;

export default function BusScreen() {
    const [info, setInfo] = useState([]);
    const [getSeat, setGetSeat] = useState([]);
    const params = useParams();
    const busId = params.id;
    useEffect(() => {
        const getbus = async () => {
            await axios.get(`http://localhost:3500/home/bus/${busId}`).then(res => {
                const result = res.data;
                setInfo(result);
            }).catch((error) => {
                    toast.error(`Bus is Not Found!`);
                })
        }
        getbus();
    }, [busId])

    const fetchData = async () => {
        await axios.get("http://localhost:3500/home/reserve").then((res) => {
                setGetSeat(res.data);
            })
            .catch((err) => {
                toast.error("Sorry unable to load");
            });
    }

    useEffect(() => {
        fetchData();
        console.log("1");
    }, []);

    const changeColor = (e, item) => {
        if ((item === "booked")) {
            e.target.style.color = "red";
        } else {
            e.target.style.color = "black";
        }
    };

    const handlebooked = async (e, item) => {
        e.preventDefault();
        const data = e.currentTarget.id;
        await axios.post("http://localhost:3500/home/reserve/:id",
                {
                    data,
                }
            ).then((res) => {
                toast.success(res.data.msg);
                changeColor(e, res.data.status);
                setTimeout(()=>{
                    window.location.reload(true);
                },4500)
            })
            .catch((err) => {
                toast.error(err);
            });
    };
    return (
        <>
            <div className="travelInfo">
                <h3>{info.name}</h3>
                <div className='travelSD'>
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
                        <div style={{width:"20vw",display:"flex", flexDirection:"row", marginBottom:"10%",justifyContent:"space-evenly"}}>
                            {
                                getSeat.slice(0,5).map((item, index) => {
                                    return (
                                        <SeatCont key={index + 1} status={item.status} id={index + 1} onClick={(e) => handlebooked(e)}>
                                            <EventSeatIcon style={{height:"40px",width:"35px"}}/>
                                        </SeatCont>
                                    )
                                })
                            }
                        </div>
                        <div style={{width:"20vw",display:"flex", flexDirection:"row", marginBottom:"10%", justifyContent:"space-evenly"}}>
                            {
                                getSeat.slice(5,10).map((item, index) => {
                                    return (
                                        <SeatCont key={index + 6} status={item.status} id={index + 6} onClick={handlebooked}>
                                            <EventSeatIcon style={{height:"40px",width:"35px"}}/>
                                        </SeatCont>
                                    )
                                })
                            }
                        </div>
                        <div style={{width:"20vw",display:"flex", flexDirection:"row", marginBottom:"10%", justifyContent:"space-evenly"}}>
                            {
                                getSeat.slice(10,15).map((item, index) => {
                                    return (
                                        <SeatCont key={index + 11} status={item.status} id={index + 11} onClick={handlebooked}>
                                            <EventSeatIcon style={{height:"40px",width:"35px"}}/>
                                        </SeatCont>
                                    )
                                })
                            }
                        </div>
                        <div style={{width:"20vw",display:"flex", flexDirection:"row", marginBottom:"10%", justifyContent:"space-evenly"}}>
                            {
                                getSeat.slice(15,20).map((item, index) => {
                                    return (
                                        <SeatCont key={16 + index} status={item.status} id={index + 16} onClick={handlebooked}>
                                            <EventSeatIcon style={{height:"40px",width:"35px"}}/>
                                        </SeatCont>
                                    )
                                })
                            }
                        </div>
                        <div style={{width:"20vw",display:"flex", flexDirection:"row", marginBottom:"10%", justifyContent:"space-evenly"}}>
                            {
                                getSeat.slice(20,25).map((item, index) => {
                                    return (
                                        <SeatCont key={21 + index} status={item.status} id={index + 21} onClick={handlebooked}>
                                            <EventSeatIcon style={{height:"40px",width:"35px"}}/>
                                        </SeatCont>
                                    )
                                })
                            }
                        </div>
                        <div style={{width:"20vw",display:"flex", flexDirection:"row", marginBottom:"10%", justifyContent:"space-evenly"}}>
                            {
                                getSeat.slice(25,30).map((item, index) => {
                                    return (
                                        <SeatCont key={26 + index} status={item.status} id={index + 26} onClick={handlebooked}>
                                            <EventSeatIcon style={{height:"40px",width:"35px"}}/>
                                        </SeatCont>
                                    )
                                })
                            }
                        </div>
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
                </div>
            </div>
            <ToastContainer/>
            <Footer />
        </>
    )
}
