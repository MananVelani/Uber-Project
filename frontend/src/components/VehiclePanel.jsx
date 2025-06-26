import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
         <h5  onClick={(e)=>{
              props.setVehiclePanel(false);
            }} className='relative w-[98%] top-0 flex justify-center mb-5 text-gray-300  text-2xl'>
              <i className="ri-arrow-down-wide-line"></i>
            </h5>
          <h3 className=' text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
          <div
          onClick={()=>{
                        props.setVehiclePanel(false)
                        props.setConfirmRidePanel(true)
                    } 
                    }
           className='flex border-2 border-gray-200 active:border-black rounded-xl p-3 mb-2 w-full items-center justify-between'>
              <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="" />
              <div className='w-1/2 ml-2'>
                <h2 className='text-base font-medium'>UberGo <span className='text-[16px] font-normal'><i className="ri-user-fill"></i>4</span></h2>
                <h4 className='font-medium text-sm'>2 mins away</h4>
                <p className='font-normal text-xs text-gray-800'>Affordable, compact rides</p>
              </div>
              <h2 className='text-lg font-semibold'>₹193.20</h2>
          </div>
          <div
          onClick={()=>{
                        props.setVehiclePanel(false)
                        props.setConfirmRidePanel(true)
                    } 
                    }
          className='flex border-2  border-gray-200 active:border-black rounded-xl p-3 mb-2 w-full items-center justify-between'>
              <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
              <div className='w-1/2 ml-2'>
                <h2 className='text-base font-medium'>Moto <span className='text-[16px] font-normal'><i className="ri-user-fill"></i>1</span></h2>
                <h4 className='font-medium text-sm'>3 mins away</h4>
                <p className='font-normal text-xs text-gray-800'>Affordable motorcycles rides</p>
              </div>
              <h2 className='text-lg font-semibold'>₹65.17</h2>
          </div>
          <div
          onClick={()=>{
                        props.setVehiclePanel(false)
                        props.setConfirmRidePanel(true)
                    } 
                    }
          className='flex border-2  border-gray-200 active:border-black rounded-xl p-3 mb-2 w-full items-center justify-between'>
              <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
              <div className='w-1/2 ml-2'>
                <h2 className='text-base font-medium'>UberAuto <span className='text-[16px] font-normal'><i className="ri-user-fill"></i>3</span></h2>
                <h4 className='font-medium text-sm'>2 mins away</h4>
                <p className='font-normal text-xs text-gray-800'>Affordable Auto rides</p>
              </div>
              <h2 className='text-lg font-semibold'>₹118.21</h2>
          </div>
    </div>
  )
}

export default VehiclePanel