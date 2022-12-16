import {NavLink} from "react-router-dom";
import '../style/style.css';
import '../style/header.css';
import {connect} from 'react-redux';
import { FaShoppingCart} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle} from "react-icons/fa";



function Header (props) {
    const userName = localStorage.getItem('name')
    const cart = (
        <span className='cart'>
          <Link to="/mycart">
            Cart
            <FaShoppingCart size={20} /> <p>{props.quantity}</p>
          
          </Link>
        </span>
    );

    return (
        <div className="header">
             { props.isAuth ?<h4 className="username"> <FaUserCircle  size={30} />Hi, {userName}</h4>: null  }
            <NavLink to = "/" className="nav_link" style={{ textDecoration: 'none'}}><h3 className="navLink">Home</h3></NavLink>
            { props.isAuth ? <NavLink to = "/categories" className="nav_link" style= {({isActive}) => isActive ? { 
                textDecoration: 'none' ,
                color:  '#ff8600',
                
                } : { textDecoration: 'none', color: ' #fcefef' }
                  
                }>
                     <h3 className="navLink"> Categories</h3>
                </NavLink>: null  }
            {/* <button>Search</button> */}
            { props.isAuth ? <NavLink to = "/mycart" className="nav_link" style={{ textDecoration: 'none' }}> <h3 className="navLink"><FaShoppingCart size={30} />{props.quantity}</h3></NavLink>: null  }
            {props.isAuth ? null: <NavLink to = "/login" className="nav_link" style={{ textDecoration: 'none' }}><h3 className="navLink">Login</h3></NavLink>}
            { props.isAuth ? <NavLink to = "/signout"  className="nav_link" style={{ textDecoration: 'none' }}><h3 className="navLink">Logout</h3></NavLink>: null  }
            {props.isAuth ? null: <NavLink to = "/registration" className="nav_link" style={{ textDecoration: 'none' }}><h3 className="navLink">Registration</h3></NavLink>}
        </div>
    )
}

const mapStateToProps =(state) =>{
    return {
        myCart: state.products.length,
        quantity: state.quantity,
        isAuth: state.isAuthenticated
        
    }
}

export default connect (mapStateToProps)(Header)

