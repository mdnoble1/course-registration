import './App.css'
import Header from './components/Header/Header'
import Courses from './components/courses/courses'
import Cart from './components/Cart/Cart'
import { useState } from 'react'

function App() {

  const [cartItems , setCartItems] = useState([]);

  const handleAddToCart = () => {
    console.log('cart add')
  }

  return (
    <>
      <Header></Header>
      <main className='container mx-auto my-16 flex justify-between gap-6'>
        <Courses handleAddToCart = {handleAddToCart}></Courses>
        <Cart></Cart>
      </main>
    </>
  )
}

export default App
