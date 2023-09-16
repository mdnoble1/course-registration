import './App.css'
import Header from './components/Header/Header'
import Courses from './components/courses/courses'

function App() {

  return (
    <>
      <Header></Header>
      <main className='container mx-auto my-16'>
        <Courses></Courses>
      </main>
    </>
  )
}

export default App
