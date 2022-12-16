import {useState, useEffect} from 'react'
import  '../style/style.css'; 
import  '../style/product.css';
import {connect} from 'react-redux'
import { AiFillStar} from "react-icons/ai";
import { FcBookmark} from "react-icons/fc";


function Jewellery(props) {

   const [jewellery, setJewellery] = useState([])
   

   useEffect(() => {
    fetchJewellery()
    }, [])

   const fetchJewellery = () => {
        fetch('https://fakestoreapi.com/products/category/jewelery', {
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
                    setJewellery(result)
                    
                }
        })
    }

    const jewelleryItems = jewellery.map((jewel, index) => {
        
        return <div key ={index} className ='liContainer'>
           
           <div className = 'productImage'>
            <img src = {jewel.image} style={{ width: '150px', height:'150px', padding:'7px'}} alt='jewellery pictures' />
           </div>
           <h6 className='product-id'>Item id:{jewel.id}</h6>
           <div className='product-content'>
           <h6><span><strong>Name:</strong> </span> {jewel.title}</h6>
                <h6>{jewel.descriprtion}</h6>
                <div className='priceAndrate'>
                    <h6><span><strong>Rating: </strong></span>{jewel.rating.rate}<AiFillStar style={{ color: 'ffbe0b'}}size={15}/></h6>
                    <h5 className='price'>${jewel.price}</h5>
                </div>
            </div>
            <button className='addButton' onClick={() => props.onAddToCart(jewel)}>Add to my cart</button>
            </div>
    })

    return (
        <>
        <h1 className='mainTitle'>Jewellery <FcBookmark size={35}/></h1>
        <div className='productContainer'>
        {jewelleryItems}
        </div>
        </>
    )
}
const mapDispatchToProps =(dispatch) => {
    return {
        onAddToCart: (value) => dispatch({type: 'ADD_TO_CART', payload:value})
    }
}

export default connect(null, mapDispatchToProps)(Jewellery)