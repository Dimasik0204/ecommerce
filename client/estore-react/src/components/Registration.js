
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom"
import '../style/style.css'
import '../style/login.css'
import shop from '../assets/shopping.jpg'

import { FcBookmark} from "react-icons/fc";
import {NavLink} from "react-router-dom";


function  Registration () {

    const [user, setUser] = useState({})
    const navigate = useNavigate()

   
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        }, [])
    }
   
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://localhost:8080/register', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({ name: user.name, email: user.email, password: user.password }) 
            
        }).then(response => response.json())
        .then(result => {
            // check the result if the book was added or not
            navigate('/login') 
            
        })
        

}
   
    
       return (
        <div className='loginContainer'>
           <div className='welcomeSide'>
           <h2 className='welcome'>Welcome to our store!</h2>
           <img className='loginImage' src={shop} style= {{ width: '80%', height:'auto', padding:'15px'}} alt='shopping'/>   
           </div>
            <div className='loginSide'> 
                <h1 className='loginTitle'>Register below:</h1>
                   <div className='form-button'>
                        <form className='loginForm' onSubmit={handleSubmit}>
                            <div className='loginForm'>
                            <h5 className='loginNames'>Registered name</h5>
                            <input className='input' onChange = {handleChange} name = "name" type = "text" placeholder = "Enter your full name"  />
                                <h5 className='loginNames'>Enter your email</h5>
                            <input className='input' onChange = {handleChange} name = "email" type = "text" placeholder = "Enter your email"  /> 
                            <h5 className='loginNames'>Password</h5>
                            <input  className='input' onChange = {handleChange} name = "password" type = "password" placeholder = "Create your password" />       
                            </div>
                            <button className='buttonLogin'>Register</button>
                        </form> 
                    </div>
            </div> 
        </div>
     )
    
}


export default Registration