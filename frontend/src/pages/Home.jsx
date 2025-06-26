import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfimRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

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

  return (
    <div className='h-screen relative overflow-hidden'>
        <img className='w-16 left-5 top-5 absolute' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
    
        <div  className='h-screen w-screen'>
          {/* image for temporary use */}
          <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
        </div>

        <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
          <div className='h-[30%]  p-6 bg-white relative'>
            
            <h5 ref = {panelCloseRef} onClick={(e)=>{
              setPanelOpen(false);
            }} className='absolute opacity-0 right-6 top-6 text-2xl'>
              <i className="ri-arrow-down-wide-line"></i>
            </h5>
            <h4 className='text-2xl font-semibold'>Find a trip</h4>
            <form onSubmit={submitHandler}>
              <h5 className=' absolute left-8.5 top-20 font-extrabold'>
              <i className="ri-circle-line"></i>
            </h5>
              <div className='line absolute bg-gray-900 h-10 w-[4px]  rounded-full left-10 top-[52%]'></div>
            <h5 className=' absolute left-8.5 top-36 font-extrabold '>
              <i className="ri-square-line"></i>
            </h5>
              <input required value={pickup} 
              onClick={(e)=>{
                setPanelOpen(true);
              }}
              onChange={(e)=>{
                setPickup(e.target.value);
              }}
              className='bg-[#eee] outline-none px-12 py-2 text-lg rounded-lg w-full mt-5' type="text" placeholder='Enter your destination' />
              <input required value={destination}
               onClick={(e)=>{
                setPanelOpen(true);
              }}
              onChange={(e)=>{
                setDestination(e.target.value);
              }} 
              className='bg-[#eee] outline-none px-12 py-2 text-lg rounded-lg w-full mt-3' type="text" placeholder='Add a pick-up location' />
            </form>
          </div>
          <div ref={panelRef} className=' bg-white h-0 '>
                <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel}/>
          </div>
        </div>

        <div ref={vehiclePanelRef} className='fixed z-10 bottom-0 bg-white w-full px-3 py-2 pb-10 translate-y-full '>
              <VehiclePanel setVehiclePanel={setVehiclePanel} setConfirmRidePanel={setConfirmRidePanel} />
        </div> 

        <div ref={confirmRidePanelRef} className='fixed z-20 bottom-0 bg-white w-full px-3 py-2 pb-10 translate-y-full '>
              <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setLookForDriverPanel={setLookForDriverPanel} />
        </div> 
    
        <div ref={lookForDriverPanelRef} className='fixed z-30 bottom-0 bg-white w-full px-3 py-2 pb-10 translate-y-full '>
              <LookingForDriver setLookForDriverPanel={setLookForDriverPanel} />
        </div> 

        <div ref={waitForDriverPanelRef}  className='fixed z-40 bottom-0 bg-white w-full px-3 py-2 pb-10  '>
              <WaitingForDriver setWaitForDriverPanel={setWaitForDriverPanel} />
        </div> 
    
    </div>
  )
}

export default Home