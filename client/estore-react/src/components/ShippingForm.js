import React, {useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import ship from '../assets/fragile.jpg'
import '../style/style.css'
import '../style/login.css'
import { FcBookmark} from "react-icons/fc";
import {NavLink} from "react-router-dom";


function Shipping() {

    const [customer, setCustomer] = useState({})
    const navigate = useNavigate()


    const handleChange = (e) => {
        setCustomer({
            ...customer,
            [e.target.name]: e.target.value
        }, [])
    }

    const handleSubmit = (e) => {

        // e.preventDefault() 
        // check if the textboxes are empty. 
        // if they are empty then don't make the post request 

        fetch('http://localhost:8080/customer-info', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: customer.name,
                email: customer.email,
                phone: customer.phone,
                country: customer.country,
                city: customer.city,
                postal: customer.postal,
                details: customer.details
                

            })
        }).then(response => response.json())
        .then(result => {
            // check the result if the book was added or not 
            navigate('/')
        })

    }

    // const handleAddBook = () => {
    //     fetch('http://localhost:8080/add_your_book', {
    //         method: 'POST', 
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }, 
    //         body: JSON.stringify({ title: title, genre: genre, author: author, year: year}) 
    //     })
    //     navigate('/add_your_book')
    //     console.log('')

    // }
   
    return (
        <div className='loginContainer'>
            <div className='welcomeSide'>
            <h2 className='welcome'>Welcome to our store!</h2>
            <img className='loginImage' src={ship} style= {{ width: '80%', height:'auto', padding:'15px'}} alt='shopping'/>   
            </div>
            <div className='loginSide'>  
                <h1 className='loginTitle'>Enter your information</h1>
                    <div className='form-button'>
                        <form className='loginForm'onSubmit={handleSubmit}>
                        <div className='loginForm'>
                        <input className='input' type = 'text' name = 'name' placeholder='Enter your fulll name' onChange={handleChange}  />
                        <input className='input' type = 'text' name = 'email' placeholder='Enter your email' onChange={handleChange} />
                        <input className='input' type = 'text' name = 'phone' placeholder='Enter phone number' onChange={handleChange} />
                        <input className='input' type = 'text' name = 'country' placeholder='Country you live in' onChange={handleChange} />
                        <input className='input' type = 'text' name = 'city' placeholder='City' onChange={handleChange} />
                        <input className='input' type = 'text' name = 'postal' placeholder='Postal Code' onChange={handleChange} />
                        <input className='input' type = 'text' name = 'details' placeholder='Shipment details' onChange={handleChange}/>
                        <button className='buttonLogin'>Confirm your shipping information</button>
                        </div>
                        </form>
                    </div>
            </div>
        </div>
    )






}
export default Shipping