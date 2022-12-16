import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {connect} from 'react-redux'
import shop from '../assets/shopping.jpg'
import '../style/style.css'
import '../style/login.css'
import { FcBookmark} from "react-icons/fc";
import {NavLink} from "react-router-dom";


function Login(props) {  
    const [user, setUser] = useState({})
    const navigate = useNavigate() 

    const handleOnChange = (e) => {
        setUser({
            ...user, 
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        fetch('http://localhost:8080/login-token', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            }, 
            body: JSON.stringify(user)
        })
        .then(response => response.json())
        .then(result => {
            if(result.success) {
                console.log(result)
                const token = result.token 
                const name = result.name 
                localStorage.setItem('jwt', token)
                localStorage.setItem('name', name)
                
                props.onLogin (token)
                navigate('/')
           
                
            } else{
                console.log(result)
            }
            
      
        })
       
    }

    return (
        <div className='loginContainer'>
           <div className='welcomeSide'>
           <h2 className='welcome'>Welcome to our store!</h2>
           <img className='loginImage' src={shop} style= {{ width: '80%', height:'auto', padding:'15px'}} alt='shopping'/>   
           </div>
            <div className='loginSide'> 
                <h1 className='loginTitle'>Login</h1>
                   <div className='form-button'>
                        <form className='loginForm' onSubmit={handleSubmit}>
                        <div className='loginForm'>
                        <h5 className='loginNames'>Registered name</h5>
                        <input className='input' onChange = {handleOnChange} name = "name" type = "text" placeholder = "Enter registered name"  /> 
                        <h5 className='loginNames'>Password</h5>
                        <input  className='input' onChange = {handleOnChange} name = "password" type = "password" placeholder = "Enter password" />       
                        </div>
                        <button className='buttonLogin'>Login</button>
                        <NavLink to = "/registration" className="login-registration" style={{ textDecoration: 'none' }}><h6>Are you register?</h6></NavLink>
                        </form>
                        
                        
                    </div>
            </div> 
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (token) => dispatch({type: 'ON_LOGIN', payload: token})
    }
}
export default connect(null, mapDispatchToProps)(Login)







// return (
//     <div className='loginContainer'>
//        <div className='welcomeSide'>
//        <h2 className='welcome'>Welcome to our store!</h2>
//        <img className='loginImage' src={shop} style= {{ width: '80%', height:'auto', padding:'15px'}} alt='shopping'/>   
//        </div>
//         <div className='loginSide'> 
//             <h1 className='loginTitle'>Please, register below:</h1>
//                <div className='form-button'>
//                     <form className='loginForm' onSubmit={handleSubmit}>
//                     <h5 className='loginNames'>Registered name</h5>
//                     <input className='input' onChange = {handleChange} name = "name" type = "text" placeholder = "Enter your full name"  />
                        // <h5 className='loginNames'>Enter your email</h5>
//                     <input className='input' onChange = {handleChange} name = "name" type = "text" placeholder = "Enter your email"  /> 
//                     <h5 className='loginNames'>Password</h5>
//                     <input  className='input' onChange = {handleChange} name = "password" type = "password" placeholder = "Create your password" />       
//                     </form>
//                     <button className='buttonLogin'>Register</button>
//                     <NavLink to = "/registration" className="login-registration" style={{ textDecoration: 'none' }}><h6>Are you register?</h6></NavLink>
//                 </div>
//         </div> 
//     </div>
//  )



// return (
//     <div className='loginContainer'>
//        <div className='welcomeSide'>
//        <h2 className='welcome'>Welcome to our store!</h2>
//        <img className='loginImage' src={shop} style= {{ width: '80%', height:'auto', padding:'15px'}} alt='shopping'/>   
//        </div>
//         <div className='loginSide'> 
//             <h1 className='loginTitle'>Register below:</h1>
//                <div className='form-button'>
//                     <form className='loginForm' onSubmit={handleSubmit}>
//                         <div className='loginForm'>
//                         <h5 className='loginNames'>Registered name</h5>
//                         <input className='input' onChange = {handleChange} name = "name" type = "text" placeholder = "Enter your full name"  />
//                             <h5 className='loginNames'>Enter your email</h5>
//                         <input className='input' onChange = {handleChange} name = "name" type = "text" placeholder = "Enter your email"  /> 
//                         <h5 className='loginNames'>Password</h5>
//                         <input  className='input' onChange = {handleChange} name = "password" type = "password" placeholder = "Create your password" />       
//                         </div>
//                         <button className='buttonLogin'>Register</button>
//                     </form> 
//                 </div>
//         </div> 
//     </div>
//  )