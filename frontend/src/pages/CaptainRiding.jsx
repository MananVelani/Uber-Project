import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import FinishRide from '../components/FinishRide'

const CaptainRiding = () => {

  const [finishRidePanel, setFinishRidePanel] = useState(false);

  const finishRidePanelRef = useRef(null);

  useGSAP(function(){
    if(finishRidePanel){
        gsap.to(finishRidePanelRef.current,{
          transform:'translateY(0)'
        })
    } else {
      gsap.to(finishRidePanelRef.current,{
         transform:'translateY(100%)'
      })
    }
  },[finishRidePanel])


  return (
    <div className='h-screen'>
        
        <div>
          <img className='w-16 left-5 top-5 absolute' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
          <Link to='/captain-home' className='h-10 w-10 fixed right-2 top-2 bg-white rounded-full flex items-center justify-center'>
            <i className="ri-logout-box-r-line text-lg font-bold"></i>
        </Link>
        </div>
        <div className='h-4/5'>
            <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />

        </div>
        <div
         onClick={()=>{
           setFinishRidePanel(true);
        }} 
        className='h-1/5 p-6 flex items-center justify-between  relative bg-[#F7D33D]'>
            <h5 className='absolute w-full left-0 top-1 flex justify-center  text-gray-300  text-2xl'>
              <i className=" text-3xl text-gray-800 ri-arrow-up-wide-line"></i>
            </h5>
            <h4 className='text-xl font-semibold'>4 Km Away</h4>
            <button className='bg-green-600 w-2/5 font-semibold text-white px-3 py-3 rounded-lg text-base'>Complete Ride</button>
        </div>


        <div ref={finishRidePanelRef} className='fixed z-10 bottom-0 translate-y-full bg-white w-full px-3 py-2 pb-10  '>
           <FinishRide setFinishRidePanel={setFinishRidePanel}/>
        </div> 
        

    </div>
  )
}

export default CaptainRiding