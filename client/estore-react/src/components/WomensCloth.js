import {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import { AiFillStar} from "react-icons/ai";
import { FcBookmark} from "react-icons/fc";
import  '../style/style.css';
import  '../style/product.css';


function WomenCloth(props) {

   const [women, setWomen] = useState([])
   

   useEffect(() => {
    fetchWomen()
    }, [])

   const fetchWomen = () => {
        fetch('https://fakestoreapi.com/products/category/women%27s%20clothing', {
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
                    setWomen(result)
                    
                }
        })
    }

    const womenItems = women.map((womens, index) => {
        return <div key ={index} className ='liContainer'>
            <div className = 'productImage'>
           <img style={{ width: '150px', height:'150px', padding:'7px'}}  src = {womens.image} alt='womens pictures' />
           </div>
           <h6 className='product-id'>Item id:{womens.id}</h6>
           <div className='product-content'>
                <h6><span><strong>Name:</strong> </span>{womens.title}</h6>
                <h6>{womens.descriprtion}</h6>
                <div className='priceAndrate'>
                    <h6><span><strong>Rating: </strong></span>{womens.rating.rate}</h6>
                    <h5 className='price'>${womens.price}</h5>
                </div>
           </div>
            <button className='addButton' onClick={() => props.onAddToCart(womens)}>Add to my cart</button>
            </div>
    })

    return (
        <>
        <h1 className='mainTitle'>Women's Cloth <FcBookmark size={35}/></h1>
        <div className='productContainer'>
        {womenItems}
        </div>
        </>
    )
}
const mapDispatchToProps =(dispatch) => {
    return {
        onAddToCart: (value) => dispatch({type: 'ADD_TO_CART', payload:value})
    }
}

export default connect(null, mapDispatchToProps) (WomenCloth)