import {Carousel, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import men from '../assets/mens style.jpg'
import electro from '../assets/camera1.jpg'
import women from '../assets/womens cloths.jpg'
import {NavLink} from "react-router-dom";
import  '../style/style.css';

function ImageCarousel() {
    return (
     
        <Carousel>
          <Carousel.Item >
            <img
              className="d-block w-100"
              src={electro}
              alt="First slide"
              style={{height:'720px'}}
            
              
            />
            <Carousel.Caption >
              <div className='shopnow'>
              <h3>Awesome Gadgets</h3>
              <p>Up to 30% off on all onsale proucts.</p>
              <NavLink to = "/electronics"><Button variant="primary">Shop Now</Button></NavLink>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item >
            <img
              className="d-block w-100"
              src={men}
              alt="Second slide"
              style={{height:'720px'}}
            />
          
            <Carousel.Caption >
              <div className='shopnow'>
              <h3>Men Fashion</h3>
              <p>Up to 30% off on all onsale proucts</p>
              <NavLink to = "/mens-cloth"><Button variant="primary">Shop Now</Button></NavLink>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item >
            <img
              className="d-block w-100"
              src={women}
              alt="Third slide"
              style={{height:'720px', position: 'relaive'}}
            />
    
            <Carousel.Caption >
              <div className='shopnow'>
              <h3>Women Fashion</h3>
              <p>
              Up to 30% off on all onsale proucts..
              </p>
              <NavLink to = "/womens-cloth"><Button variant="primary">Shop Now</Button></NavLink>
              </div>
              
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      );
    }
    
    export default ImageCarousel;