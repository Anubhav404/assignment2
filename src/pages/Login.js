import React from 'react'
import "./login.css"
import {useNavigate} from "react-router-dom"
import MainPage from './MainPage';
const Login = () => {
    const navigate = useNavigate();
  return (
    <>  
        <div className="login_container">
            <div className="login_bar"><h2>Login</h2></div>
            <div className="input_container">
                <input type="email" id='email' placeholder='Enter your email...' required />
                <input type="text" id='password' placeholder='Enter your password...' required />
            </div>
            <h4>Don't have an account ? <span>  Signup </span> instead </h4>
            <div className="login_buttons">
                <button className='submit' onClick={()=>navigate("/main")} >Submit</button>
                <h3>OR</h3>
                <button className='google'><img src="https://img.icons8.com/color/48/null/google-logo.png" alt=''/> Login With Google </button>
            </div>
        </div>
        

    </>    
  )
}

export default Login