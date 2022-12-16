
import {Elements} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './PaymentForm'
import  {useState, useEffect} from "react"
import '../style/paymentStyle.css';
import  '../style/style.css';
// import ShippingForm from './ShippingForm'
// import {connect} from 'react-redux';



const PUBLIC_KEY = 'pk_test_51MCa7eJcVvXSQ9kpqway42YfNWnP3ivkdcxlh4OPjkVwDzSnRpjEvrLAYCU5tY7226NTy5RpJOobzhtVa20aUvO000Q4OfHVIo'

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
    // const [customer, setCustomer] = useState({})
    // const [shipItem, setShipItem] = useState(false)
    
    // const handleChange = (e) => {
    //     setCustomer({
    //         ...customer,
    //         [e.target.name]: e.target.value
    //     })
    // }
    // const handleSubmit = (e) => {

    //     // e.preventDefault() 
    //     // check if the textboxes are empty. 
    //     // if they are empty then don't make the post request 

    //     fetch('http://localhost:8080/customer-info', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             name: customer.name,
    //             email: customer.email,
    //             phone: customer.phone,
    //             country: customer.country,
    //             city: customer.city,
    //             postal: customer.postal,
    //             details: customer.details
                

    //         })
    //     }).then(response => response.json())
    //     .then(result => {
    //         // check the result if the book was added or not 
            
    //     })

    // }

  return (
    <Elements stripe ={stripeTestPromise}>
                    <PaymentForm />
       
    </Elements> 

   
    
  )
}

// {showItem ? (
//     <StripeContainer />
// ) : (
// <>
// {myProducts}
// <h1 className='stripeH1'>Subtotal: ${totalAmount}</h1>
// <button className='showItem' onClick={() => setShowItem(true)}>Proceed to Checkout</button>
// </>
// )}

// return (

//     <>
//     {shipItem ? (<Elements stripe ={stripeTestPromise}>
//                     <PaymentForm />
       
//                 </Elements> 
//     ) : ( <>  
//         <h1>Enter your information</h1>
//         <form onSubmit={handleSubmit}>
//         <input type = 'text' name = 'name' placeholder='Enter your fulll name' onChange={handleChange}  />
//         <input type = 'text' name = 'email' placeholder='Enter your email' onChange={handleChange} />
//         <input type = 'text' name = 'phone' placeholder='Enter phone number' onChange={handleChange} />
//         <input type = 'text' name = 'country' placeholder='Country you live in' onChange={handleChange} />
//         <input type = 'text' name = 'city' placeholder='City' onChange={handleChange} />
//         <input type = 'text' name = 'postal' placeholder='Postal Code' onChange={handleChange} />
//         <input type = 'text' name = 'details' placeholder='Shipment details' onChange={handleChange}/>
//         <button onClick={() => setShipItem(true)}>Confirm your shipping information</button>
//         </form>
//          </>)
//     }
//     </>
    
//   )