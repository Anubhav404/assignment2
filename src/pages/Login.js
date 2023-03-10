import React, { useState } from 'react'
import "./login.css"
import {useNavigate} from "react-router-dom"
import MainPage from './MainPage';
const Login = () => {
    const navigate = useNavigate();
    const [email , setEmail] = useState();
    const [password , setPassword] = useState()
  return (
    <>  
        <div className="login_container">
            <div className="login_bar"><h2>Login</h2></div>
            <div className="input_container">
                <input type="email" id='email' onChange={(e) => {setEmail(e.target.value)}} placeholder='Enter your email...' required />
                <input type="text" id='password' onChange={(e) => {setPassword(e.target.value)}} placeholder='Enter your password...' required />
            </div>
            <h4>Don't have an account ? <span>  Signup </span> instead </h4>
            <div className="login_buttons">

                <button className='submit' onClick={()=>{
                    if(email === "anubhav123@gmail.com" && password === "12345"){
                        navigate("/main")
                    }
                    else{
                        alert("Enter correct email and password")
                    }
                }
                }>Submit</button>
                <h3>OR</h3>

                <button className='google'><img src="https://img.icons8.com/color/48/null/google-logo.png" alt=''/> Login With Google </button>
            </div>
        </div>
        

    </>    
  )
}

export default Login