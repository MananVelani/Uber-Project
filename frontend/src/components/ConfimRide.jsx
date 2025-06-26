import React from 'react'

const ConfirmRide = (props) => {
  return (
    <div className='p-2'>
        <h5  onClick={(e)=>{
              props.setConfirmRidePanel(false);
            }} className='relative w-[98%] top-0 flex justify-center mb-2 text-gray-300  text-2xl'>
              <i className="ri-arrow-down-wide-line"></i>
            </h5>
          <h3 className=' text-xl font-semibold '>Confirm Your Ride</h3>
          <hr className='border-gray-300 mt-4 -mx-5' />
          <img  className='h-20 mx-auto my-5'  src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="" />
          <hr className='border-gray-300 mt-4 -mx-5' />

          <div>
            <div className='flex  items-center gap-3'>
                <h4 ><i className="ri-map-pin-2-fill"></i></h4>
                <div className='border-b-1 w-full  border-gray-300 '>
                  <h2 className='mt-3 text-lg font-semibold'>D/401</h2>
                  <h4 className='mb-3 text-sm text-gray-700 font-normal'>Harekrishna Residency</h4>
                </div>
            </div>
            <div className='flex  items-center gap-3'>
                <h4><i className="ri-square-fill"></i></h4>
                <div className='border-b-1 w-full  border-gray-300 '>
                  <h2 className='mt-3 text-lg font-semibold'>SVNIT Campus</h2>
                  <h4 className='mb-3 text-sm text-gray-700 font-normal'>Ichchhanath Surat- Dumas, Road, Keval Chowk, Surat, Gujarat 395007</h4>
                </div>
            </div>
            <div className='flex  items-center gap-3'>
                <h4><i className="ri-wallet-fill"></i></h4>
                <div className='border-b-1 w-full  border-gray-300 '>
                  <h2 className='mt-3 text-lg font-semibold'>₹193.20</h2>
                  <h4 className='mb-3 text-sm text-gray-700 font-normal'>Cash</h4>
                </div>
            </div>
          </div>

          <div className='flex justify-center mt-6'>
            <button
            onClick={()=>{
              props.setConfirmRidePanel(false);
              props.setLookForDriverPanel(true);
            }}
            className='bg-green-600 w-1/3 font-semibold text-white px-3 py-2 rounded-xl text-base' >Confirm</button>
          </div>

    </div>
  )
}

export default ConfirmRide