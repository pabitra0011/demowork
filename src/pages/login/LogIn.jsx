import React from 'react'
import './LogIn.css'
import { FaUserCircle, FaFacebookF, FaGoogle } from "react-icons/fa";

import LoginImg from '../../assetes/login imgs/login img.jpg';
import MainNav from '../../components/navbar/MainNav/MainNav';


const LogIn = () => {
    return (
        <div className='login-page'>
            <MainNav />
            <div className="login-container">
                <div className="login-img-section">
                    <img src={LoginImg} alt='hi' />
                </div>
                <div className="login-section">
                    <div className="login">
                        <h3>Welcome to CC </h3>
                        <p style={{ textAlign: 'center', color: ' #ff1fa9' }}>Please! Fill The Below Details to join our Beautiful Vibe, Thank You !!!:) </p>
                        <div className="emil-input">
                            <FaUserCircle className='emil-input-icon' />
                            <input placeholder='Enter Your Name*' />
                        </div>
                        <div className="emil-input">
                            <FaUserCircle className='emil-input-icon' />
                            <input placeholder='Enter Your Email*' />
                        </div>
                        <div className="emil-input">
                            <FaUserCircle className='emil-input-icon' />
                            <input placeholder='Enter Your Mobile Number' />
                        </div>
                        <p style={{ color: 'red', paddingTop: '.5rem' }}> Mandatory *</p>
                        <button className='continue-bnt'>Continue</button>
                        <button className='alter-btn'>Log In </button>
                        <div className="seperator-container">
                            <p className='seperator'>OR</p>
                        </div>
                        <div className="google-login">
                            <h3>Continue With</h3>
                            <button><FaFacebookF className='Ficon' /> Facebook</button>
                            <button> <FaGoogle className='Gicon' /> Google</button>
                        </div>
                    </div>
                    <div className="signin">
                        <p>Are you a Vendor ?</p>
                        <button className='sign-in-btn'>Business Sign In</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LogIn
