import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  
  const [cartproduct, setCart] = useState([]); 
  const [totalPrice, setTotalPrice] = useState(0); 
  const [allTimes, setAllTimes] = useState(0); 
  const [remaining, setRemaining] = useState(0); 

  
  const handleSelectedToCart = (course) => {
    
    const isExist = cartproduct.find(item => item.id === course.id);

    let credit = course.time_hour;
    let count = course.price;

    if (isExist) {

      return toast('You have already added'); 

    } 
    
    else {
      
      cartproduct.forEach(item => {
        count += item.price;
      });

      cartproduct.forEach(times => {
        credit += times.time_hour;
      });

      
      if (credit >= 20) {

        return toast("You don't have enough credit balance");

      } 
      
      else {
        
        const totalRemaining = 20 - credit;
        setRemaining(totalRemaining);
        setAllTimes(credit);
        setTotalPrice(count);

        
        const newCartProduct = [...cartproduct, course];
        setCart(newCartProduct);
      }
    }
  }

  
  return (
    <>
      <Header></Header>
      <div className='flex'>
        <Courses handleSelectedToCart={handleSelectedToCart}></Courses>
        <Cart cartproduct={cartproduct} allTimes={allTimes} remaining={remaining} totalPrice={totalPrice}></Cart>
      </div>
      
      <ToastContainer/>
    </>
  )
}


export default App;
