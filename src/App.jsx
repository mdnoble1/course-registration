import './App.css';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import Bookmarks from './components/Bookmarks/Bookmarks';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  
  const [bookMarks, setBookMarks] = useState([]); 
  const [totalPrice, setTotalPrice] = useState(0); 
  const [allTimes, setAllTimes] = useState(0); 
  const [remaining, setRemaining] = useState(0); 

  
  const handleSelectedToCart = (course) => {
    
    const isExist = bookMarks.find(item => item.id === course.id);

    let credit = course.time_hour;
    let count = course.price;

    if (isExist) {

      return toast('You have already added'); 

    } 
    
    else {
      
      bookMarks.forEach(item => {
        count += item.price;
      });

      bookMarks.forEach(times => {
        credit += times.time_hour;
      });

      
      if (credit >= 20) {

        return toast("You don't have enough credit balance");

      } 
      
      else {
        
        const totalRemaining = 20 - credit;
        setRemaining(totalRemaining);
        setAllTimes(credit);
        setTotalPrice(count.toFixed(2));

        
        const newBookMarks = [...bookMarks, course];
        setBookMarks(newBookMarks);
      }
    }
  }

  
  return (
    <>
      <Header></Header>
      <div className='flex'>
        <Courses handleSelectedToCart={handleSelectedToCart}></Courses>
        <Bookmarks bookMarks={bookMarks} allTimes={allTimes} remaining={remaining} totalPrice={totalPrice}></Bookmarks>
      </div>
      
      <ToastContainer/>
    </>
  )
}


export default App;
