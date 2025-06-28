import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
         <div className='flex items-center   mt-4'>
          <img className='h-12 rounded-full' src="https://imgs.search.brave.com/b0FPk_Abk5y7KxtFbnqlI4gfDjhxrGzq-uq_Rmb7sH0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC8xNi8wNS9t/YWxlLWF2YXRhci1w/cm9maWxlLXBpY3R1/cmUtc2lsaG91ZXR0/ZS1saWdodC12ZWN0/b3ItNTM1MTYwNS5q/cGc" alt="" />
          <div className='flex ml-3 flex-1 justify-between  items-center'>
            <div>
              <h4 className="text-xl font-medium">Manan Velani</h4>
            </div>
            <div className='text-right'>
                <h4 className="text-xl font-medium">₹325 </h4>
                <h5 className='text-gray-500 text-xs '>Earned</h5>
            </div>
          </div>
          

        </div>

          <div className='flex mt-6 bg-[#F7D33D] p-3 rounded-lg items-center justify-center'>
            <div className='px-5 py-2 flex flex-col items-center'>
              <i className="ri-time-line text-3xl mb-1 text-gray-400 font-light"></i>
              <h4 className='text-lg mb-1 font-medium'>10.2</h4>
              <h5 className='text-[10px] text-gray-500'>HOURS ONLINE</h5>
            </div>
            <div className='px-5 py-2 flex flex-col items-center'>
              <i className="ri-speed-up-fill text-3xl mb-1 text-gray-400 font-light"></i>
              <h4 className='text-lg mb-1 font-medium'>30 KM</h4>
              <h5 className='text-[10px] text-gray-500'>TOTAL DISTANCE</h5>
            </div>
            <div className='px-5 py-2 flex flex-col items-center'>
              <i className="ri-bill-line text-3xl mb-1 text-gray-400 font-light"></i>
              <h4 className='text-lg  mb-1 font-medium'>20</h4>
              <h5 className='text-[10px] text-gray-500'>TOTAL JOBS</h5>
            </div>
          </div>

    </div>
  )
}

export default CaptainDetails