import './App.css'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Overview from './Components/Overview'

function App() {

  return (
    <>
    <div className='flex'>
    <Navbar/>
    <span className='w-[90%]'>
    <Header/>
    <Overview/>
    </span>
   
     </div>
    </>
    
  )
}

export default App
