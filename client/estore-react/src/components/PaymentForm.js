// import React, {useState} from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'
import ShippingForm from './ShippingForm'
import { useNavigate } from "react-router-dom"
import {NavLink} from "react-router-dom";
import { useState } from 'react'
import  '../style/style.css';
import  '../style/cart.css';
// import {connect} from 'react-redux';
// import MyCart from './MyCart';
// import {connect} from 'react-redux';

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#f44336",
			color: "#fce883",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}


export default function PaymentForm() {
  const [sucess, setSucess] = useState(false)
  const stripe = useStripe()
  const elements = useElements()
  const navigate = useNavigate()
//   let totalAmount = 0
//     const myProducts = props.myCart.map ((product, index) => {
//         let total = product.price * product.qty
//         totalAmount += total
//         return <ul key ={index}> 
//                     <img className = 'checkoutImage'src = {product.image} alt='checkoutImages' />
//                     <h3>Name: {product.title}</h3><h3>${product.price}</h3><h3>QTY:{product.qty}</h3>
//                 </ul>
// //     })
//         let totalAmount = 0
//         const myProducts = props.myCart.map ((product, index) => {
//             let total = product.price * product.qty
//             totalAmount += total
//             return <ul key ={index}> 
//                         <img className = 'checkoutImage'src = {product.image} alt='checkoutImages' />
//                         <h3>Name: {product.title}</h3><h3>${product.price}</h3><h3>QTY:{product.qty}</h3>
//                         <div>
                        
//                         </div>
//                   </ul>
//         })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement(CardElement)
    })
  
  if(!error) {
    try {
        const {id} = paymentMethod
        const response = await axios.post('http://localhost:8080/checkout', {
            amount: 12600,
            id
        })

        if(response.data.success) {
            console.log ('Successful payment')
            setSucess(true)
        }
    } catch (error) {
        console.log("Error", error)
    }
  } else {
    console.log (error.message)
  }
}
  return (
    <>
    {!sucess ?
    <form onSubmit={handleSubmit}>
        <fieldset className='FormGroup'>
            <div className='FormRow'>
                <CardElement options={CARD_OPTIONS} />
             
            </div>
        </fieldset>
        <button className='showItem'>Place your order</button>

    </form>
    :
    <div className='thank-shippingForm'>
        <h1 className='thankyou'>Thank you for your payment!</h1>
        <h2 className='transaction'>Your transaction has been completed</h2>
        <button className='addButtonOrder'> <NavLink to = "/shipping-form" style={{ textDecoration: 'none', color: 'black' }}>Please fill out your shipping form</NavLink></button>
        
    </div>
    }
    </>
  )
}
// const mapStateToProps =(state) =>{
//   return {
//       myCart: state.products,
//       quantity: state.qty
//   }
// }
// const mapStateToProps =(state) =>{
//     return {
//         myCart: state.products
//     }
// }
// export default connect (mapStateToProps) (PaymentForm)
