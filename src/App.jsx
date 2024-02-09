import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './Routes'
import './App.css'
import Fries from './components/Fries'
import Sidebar from './components/Sidebar'
import CreatePost from './components/CreatePost'
import AuthPage from './Pages/AuthPage'
import Profile from './Pages/Profile'
import Content from './Pages/Content'
import PersonMessage from './Pages/PersonMessage'

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
            {/* <Router>
              <AppRoutes />
            </Router> */}
           
            <div className='mb-[12rem]'>
                <Profile />
            </div>
            <div className='mb-[12rem]'>
 <Content />
            </div>
           
            <PersonMessage/>

            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
