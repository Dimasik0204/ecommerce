import {useState, useEffect} from 'react'
import  '../style/style.css';
import {connect} from 'react-redux'
import '../style/style.css';
import  '../style/product.css';
import { AiFillStar} from "react-icons/ai";
import { FcBookmark} from "react-icons/fc";


function MensCloth(props) {

   const [men, setMen] = useState([])
   

   useEffect(() => {
    fetchMen()
    }, [])

   const fetchMen = () => {
        fetch('https://fakestoreapi.com/products/category/men%27s%20clothing', {
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
                    setMen(result)
                    
                }
        })
    }

    const menItems = men.map((mens, index) => {
     
        return <div key ={index} className ='liContainer'>
           
           <div className = 'productImage'>
           <img style={{ width: '150px', height:'150px', padding:'7px'}} src = {mens.image} alt='menscloth' />
           </div>
            <h6 className='product-id'>Item id:{mens.id}</h6>
            <div className='product-content'>
                <h6><span><strong>Name:</strong> </span> {mens.title}</h6>
                <h6>{mens.descriprtion}</h6>
                <div className='priceAndrate'>
                    <h6><span><strong>Rating: </strong></span>{mens.rating.rate}<AiFillStar style={{ color: 'ffbe0b'}}size={15}/></h6>
                    <h5 className='price'>${mens.price}</h5>
                </div>
            </div>
            <button className='addButton' onClick={()=> props.onAddToCart(mens)}>Add to my cart</button>
            </div>
    })

    return (
        <>
        <h1 className='mainTitle'>Men's Cloth<FcBookmark size={35}/></h1>
        <div className='productContainer'>
        {menItems}
        </div>
        </>
    )
}
const mapDispatchToProps =(dispatch) => {
    return {
        onAddToCart: (value) =>dispatch({type:'ADD_TO_CART', payload:value})
    }
}
export default connect (null, mapDispatchToProps)(MensCloth) 