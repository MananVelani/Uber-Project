import React from 'react'

const WaitingForDriver = (props) => {
  return (
     <div className='p-2'>
        <h5  onClick={(e)=>{
              props.setWaitForDriverPanel(false);
            }} className='relative w-[98%] top-0 flex justify-center mb-2 text-gray-300  text-2xl'>
              <i className="ri-arrow-down-wide-line"></i>
            </h5>
          <hr className='border-gray-300 mt-4 -mx-5' />
          <div className='flex items-center justify-between'>
            <img  className='h-16  my-5'  src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="" />
            <div className='text-right'>
              <h2 className='text-lg font-medium'>Manan</h2>
              <h4 className='text-xl font-semibold -mt-1 -mb-1'>GJ05 JP 4032</h4>
              <h4 className='text-sm '>Scross</h4>
            </div>
          </div>
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

          

    </div>
  )
}

export default WaitingForDriver