import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './Routes'
import './App.css'
import Fries from './components/Fries'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
      <div className='bg-[#101010]'>
        <div className="flex flex-row ">
          <div className="basis-80 hidden md:block">
            <Sidebar />
          </div>
          <div className='block md:hidden'>
            <Fries />
          </div>
          <div className="md:basis-4/5 mt-11 lg:mx-32 ">
            <Router>
              <AppRoutes />
            </Router>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
