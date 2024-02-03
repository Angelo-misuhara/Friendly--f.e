import React from 'react'
import Fries from '../components/Fries.jsx'
import Sidebar from '../components/Sidebar.jsx'
import Content from '../components/Content.jsx'


const MainPage = () => {
  return (
    <div className="flex flex-row ">
      <div className="basis-80 hidden md:block">
        <Sidebar />
      </div>
      <div className='block md:hidden'>
        <Fries />
      </div>
      <div className="md:basis-4/5 mt-11 justify-center  items-center  lg:mx-32 ">
        <div className=' hidden md:flex flex-row pb-3  justify-center  items-center ' id='postNewIdea'>
          <img src="img/profile.png" alt="" />
          <div className=' ml-9 w-full flex  items-center cursor-text'>
            <p> Post a new idea ! ...</p>
          </div>
          <button className='border cursor-not-allowed  rounded-xl px-10'> post</button>
        </div>
        <div>
        <Content/>
        </div>
      </div>
    </div>
  )
}

export default MainPage