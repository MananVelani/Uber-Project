import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
        <div className='bg-cover bg-center  bg-[url(https://images.unsplash.com/photo-1619059558110-c45be64b73ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhZmZpYyUyMGxpZ2h0fGVufDB8fDB8fHww)]    h-screen pt-8  w-full flex flex-col  justify-between  '>
            <img className='w-16 ml-8' src='https://www.edigitalagency.com.au/wp-content/uploads/Uber-logo-white-png-900x313.png' alt='Uber Logo'/>
            <div className='bg-white pb-7 py-4 px-4 '>
                <h2 className='text-3xl font-bold '>Get Started with Uber</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black text-white  py-3 mt-5 rounded'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Start