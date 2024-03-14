import "./style/App.css"
import React from 'react'
import Navbar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemCount from './components/ItemCount'


  function App() {
  return (
    <div>

      <Navbar />
      <ItemListContainer />
      <ItemCount />

    </div>
  )
}

export default  App;

