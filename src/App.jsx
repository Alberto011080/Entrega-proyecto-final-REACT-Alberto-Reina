import "./style/App.css"
import  {BrowserRouter, Routes, Route} from "react-router-dom"
import React from 'react'
import Navbar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'
import Footer from "./components/Footer"
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"
import ItemDetailsContainer from "./components/ItemDetailsContainer 2"
import NotFound from "./components/NotFound"
import {CarritoProvider}  from "./components/context/CartContext.jsx"
//Esta entre corchetes porque no tiene un export por default... en principio era un js



  function App() {
  return (
    <BrowserRouter>
      <CarritoProvider>
        <Navbar />
        <Routes>        
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:cid" element = {<ItemListContainer/>} />
            <Route path="/product/:pid" element = {<ItemDetailsContainer/>}/>
            <Route path="/cart" element={<Cart/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="*" element={<NotFound/>} />           
        </Routes>
        <Footer />  
      </CarritoProvider>
    </BrowserRouter>
  )
}

export default  App;

