import React from 'react'
import { Link,useLocation, useNavigate } from 'react-router-dom'
import { useEffect,useContext } from 'react';
import { SocketContext } from '../context/SocketContext'
import LiveTracking from '../components/LiveTracking';

const Riding = () => {

  const location = useLocation();
  const {ride} = location.state || {};//retrieve ride data
  const {socket} = useContext(SocketContext)
  const navigate = useNavigate();

  socket.on("ride-ended",(data)=>{
      navigate('/home')
  })

  return (
    <div className='h-screen'>
        <Link to='/home' className='h-10 w-10 fixed right-2 top-2 bg-white rounded-full flex items-center justify-center'>
            <i className="ri-home-4-line text-lg font-bold"></i>
        </Link>
        <div className='relative'> 
          <div className='h-1/2'>
              <LiveTracking/>
          <div className='h-1/2 p-2 relative z-10'>

          <div className='flex items-center justify-between'>
            <img  className='h-16  my-5'  src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="" />
            <div className='text-right'>
              <h2 className='text-lg font-medium capitalize'>{ride?.captain.fullname.firstname}</h2>
              <h4 className='text-xl font-semibold -mt-1 -mb-1'>{ride?.captain.vehicle.plate}</h4>
              <h4 className='text-sm '>Scross</h4>
            </div>
          </div>

          <div >
           
            <div className='flex  items-center gap-1'>
                <h4 className='px-2'><i className=" ri-square-fill"></i></h4>
                <div className='border-b-1 w-full  border-gray-300 '>
                  <h2 className='mt-2 text-base font-semibold'>SVNIT Campus</h2>
                  <h4 className='mb-2 text-xs text-gray-700 font-normal'>{ride?.destination}</h4>
                </div>
            </div>
            <div className='flex  items-center gap-1 '>
                <h4 className='px-2'><i className=" ri-wallet-fill"></i></h4>
                <div className='w-full '>
                  <h2 className='mt-2 text-base font-semibold'>₹{ride?.fare}</h2>
                  <h4 className='mb-2 text-xs text-gray-700 font-normal'>Cash</h4>
                </div>
            </div>
          </div>

          

            <button className='bg-green-600 w-full font-semibold text-white p-2 mt-5 rounded-lg text-base'>Make a Payment</button>
          </div>
        </div>
        </div>

    </div>
  )
}

export default Riding