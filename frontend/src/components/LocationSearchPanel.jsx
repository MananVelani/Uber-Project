import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const LocationSearchPanel = (props) => {

    const locations = props.locations || [];




    
  return (
    <div>
        {/** this is a sample data */}
        
        {
            locations.map(function(elem,idx){
                return(
                    <div onClick={()=>{
                        if(props.activeField === 'pickup'){
                            props.setPickup(elem.label);
                            props.setMapOpen(false);
                        } else if(props.activeField === 'destination'){
                            props.setDestination(elem.label);
                            props.setMapOpen(false);
                        }


                        
                        

                        


                    } 
                    }
                    
                    key={idx} className='flex gap-4 border-2 border-gray-50 active:border-black p-3 rounded-xl my-2 items-center justify-start'>
                        <h2 className='bg-[#eee] h-8 w-12  rounded-full flex items-center justify-center'><i className="ri-map-pin-fill"></i></h2>
                        <h4 className='font-medium'>{elem.label}</h4>
                    </div>
                )
            })
        }



        
    </div>
  )
}

export default LocationSearchPanel