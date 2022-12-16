import { useState } from 'react'
import {connect} from 'react-redux';
import '../style/paymentStyle.css';
import  '../style/style.css';
import  '../style/cart.css';
import StripeContainer from './StripeContainer';
import ShippingForm from './ShippingForm'
import { AiFillStar} from "react-icons/ai";
import { FcBookmark} from "react-icons/fc";
import { FaShoppingCart} from "react-icons/fa";
import { MdAddCircle} from "react-icons/md";
import { FaMinusCircle} from "react-icons/fa";
import { FaTrashAlt} from "react-icons/fa";




function MyCart (props) {

    const [showItem, setShowItem] = useState(false);
    const [shipItem, setShipItem] =useState(false)
   
//    const handleDecrement =(product) =>{
//       props.onDecrement(product)
//       window.location.reload(false)
//    }

//    const handleIncrement =(product) =>{
//     props.onIncrement(product)
    
//    }



    let totalAmount = 0
    const myProducts = props.myCart.map ((product, index) => {
        let total = product.price * product.qty
        totalAmount += total
        return <ul key ={index} className = 'cartContainer'> 
                    <div className = 'productImage'>
                        <img className = 'checkoutImage'style={{ width: '150px', height:'150px', padding:'7px'}} src = {product.image} alt='checkoutImages' />
                        <div className='name-priceCart'>
                        <h6><span><strong>Name:</strong> </span>{product.title}</h6>
                        <h5 className='price'>${product.price}</h5>
                        </div>
                    </div>
                     <div className='QTY-cart'>
                    <h3><span>QTY </span></h3><h3>x</h3><h3 className='qtyNumber'><span> {product.qty}</span></h3>
                    </div>
                    <div className='buttonsCart'>
                    <button className='addButtonCart' onClick={() =>props.onIncrement(product)}><MdAddCircle size={35}/></button>
                    <button className='minusButtonCart' onClick={() =>props.onDecrement(product)}><FaMinusCircle size={30}/></button>
                    <button className='trashButtonCart' onClick={() =>props.onDeleteFromCart(product)}><FaTrashAlt size={30}/></button>
                    </div>
               </ul>
    })

    return (
        <div className='cartPage'>
            <h1 className='mainTitle'>My Cart <FaShoppingCart style={{ color: 'f44336'}} size={35} /></h1>
            <div className='App'>
                <h1>{props.myCart.length === 0 && <div>Cart is Empty</div>}</h1>
                {showItem ? (
                    <StripeContainer />
                ) : (
                <>
                <div className='productCart'>
                {myProducts}
                </div>
                <h1 className='stripeH1'>Subtotal: ${totalAmount}</h1>
                <button className='showItem' onClick={() => setShowItem(true)}>Proceed to Checkout</button>
                </>
                )}
            </div>
        </div>
    )

}
const mapStateToProps =(state) =>{
    return {
        myCart: state.products,
        quantity: state.qty
    }
}

const mapDispatchToProps =(dispatch) => {
    return {
        onDeleteFromCart:(value) => dispatch({type: 'DELETE_FROM_CART', payload:value}),
        onDecrement:(value) => dispatch({type: 'REDUCE_QUANTITY', payload:value}),
        onIncrement:(value) => dispatch({type: 'ADD_MORE', payload:value}) 
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (MyCart)