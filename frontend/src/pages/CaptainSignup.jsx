import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import axios from 'axios'

const CaptainSignup = () => {

        const [firstName, setFirstName] = useState("")
        const [lastName, setLastName] = useState("")
        const [email, setEmail] = useState("")
        const [password, setPassword] = useState("")

        const [vehicleColor, setVehicleColor] = useState('')
        const [vehiclePlate, setVehiclePlate] = useState('')
        const [vehicleCapacity, setVehicleCapacity] = useState('')
        const [vehicleType, setVehicleType] = useState('')

        const navigate = useNavigate();

        const {captain,setCaptain} = useContext(CaptainDataContext);
    
        const submitHandler = async (e)=>{
            e.preventDefault();
            const captainData = ({
                fullname:{
                  firstname:firstName,
                  lastname:lastName,
                },
                email:email,
                password:password,
                vehicle : {
                    color: vehicleColor,
                    plate: vehiclePlate,
                    capacity: vehicleCapacity,
                    vehicleType: vehicleType
                }
            });

            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,captainData);

            if(response.status === 200 || response.status === 201){
                const data = response.data;
                setCaptain(data.captain);
                localStorage.setItem('token',data.token);
                navigate('/captain-home');
            }


            setFirstName("");
            setLastName("");
            setEmail("");
            setPassword("");
            setVehicleColor("");
            setVehiclePlate("");
            setVehicleCapacity("");
            setVehicleType("");
        }


  return (
    <div className='p-2'>
                
               <div>
                 <img className='w-16 mt-2 ml-4 ' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
        
                    <form onSubmit={submitHandler}>
                    
                        <div className='bg-white pb-7 py-4 px-4 '>
    
                        <h3 className='text-lg font-medium mb-2'>What's our Captain's name</h3>
    
                            <div className='flex gap-2'>
                              
                                <input
                                value={firstName}
                                onChange={(e)=>{
                                    setFirstName(e.target.value);
                                }} 
                                required type="text" placeholder='First name' 
                                className='flex items-center px-3 text-lg placeholder:text-base justify-center w-1/2 bg-[#EEEEED]  py-3 outline-none mb-5 rounded'/>
            
                                <input
                                value={lastName}
                                onChange={(e)=>{
                                    setLastName(e.target.value);
                                }} 
                                required type="text" placeholder='Last name' 
                                className='flex items-center px-3 text-lg placeholder:text-base justify-center w-1/2 bg-[#EEEEED]  py-3 outline-none mb-5 rounded'/>
            
                            </div>
    
                            <h3 className='text-lg font-medium mb-2'>What's our Captain's email</h3>
                            <input
                             value={email}
                             onChange={(e)=>{
                                setEmail(e.target.value);
                            }} 
                            required type="email" placeholder='email@example.com' 
                            className='flex items-center px-3 text-lg placeholder:text-base justify-center w-full bg-[#EEEEED]  py-3 outline-none mb-5 rounded'/>
        
                            <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
                            <input
                            value={password}
                            onChange={(e)=>{
                                setPassword(e.target.value);
                            }}
                            required type="password" placeholder='password' 
                            className='flex items-center px-3 text-lg placeholder:text-base justify-center w-full bg-[#EEEEED]  py-3 outline-none mb-3 rounded'/>
        
                            <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
                            <div className='flex gap-2 mb-5'>
                                <input
                                    value={vehicleColor}
                                    onChange={e => setVehicleColor(e.target.value)}
                                    required
                                    type="text"
                                    placeholder='Vehicle Color'
                                    className='flex items-center px-3 text-lg placeholder:text-base justify-center w-1/2 bg-[#EEEEED] py-3 outline-none rounded'
                                />
                                <input
                                    value={vehiclePlate}
                                    onChange={e => setVehiclePlate(e.target.value)}
                                    required
                                    type="text"
                                    placeholder='Vehicle Plate'
                                    className='flex items-center px-3 text-lg placeholder:text-base justify-center w-1/2 bg-[#EEEEED] py-3 outline-none rounded'
                                />
                            </div>
                            <div className='flex gap-2 mb-5'>
                                <input
                                    value={vehicleCapacity}
                                    onChange={e => setVehicleCapacity(e.target.value)}
                                    required
                                    type="number"
                                    min="1"
                                    placeholder='Capacity'
                                    className='flex items-center px-3 text-lg placeholder:text-base justify-center w-1/2 bg-[#EEEEED] py-3 outline-none rounded'
                                />
                                <select
                                    value={vehicleType}
                                    onChange={e => setVehicleType(e.target.value)}
                                    required
                                    className='flex items-center px-3 text-lg placeholder:text-base justify-center w-1/2 bg-[#EEEEED] py-3 outline-none rounded'
                                >
                                    <option value="" disabled>Select Type</option>
                                    <option value="car">Car</option>
                                    <option value="auto">Auto</option>
                                    <option value="moto">Moto</option>
                                </select>
                            </div>
        
                            <button type="submit" className='flex items-center font-bold  justify-center w-full bg-black text-white  py-3 mt-7 rounded'>Create Captain Account</button>
                        </div>
                            
                    </form>
        
                    <p className='text-center '>Already have a account? <Link to='/captain-login' className='text-blue-600'>  Login here </Link></p>
                
        
              
                
        
               </div>
        
        
               <div>
                    <p className='text-[10px] p-5 mt-12'>
                      This site is protected with reCAPTCHA and the <span className='underline'> Google Privacy
                      Policy</span> and <span className='underline'>Terms of Service apply</span>.
                    </p>
               </div>
        
                   
            </div>
  )
}

export default CaptainSignup