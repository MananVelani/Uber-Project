import React, { useContext, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'

import {UserDataContext} from "../context/UserContext";


const UserLogin = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    const {user, setUser} = useContext(UserDataContext);

    const submitHandler = async (e)=>{
        e.preventDefault();
        const user = ({
            email:email,
            password:password
        });

        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,user );

        if(response.status === 200 || response.status === 201){

            const data = response.data;
            setUser(data.user);
            localStorage.setItem('token',data.token);
            navigate('/home')

        }

        setEmail("");
        setPassword("");
    }
    

  return (
     <div className='p-2'>
        
       <div>
         <img className='w-16 mt-5 ml-4 mb-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />

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

            <p className='text-center '>New Here? <Link to='/signup' className='text-blue-600'>  Create new Account </Link></p>
        

      
        <div className='bg-white pb-7 py-4 px-4 mt-35'>
            <Link to='/captain-login' 
             className='flex items-center justify-center w-full bg-[#428952] text-white  py-2 outline-none mb-3 font-semibold rounded'>
                Sign in as Captain</Link>
        </div>

       </div>


       <div>

       </div>

           
    </div>
    
  )
}

export default UserLogin