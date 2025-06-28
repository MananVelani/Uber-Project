import React from 'react'
import { Link } from 'react-router-dom';

const FinishRide = (props) => {


  return (
    <div className='p-2'>
        <h5  onClick={(e)=>{
                  props.setFinishRidePanel(false);
              }} className='relative w-[98%] top-1 flex justify-center items-center  mb-2  text-gray-300  text-2xl'>
              <i className="ri-arrow-down-wide-line text-3xl "></i>
            </h5>
          <h3 className=' text-xl font-semibold mb-5'>Finish This Ride </h3>


        <div className='flex items-center mb-4 border-2 border-[#F7D33D] rounded-lg py-3 px-3  mt-4'>
          <img className='h-10 rounded-full' src="https://imgs.search.brave.com/b0FPk_Abk5y7KxtFbnqlI4gfDjhxrGzq-uq_Rmb7sH0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8xNi8wNS9t/YWxlLWF2YXRhci1w/cm9maWxlLXBpY3R1/cmUtc2lsaG91ZXR0/ZS1saWdodC12ZWN0/b3ItNTM1MTYwNS5q/cGc" alt="" />
          <div className='flex ml-4 flex-1 justify-between  items-center'>
            <div>
              <h4 className="text-lg font-medium">Manan Velani</h4>
            </div>
            <div className='text-right'>
                <h4 className="text-lg font-medium">2.2 km </h4>
            </div>
          </div>
        </div>


          <div>
            <div className='flex  items-center gap-5'>
                <h4 ><i className="ri-map-pin-2-fill"></i></h4>
                <div className='border-b-1 w-full  border-gray-300 '>
                  <h2 className='mt-3 text-lg font-semibold'>D/401</h2>
                  <h4 className='mb-3 text-sm text-gray-700 font-normal'>Harekrishna Residency</h4>
                </div>
            </div>
            <div className='flex  items-center gap-5'>
                <h4><i className="ri-square-fill"></i></h4>
                <div className='border-b-1 w-full  border-gray-300 '>
                  <h2 className='mt-3 text-lg font-semibold'>SVNIT Campus</h2>
                  <h4 className='mb-3 text-sm text-gray-700 font-normal'>Ichchhanath Surat- Dumas, Road, Keval Chowk, Surat, Gujarat 395007</h4>
                </div>
            </div>
            <div className='flex  items-center gap-5'>
                <h4><i className="ri-wallet-fill"></i></h4>
                <div className=''> 
                  <h2 className='mt-3 text-lg font-semibold'>₹193.20</h2>
                  <h4 className='mb-3 text-sm text-gray-700 font-normal'>Cash Cash</h4>
                </div>
            </div>
          </div>

          <div className='mt-5  p-6'>



            <Link to='/captain-home'
            onClick={()=>{

            }}
            className='bg-green-600 flex justify-center font-semibold text-white px-3 py-3 mt-5 rounded-lg text-lg' >Finish Ride</Link>

                 
          
          
          </div>

          

    </div>
  )
}

export default FinishRide