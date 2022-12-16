import Header from './Header'
import '../style/style.css'
import '../style/header.css'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GiHummingbird}  from "react-icons/gi"

const logo = (
    <div className='logo'>
      <Link to="/">
        
        <h3 className='name'>Hummingbird</h3><h3 className='logoIcon'><GiHummingbird size={35}/></h3>
        
      </Link>
    </div>
);


  


function Baselayout (props) {
    return (
        <div className='page'>
          <div className='navigation'>
            <div className='containerLogo'>
                <div className='logo'>
                  <Link to="/" className="nav_link" style={{ textDecoration: 'none' }}>                   
                    <h3 className='name'>Hummingbird</h3>
                  </Link>
                  <h3 className='logoIcon'><GiHummingbird size={40}/></h3>
                </div>
            </div>
            <div className='headerComponent'>
            <Header />
            </div>
          </div>
            {props.children}
            <div className='footer'>
              <h6 className='copyright'>Copyright &copy; 2022 Dmitry Shunin Corporate</h6>
            </div>

        </div>
    )
}

export default Baselayout