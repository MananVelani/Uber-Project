import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'
import {CaptainDataContext} from '../context/CaptainContext'
import { useEffect,useContext } from 'react'
import {SocketContext} from "../context/SocketContext"
import axios from 'axios'
import LiveTracking from '../components/LiveTracking'


const CaptainHome = () => {

  const [ridePopupPanel, setRidePopupPanel] = useState(false);
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);

  const ridePopupPanelRef = useRef(null);
  const confirmRidePopupPanelRef = useRef(null);
  const [ride, setRide] = useState(null);
  const [mapOpen, setMapOpen] = useState(true)


  const {socket } = useContext(SocketContext);
  const {captain} = useContext(CaptainDataContext);

  useEffect(() => {
    socket.emit("join",{
      userId: captain._id,
      userType:"captain"
    })

const updateLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {

// console.log({
//   userId : captain._id, 
//   location : {
//       ltd: position.coords.latitude,    
//       lng: position.coords.longitude
//     }
// });

      socket.emit('update-location-captain', {
        userId: captain._id,
        location:{
          ltd: position.coords.latitude,
          lng: position.coords.longitude
        }
      });
    });
  }
}

   const locationInterval = setInterval(updateLocation, 10000);
   updateLocation(); // Initial call to set the location immediately
   //return () => clearInterval(locationInterval);

  },[]);

  socket.on("new-ride", (data) => {
    console.log("New ride request received:", data);
    setRide(data);
    setRidePopupPanel(true);
    setMapOpen(false);
  });

  async function confirmRide() {
    
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/confirm-ride`, {
      rideId: ride._id,
      captainId: captain._id,    
    },{
            headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    });

    setConfirmRidePopupPanel(true);
    setRidePopupPanel(false);
  }

  useGSAP(function(){
    if(ridePopupPanel){
        gsap.to(ridePopupPanelRef.current,{
          transform:'translateY(0)'
        })
    } else {
      gsap.to(ridePopupPanelRef.current,{
         transform:'translateY(100%)'
      })
    }
  },[ridePopupPanel])

  useGSAP(function(){
    if(confirmRidePopupPanel){
        gsap.to(confirmRidePopupPanelRef.current,{
          transform:'translateY(0)'
        })
    } else {
        gsap.to(confirmRidePopupPanelRef.current,{
         transform:'translateY(100%)'
      })
    }
  },[confirmRidePopupPanel])

  return (
    <div className='h-screen'>
        <div>
          <img className='w-16 left-5 top-5 absolute' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
          <Link to='/captain-home' className='h-10 w-10 fixed right-2 top-2 bg-white rounded-full flex items-center justify-center'>
            <i className="ri-logout-box-r-line text-lg font-bold"></i>
        </Link>
        </div>
        <div className='h-3/5'>
            {mapOpen && <LiveTracking/>}
        </div>
        <div className='h-1/2 p-4 '>
            <CaptainDetails/>       
        </div>

        <div ref={ridePopupPanelRef} className='fixed z-10 bottom-0 translate-y-full bg-white w-full px-3 py-2 pb-10  '>
            <RidePopUp confirmRide={confirmRide} ride={ride} setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel}/>
        </div> 

        <div ref={confirmRidePopupPanelRef} className='fixed z-10 bottom-0 translate-y-full bg-white h-sc w-full px-3 py-2 pb-10  '>
            <ConfirmRidePopUp
            ride={ride}
            setRidePopupPanel={setRidePopupPanel} setMapOpen={setMapOpen} setConfirmRidePopupPanel={setConfirmRidePopupPanel}/>
        </div> 

    </div>
  )
}

export default CaptainHome