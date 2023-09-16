import './App.css'
import Header from './components/Header/Header'
import Courses from './components/courses/courses'
import Cart from './components/Cart/Cart'

function App() {

  return (
    <>
      <Header></Header>
      <main className='container mx-auto my-16 flex justify-between gap-6'>
        <Courses></Courses>
        <Cart></Cart>
      </main>
    </>
  )
}

export default App
