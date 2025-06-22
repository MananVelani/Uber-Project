import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const CaptainLogin = () => {

   const [email, setEmail] = useState("")
      const [password, setPassword] = useState("")
      const [captainData, setCaptainData] = useState({})
  
      const submitHandler = (e)=>{
          e.preventDefault();
          setCaptainData({
              email:email,
              password:password
          });
          setEmail("");
          setPassword("");
      }


  return (
     <div className='p-2'>
            
           <div>
             <img className='w-20 mt-5 ml-4 mb-2' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
    
                <form onSubmit={submitHandler}>
                
                    <div className='bg-white pb-7 py-4 px-4 '>
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
    
    
                        <button type="submit" className='flex items-center font-bold  justify-center w-full bg-black text-white  py-3 mt-7 rounded'>Login</button>
                    </div>
                        
                </form>
    
                <p className='text-center '>Join a Fleet? <Link to='/captain-signup' className='text-blue-600'> Register as a Captain </Link></p>
            
    
          
            <div className='bg-white pb-7 py-4 px-4 mt-25'>
                <Link to='/login' 
                 className='flex items-center justify-center w-full bg-[#c98d00] text-white  py-2 outline-none mb-3 font-semibold rounded'>
                    Sign in as User</Link>
            </div>
    
           </div>
    
    
           <div>
    
           </div>
    
               
        </div>
  )
}

export default CaptainLogin