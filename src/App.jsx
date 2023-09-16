import './App.css'
import Header from './components/Header/Header'
import Cards from './components/courses/Cards'
function App() {

  return (
    <>
      <Header></Header>
      <main className='container mx-auto mt-12'>
        <Cards></Cards>
      </main>
      
    </>
  )
}

export default App
