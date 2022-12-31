import React, { useEffect, useState } from 'react'
import Navigation from './Navigation';
import axios from 'axios';
import styled from "@emotion/styled";
import EventSeatIcon from '@mui/icons-material/EventSeat';
import Footer from './Footer';
import { ToastContainer, toast } from 'react-toastify';


const SeatCont = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: ${(props) => props.status === "booked" && "red"}
`;

export default function AdminScreen() {
  const [getSeat, setGetSeat] = useState([]);
  
  const fetchData = async () => {
    await axios.get("https://red-clean-cobra.cyclic.app/home/reserve").then((res) => {
            setGetSeat(res.data);
        })
        .catch((err) => {
            toast.error("Sorry unable to load");
        });
}

useEffect(() => {
    fetchData();
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
    console.log(data);
    await axios.post("https://red-clean-cobra.cyclic.app/home/admin/reserve/:id",
            {
                data,
            }
        ).then((res) => {
            toast.success(res.data.msg);
            changeColor(e, res.data.status);
            window.location.reload(true)
        })
        .catch((err) => {
            window.alert(`${err}`);
            toast.error(err);
        });
};
  return (
    <div>
      <Navigation />
      <h1 style={{ textAlign: "center", margin: "3%" }}>Booking Details</h1>
      <div className='busseat'>
                <div className="lowerseats">
                        <div style={{width:"20vw",display:"flex", flexDirection:"row", marginBottom:"10%", marginTop:"10%",justifyContent:"space-evenly"}}>
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
          <Footer/>
    </div>
  )
}
