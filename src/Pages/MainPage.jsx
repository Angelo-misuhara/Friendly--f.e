import React from 'react'
import Fries from '../components/Fries.jsx'
import Sidebar from '../components/Sidebar.jsx'
import Content from './Content.jsx'
import Profile from './Profile.jsx'


const MainPage = () => {
  return (
    <div className="flex flex-row ">
      <div className="basis-80 hidden md:block">
        <Sidebar />
      </div>
      <div className='block md:hidden'>
        <Fries />
      </div>
      <div className="md:basis-4/5 mt-11 lg:mx-32 ">
       
     
        {/* <Content /> */}
        <Profile/>
        
      </div>
    </div>
  )
}

export default MainPage