import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button } from 'react-bootstrap';

export default function Bus() {
    const [info, setInfo] = useState([]);
    const [selectSeat,setSelectSeat] = useState([]);
    const params = useParams();
    const busId = params.id;
    useEffect(() => {
        const getbus = async () => {
            await axios.get(`https://red-clean-cobra.cyclic.app/home/bus/${busId}`).then(res => {
                const result = res.data;
                setInfo(result);
            })
                .catch((error) => {
                    toast.error("Bus is Not Found!");
                })
        }
        getbus();
    }, [busId])

    
    const seatHandle = (seat) =>{
        const seatData = `${info.busId}`+seat;
        const ans =selectSeat.includes(seatData);
        if(ans){
            // console.log("data is Available");
            setSelectSeat(selectSeat.filter((item) => item !== seatData));
        }else{
            // console.log("data is not Available");
            selectSeat.push(seatData);
        }
        console.log(selectSeat);
    }
    localStorage.setItem("seatInfo", JSON.stringify(selectSeat));
    console.log(selectSeat.length);
    const count = selectSeat.length;
    const total = (count * info.fare);
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
                            <td onClick={()=>{seatHandle('A11')}}>
                                <div className="seat"  
                                    style={{backgroundColor: ((selectSeat.includes(`${info.busId}`+'A11'))) ? "pink": " "}}>
                                </div>
                            </td>
                            <td onClick={()=>{seatHandle("A12")}} style={{ width: "5rem" }}>
                                <div className="seat" 
                                    style={{backgroundColor: ((selectSeat.includes(`${info.busId}`+'A12'))) ? "pink": " "}}>
                                </div>
                            </td>
                            <td onClick={()=>{seatHandle("A13")}}>
                                <div className="seat" 
                                    style={{backgroundColor: ((selectSeat.includes(`${info.busId}`+'A13'))) ? "pink": " "}}>
                                </div>
                            </td>
                            <td onClick={()=>{seatHandle("A14")}}>
                                <div className="seat" 
                                    style={{backgroundColor: ((selectSeat.includes(`${info.busId}`+'A14'))) ? "pink": " "}}>
                                </div>
                            </td>
                        </tr>
                        {/* <tr style={{ height: "5rem" }}>
                        <td onClick={()=>{seatHandle('B11')}}>
                                <div className="seat" 
                                    style={{backgroundColor: ((selectSeat.includes(`${info.busId}`+'B11'))) ? "pink": " "}}>
                                </div>
                            </td>
                            <td onClick={()=>{seatHandle("B12")}} style={{ width: "5rem" }}>
                                <div className="seat" 
                                    style={{backgroundColor: ((selectSeat.includes(`${info.busId}`+'B12'))) ? "pink": " "}}>
                                </div>
                            </td>
                            <td onClick={()=>{seatHandle("B13")}}>
                                <div className="seat" 
                                    style={{backgroundColor: ((selectSeat.includes(`${info.busId}`+'B13'))) ? "pink": " "}}>
                                </div>
                            </td>
                            <td onClick={()=>{seatHandle("B14")}}>
                                <div className="seat" 
                                    style={{backgroundColor: ((selectSeat.includes(`${info.busId}`+'B14'))) ? "pink": " "}}>
                                </div>
                            </td>
                        </tr>
                        <tr style={{ height: "5rem" }}>
                        <td onClick={()=>{seatHandle('C11')}}>
                                <div className="seat" 
                                    style={{backgroundColor: ((selectSeat.includes(`${info.busId}`+'C11'))) ? "pink": " "}}>
                                </div>
                            </td>
                            <td onClick={()=>{seatHandle("C12")}} style={{ width: "5rem" }}>
                                <div className="seat" 
                                    style={{backgroundColor: ((selectSeat.includes(`${info.busId}`+'C12'))) ? "pink": " "}}>
                                </div>
                            </td>
                            <td onClick={()=>{seatHandle("C13")}}>
                                <div className="seat" 
                                    style={{backgroundColor: ((selectSeat.includes(`${info.busId}`+'C13'))) ? "pink": " "}}>
                                </div>
                            </td>
                            <td onClick={()=>{seatHandle("C14")}}>
                                <div className="seat" 
                                    style={{backgroundColor: ((selectSeat.includes(`${info.busId}`+'C14'))) ? "pink": " "}}>
                                </div>
                            </td>
                        </tr>
                        <tr style={{ height: "5rem" }}>
                        <td onClick={()=>{seatHandle('D11')}}>
                                <div className="seat" 
                                    style={{backgroundColor: ((selectSeat.includes(`${info.busId}`+'D11'))) ? "pink": " "}}>
                                </div>
                            </td>
                            <td onClick={()=>{seatHandle("D12")}} style={{ width: "5rem" }}>
                                <div className="seat" 
                                    style={{backgroundColor: ((selectSeat.includes(`${info.busId}`+'D12'))) ? "pink": " "}}>
                                </div>
                            </td>
                            <td onClick={()=>{seatHandle("D13")}}>
                                <div className="seat" 
                                    style={{backgroundColor: ((selectSeat.includes(`${info.busId}`+'D13'))) ? "pink": " "}}>
                                </div>
                            </td>
                            <td onClick={()=>{seatHandle("D14")}}>
                                <div className="seat" 
                                    style={{backgroundColor: ((selectSeat.includes(`${info.busId}`+'D14'))) ? "pink": " "}}>
                                </div>
                            </td>
                        </tr>
                        <tr style={{ height: "5rem" }}>
                        <td onClick={()=>{seatHandle('E11')}}>
                                <div className="seat" 
                                    style={{backgroundColor: ((selectSeat.includes(`${info.busId}`+'E11'))) ? "pink": " "}}>
                                </div>
                            </td>
                            <td onClick={()=>{seatHandle("E12")}} style={{ width: "5rem" }}>
                                <div className="seat" 
                                    style={{backgroundColor: ((selectSeat.includes(`${info.busId}`+'E12'))) ? "pink": " "}}>
                                </div>
                            </td>
                            <td onClick={()=>{seatHandle("E13")}}>
                                <div className="seat" 
                                    style={{backgroundColor: ((selectSeat.includes(`${info.busId}`+'E13'))) ? "pink": " "}}>
                                </div>
                            </td>
                            <td onClick={()=>{seatHandle("E14")}}>
                                <div className="seat" 
                                    style={{backgroundColor: ((selectSeat.includes(`${info.busId}`+'E14'))) ? "pink": " "}}>
                                </div>
                            </td>
                        </tr> */}
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
                    <div>
                        <h6>Seats: {count}</h6>
                        <h6>Amount: {total}</h6>
                        {/* selectSeat */}
                        {
                            (count > 0) ?
                                <Link to={`/userdetails/${selectSeat}`}> 
                                    <Button variant="primary" type="button">Processed to Pay</Button>
                                </Link>   
                                : <Link href="#">
                                    <Button variant="primary" type="button" disabled>Processed to Pay</Button>
                                </Link>}                                          
                    </div>
                </div>
            </div>
        </>
    )
}
