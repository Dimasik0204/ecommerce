import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Electronics from './components/Electronics';
import Baselayout from './components/Baselayout';
import Categories from './components/Categories';
import Jewellery from './components/Jewellery';
import WomenCloth from './components/WomensCloth';
import MensCloth from './components/MensCloth';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';
import MyCart from './components/MyCart';
import StripeContainer from './components/StripeContainer';
import ShippingForm from './components/ShippingForm';
import Registration from './components/Registration';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Signout from './components/Signout';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
// import { PersistGate } from 'redux-persist/integration/react'
// import thunk from 'redux-thunk';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__())

// const persistConfig = {
//   key: 'root',
//   storage,
// }
// const persistedReducer = persistReducer(persistConfig, reducer)
// const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// let persistor = persistStore(store)

const token = localStorage.getItem('jwt')
if(token) {
  // dispatch an action to update the isAuthenticated property in global state 
  store.dispatch({type: 'ON_LOGIN', payload: token})
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
    {/* <PersistGate persistor ={persistor}> */}
  {/* <React.StrictMode> */}
      <BrowserRouter>
      <Baselayout>
        <Routes>
          <Route path = "/" element ={<App/>} />
          <Route path = "/mycart" element ={<ProtectedRoute><MyCart/></ProtectedRoute>} />
          <Route path = "/categories" element ={<ProtectedRoute><Categories/></ProtectedRoute>} />
          <Route path = "/electronics" element ={<Electronics/>} />
          <Route path = "/jewellery" element ={<Jewellery/>} />
          <Route path = "/womens-cloth" element ={<WomenCloth/>} />
          <Route path = "/mens-cloth" element ={<MensCloth/>} />
          <Route path = "/stripe-container" element ={<StripeContainer/>} />
          <Route path = "/shipping-form" element ={<ShippingForm/>} />
          <Route path = "/registration" element ={<Registration/>} />
          <Route path = "/login" element ={<Login />} />
          <Route path = "/signout" element ={<Signout />} />
        </Routes>
      </Baselayout>
      </BrowserRouter>
    {/* </PersistGate> */}
  {/* </React.StrictMode> */}
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
