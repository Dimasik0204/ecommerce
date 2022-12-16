
import './App.css';
import Categories from "./components/Categories";
import Electronics from './components/Electronics';
import ImageCarousel from './components/ImageCarousel';
import './style/style.css';
import './style/header.css';
// import ImageSlider from './components/imageSlider';
// import Slider from './components/Slider';

function App() {
  const userName = localStorage.getItem('name')
  return (
    <div className='containerApp'>
      <h3 className='mainTitle'>Welcome/Bonjour, {userName}</h3>
      <div className='mainPage'>
          <div className='mainCarousel'>
          <ImageCarousel />
          </div>
      </div>
    </div>
    
  );
}

export default App;
