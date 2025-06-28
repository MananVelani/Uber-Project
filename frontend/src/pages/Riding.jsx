import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>
        <Link to='/home' className='h-10 w-10 fixed right-2 top-2 bg-white rounded-full flex items-center justify-center'>
            <i className="ri-home-4-line text-lg font-bold"></i>
        </Link>
        <div className='h-1/2'>
            <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />

        </div>
        <div className='h-1/2 p-2'>

          <div className='flex items-center justify-between'>
            <img  className='h-16  my-5'  src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_538,w_956/v1688398971/assets/29/fbb8b0-75b1-4e2a-8533-3a364e7042fa/original/UberSelect-White.png" alt="" />
            <div className='text-right'>
              <h2 className='text-lg font-medium'>Manan</h2>
              <h4 className='text-xl font-semibold -mt-1 -mb-1'>GJ05 JP 4032</h4>
              <h4 className='text-sm '>Scross</h4>
            </div>
          </div>

          <div >
           
            <div className='flex  items-center gap-1'>
                <h4 className='px-2'><i className=" ri-square-fill"></i></h4>
                <div className='border-b-1 w-full  border-gray-300 '>
                  <h2 className='mt-2 text-base font-semibold'>SVNIT Campus</h2>
                  <h4 className='mb-2 text-xs text-gray-700 font-normal'>Ichchhanath Surat- Dumas, Road, Keval Chowk, Surat, Gujarat 395007</h4>
                </div>
            </div>
            <div className='flex  items-center gap-1 '>
                <h4 className='px-2'><i className=" ri-wallet-fill"></i></h4>
                <div className='w-full '>
                  <h2 className='mt-2 text-base font-semibold'>₹193.20</h2>
                  <h4 className='mb-2 text-xs text-gray-700 font-normal'>Cash</h4>
                </div>
            </div>
          </div>

          

            <button className='bg-green-600 w-full font-semibold text-white p-2 mt-5 rounded-lg text-base'>Make a Payment</button>
        </div>
    </div>
  )
}

export default Riding