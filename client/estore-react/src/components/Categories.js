import {useState, useEffect} from 'react'
import Electronics from './Electronics'
import myimage from '../assets/electro.jpg'
import men from '../assets/men.jpg'
import women from '../assets/women.jpg'
import jewellery from '../assets/jewellery.jpg'
import '../style/style.css'
import  '../style/product.css';
import  '../style/categories.css';
import {NavLink} from "react-router-dom";
import { AiFillStar} from "react-icons/ai";
import { FcBookmark} from "react-icons/fc";





function Categories () {

   const [categories, setCategories] = useState([])
   

   useEffect(() => {
      fetchCategories()
    }, [])

   const fetchCategories = () => {
        fetch('https://fakestoreapi.com/products/categories', {
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
                    setCategories(result)
                    
                }
        })
    }

    const CatItems = categories.map(cat => {
        
        return <li>
            {/* <h2>{cat}</h2> */}
            
            </li>
    })

    return (
        <>
        <h1 className='mainTitle'>Categories <FcBookmark size={35}/></h1>
            <div className='category-container'>
                <div className='category'>
                <NavLink to = "/electronics" ><img src ={myimage} className = 'categoryImage' alt='electro'/></NavLink>
                <h3 className='categoryTitle'>Electronics</h3>
                </div>
                <div className='category'>
                <NavLink to = "/mens-cloth" ><img src ={jewellery} className = 'categoryImage' alt='men'/></NavLink>
                <h3 className='categoryTitle'>Jewellery</h3>
                </div>
                <div className='category'>
                <NavLink to = "/womens-cloth" ><img src ={women} className = 'categoryImage' alt='women' /></NavLink>
                <h3 className='categoryTitle'>Women's Clothing</h3>
                </div>
                <div className='category'>
                <NavLink to = "/jewellery" ><img src ={men} className = 'categoryImageMen'  alt='jewelery'/></NavLink>
                <h3 className='categoryTitle'>Men's Clothing</h3>
                </div>
            </div>
        
        </>
    )
}

export default Categories 