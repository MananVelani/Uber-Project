import React from 'react'

const LocationSearchPanel = (props) => {

    //sample array for locations


    const locations = [
        "D/401 HareKrishna Residency,Vraj Chowk, Surat",
        "B/604 HareKrishna Residency,Vraj Chowk, Surat",
        "A/203 HareKrishna Residency,Vraj Chowk, Surat", 
        "C/902 HareKrishna Residency,Vraj Chowk, Surat",
    ]
  return (
    <div>
        {/** this is a sample data */}
        
        {
            locations.map(function(elem,idx){
                return(
                    <div onClick={()=>{
                        props.setVehiclePanel(true)
                        props.setPanelOpen(false)
                    } 
                    }
                    
                    key={idx} className='flex gap-4 border-2 border-gray-50 active:border-black p-3 rounded-xl my-2 items-center justify-start'>
                        <h2 className='bg-[#eee] h-8 w-12  rounded-full flex items-center justify-center'><i className="ri-map-pin-fill"></i></h2>
                        <h4 className='font-medium'>{elem}</h4>
                    </div>
                )
            })
        }
        
    </div>
  )
}

export default LocationSearchPanel