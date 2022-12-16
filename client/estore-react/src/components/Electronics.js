import {useState, useEffect} from 'react';
import  '../style/style.css';
import  '../style/product.css';
import {connect} from 'react-redux'
import MyCart from './MyCart';
import { AiFillStar} from "react-icons/ai";
import { FcBookmark} from "react-icons/fc";


function Electronics(props) {

   const [electronics, setElectronics] = useState([])
   

   useEffect(() => {
    fetchElectronics()
    }, [])

   const fetchElectronics = () => {
        fetch('https://fakestoreapi.com/products/category/electronics', {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json'
            }
        }) 
        .then(response => response.json())
        .then(result => {
                if(result.error) {
                    console.log(result.error)
                } else {
                    setElectronics(result)
                    
                }
        })
    }

    // const handleAddToCart = (electro) => {
    //     props.onAddToCart()
    // }

    const electronicsItems = electronics.map((electro, index) => {
        return <div key ={index} className ='liContainer'>
        
           <div className = 'productImage'>
           <img className = 'productImage'src = {electro.image} style={{ width: '150px', height:'150px', padding:'7px'}} alt='elctronics' />
           </div>
            <h6 className='product-id'>Item id:{electro.id}</h6>
            <div className='product-content'>
                <h6><span><strong>Name:</strong> </span> {electro.title}</h6>
                <h6> {electro.descriprtion}</h6>
                <div className='priceAndrate'>
                    <h6><span><strong>Rating: </strong></span>{electro.rating.rate}<AiFillStar style={{ color: 'ffbe0b'}}size={15}/></h6>
                    <h5 className='price'>${electro.price}</h5>
                </div>
            </div>
            <button className='addButton' onClick={() => props.onAddToCart(electro)} >Add to my cart</button>
            </div>
            
    })

    return (
        <>
        <h1 className='mainTitle'>Electronics<FcBookmark size={35}/></h1>
        <div className='productContainer'>
        {electronicsItems}
        </div>
        </>
    )
}

const mapDispatchToProps =(dispatch) => {
    return {
        onAddToCart: (value) => dispatch({type: 'ADD_TO_CART', payload:value})
    }
}

export default connect(null, mapDispatchToProps)(Electronics)