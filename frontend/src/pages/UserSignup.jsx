import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignUp = () => {

      const [firstName, setFirstName] = useState("")
      const [lastName, setLastName] = useState("")
      const [email, setEmail] = useState("")
      const [password, setPassword] = useState("")
      const [userData, setUserData] = useState({})
  
      const submitHandler = (e)=>{
          e.preventDefault();
          setUserData({
              fullName:{
                firstName:firstName,
                lastName:lastName,
              },
              email:email,
              password:password
          });
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
      }


  return (
    <div className='p-2'>
            
           <div>
             <img className='w-16 mt-5 ml-4 mb-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
    
                <form onSubmit={submitHandler}>
                
                    <div className='bg-white pb-7 py-4 px-4 '>

                    <h3 className='text-lg font-medium mb-2'>What's your name</h3>

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

                        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
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
    
    
                        <button type="submit" className='flex items-center font-bold  justify-center w-full bg-black text-white  py-3 mt-7 rounded'>Sign up</button>
                    </div>
                        
                </form>
    
                <p className='text-center '>Already have a account? <Link to='/login' className='text-blue-600'>  Login here </Link></p>
            
    
          
            
    
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

export default UserSignUp