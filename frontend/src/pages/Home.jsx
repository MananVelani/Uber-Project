import React, { useContext, useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfimRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';
import { useEffect } from 'react';
import axios from 'axios';
import { SocketContext } from '../context/SocketContext';
import {UserDataContext} from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import LiveTracking from '../components/LiveTracking';

const Home = () => {

  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false)
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const lookForDriverPanelRef = useRef(null);
  const waitForDriverPanelRef = useRef(null);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [lookForDriverPanel, setLookForDriverPanel] = useState(false)
  const [waitForDriverPanel, setWaitForDriverPanel] = useState(false)
  const [activeField, setActiveField] = useState(null)
  const [fare, setFare] = useState({})
  const [vehicleType, setVehicleType] = useState('')
  const token = localStorage.getItem('token');
  const [ride, setRide] = useState(null);
  const navigate = useNavigate();
  const [mapOpen, setMapOpen] = useState(true)

  const { socket } = useContext(SocketContext);
  const {user} = useContext(UserDataContext);

  useEffect(() => {
    socket.emit("join",{userType:'user',userId: user._id})
  },[user])

  socket.on("ride-confirmed", (data) => {
    //setVehiclePanel(false);
    setLookForDriverPanel(false);
    //setConfirmRidePanel(false);
    setWaitForDriverPanel(true);
    setRide(data);
  });

  socket.on("ride-started",(data)=>{
      setWaitForDriverPanel(false);
      navigate('/riding',{state:{ride}})
  })



  const submitHandler = (e)=>{
    e.preventDefault();
    console.log(e);
  }

  useGSAP(function(){
      if(panelOpen ){
        gsap.to(panelRef.current,{
          height:'70%',
          padding:24
        })
        gsap.to(panelCloseRef.current,{
          opacity:1
        })
      } else {
        gsap.to(panelRef.current,{
          height:'0%',
          padding:0
          
        })
        gsap.to(panelCloseRef.current,{
          opacity:0
        })
      }
  },[panelOpen ])

  useGSAP(function(){
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(0)'
      })
    } else {
      gsap.to(vehiclePanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[vehiclePanel])


  useGSAP(function(){
    if(confirmRidePanel){
      gsap.to(confirmRidePanelRef.current,{
        transform:'translateY(0)'
      })
    } else {
      gsap.to(confirmRidePanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[confirmRidePanel])

  useGSAP(function(){
    if(lookForDriverPanel){
      gsap.to(lookForDriverPanelRef.current,{
        transform:'translateY(0)'
      })
    } else {
      gsap.to(lookForDriverPanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[lookForDriverPanel])

   useGSAP(function(){
    if(waitForDriverPanel){
      gsap.to(waitForDriverPanelRef.current,{
        transform:'translateY(0)'
      })
    } else {
      gsap.to(waitForDriverPanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[waitForDriverPanel])


  const [locations, setLocations] = useState([])

   useEffect( () => {
    async function getSuggestions(){
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions?input=${encodeURIComponent(pickup)}`,
        {
        headers: {
          Authorization: `Bearer ${token}`
        }
        }
      )
        if(response.status === 200 || response.status === 201){
          setLocations(response.data);
        }
    }
    if (pickup) getSuggestions();
    
  }, [pickup]);

   useEffect( () => {
    async function getSuggestions(){

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions?input=${encodeURIComponent(destination)}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      )
        if(response.status === 200 || response.status === 201){
          setLocations(response.data);
        }
    }

    if (destination) getSuggestions();
    
  }, [destination]);


  async  function findTrip(){
    setPanelOpen(false);
    setVehiclePanel(true);

    const response =await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`,{
         params : {pickup,destination},
         headers: {
          Authorization: `Bearer ${token}`  
         }
    })

    console.log(response.data);
    setFare(response.data);
  }

  async function createRide(){

    setVehiclePanel(false);
    //setConfirmRidePanel(true);

    const response =await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create`,
          {pickup,destination,vehicleType},
         {
          headers: {
          Authorization: `Bearer ${token}`  
          }
         }
  )

    console.log(response.data);

  }



  return (
    <div className='h-screen relative overflow-hidden'>
        <img className='w-16 left-5 top-5 absolute' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
    
        <div  className='h-screen w-screen '>
          {/* image for temporary use */}

         { mapOpen && <LiveTracking />}
        </div>

        <div className='flex flex-col justify-end h-screen absolute top-0 w-full z-index:1000'>
          <div className='h-[36%]  p-6 bg-white relative'>
            
            <h5 ref = {panelCloseRef} onClick={(e)=>{
              setPanelOpen(false);
              setMapOpen(true);
            }} className='absolute opacity-0 right-6 top-6 text-2xl'>
              <i className="ri-arrow-down-wide-line"></i>
            </h5>
            <h4 className='text-2xl font-semibold'>Find a trip</h4>
            <form onSubmit={submitHandler}>
              <h5 className=' absolute left-8.5 top-20 font-extrabold'>
              <i className="ri-circle-line"></i>
            </h5>
              <div className='line absolute bg-gray-900 h-10 w-[4px]  rounded-full left-10 top-[44%]'></div>
            <h5 className=' absolute left-8.5 top-36 font-extrabold '>
              <i className="ri-square-line"></i>
            </h5>

              <input required 
              
              value={destination}
              onFocus={()=>setActiveField('destination')}
               onClick={(e)=>{
                setPanelOpen(true);
                setMapOpen(false);
              }}
              onChange={(e)=>{
                setDestination(e.target.value);
              }}  

              className='bg-[#eee] outline-none px-12 py-2 text-lg rounded-lg w-full mt-5' type="text" placeholder='Enter your destination' />
              
              <input required 
              
              value={pickup} 
              onFocus={()=>setActiveField('pickup')}
              onClick={(e)=>{
                setPanelOpen(true);
                setMapOpen(false);
              }}
              onChange={(e)=>{
                setPickup(e.target.value);
              }}

              className='bg-[#eee] outline-none px-12 py-2 text-lg rounded-lg w-full mt-3' type="text" placeholder='Add a pick-up location' />
            
            </form>

            <button onClick={findTrip}
            className='bg-black text-white px-4 py-2 rounded-lg mt-3 w-full'>
              Find Trip
            </button>

          </div>
          <div ref={panelRef} className=' bg-white h-0 '>
                <LocationSearchPanel  locations={locations} activeField={activeField} setMapOpen={setMapOpen}  setPickup={setPickup} setDestination={setDestination}/>
          </div>
        </div>

        <div ref={vehiclePanelRef} className='fixed z-10 bottom-0 bg-white w-full px-3 py-2 pb-10 translate-y-full '>
              <VehiclePanel setVehicleType={setVehicleType}  fare={fare} setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
        </div> 

        <div ref={confirmRidePanelRef} className='fixed z-20 bottom-0 bg-white w-full px-3 py-2 pb-10 translate-y-full '>
              <ConfirmRide fare={fare[vehicleType]}  pickup={pickup}  destination={destination} createRide={createRide} setConfirmRidePanel={setConfirmRidePanel} setLookForDriverPanel={setLookForDriverPanel} />
        </div> 
    
        <div ref={lookForDriverPanelRef} className='fixed z-30 bottom-0 bg-white w-full px-3 py-2 pb-10 translate-y-full '>
              <LookingForDriver fare={fare[vehicleType]}  pickup={pickup} destination={destination} setLookForDriverPanel={setLookForDriverPanel} />
        </div> 

        <div ref={waitForDriverPanelRef}  className='fixed z-40 bottom-0 bg-white w-full px-3 py-2 pb-10  translate-y-full'>
              <WaitingForDriver 
              ride={ride}
              setLookForDriverPanel={setLookForDriverPanel}
              setWaitForDriverPanel={setWaitForDriverPanel} />
        </div> 
    
    </div>
  )
}

export default Home