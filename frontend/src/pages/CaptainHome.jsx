import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'


const CaptainHome = () => {

  const [ridePopupPanel, setRidePopupPanel] = useState(true);
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);

  const ridePopupPanelRef = useRef(null);
  const confirmRidePopupPanelRef = useRef(null);

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
            <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />

        </div>
        <div className='h-1/2 p-4 '>
            <CaptainDetails/>       
        </div>

        <div ref={ridePopupPanelRef} className='fixed z-10 bottom-0 translate-y-full bg-white w-full px-3 py-2 pb-10  '>
            <RidePopUp setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel}/>
        </div> 

        <div ref={confirmRidePopupPanelRef} className='fixed z-10 bottom-0 translate-y-full bg-white h-sc w-full px-3 py-2 pb-10  '>
            <ConfirmRidePopUp setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel}/>
        </div> 

    </div>
  )
}

export default CaptainHome