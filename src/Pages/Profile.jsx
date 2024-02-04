import React from 'react'
import Save from '../components/Save'
import PostsProfile from '../components/PostsProfile'

const Profile = () => {
  return (
   <div className='flex flex-col mx-4 pt-11 md:mx-0 justify-center items-center  '>
    <div className='flex flex-row gap-6 p-2 pb-4' id='ProfilePage'>
     <div>
      <img src="/img/profileIcon.jpg " alt="" className='rounded-lg w-[160px] md:w-[30rem]' />
     </div>
     <div className='flex flex-col gap-1 md:gap-5 '>
      <h1 className='text-2xl font-black md:text-8xl'>Aya natsumi</h1>
      <h3 className='md:text-4xl cursor-pointer'><span className='font-thin'>3 </span>Post</h3>
      <h5 className=' md:text-4xl text-[.89rem] cursor-pointer'><span className='font-thin '>51 </span>following</h5>
       <h5 className=' md:text-4xl text-[.89rem] cursor-pointer'><span className='font-thin'>51 </span>followers</h5>
     </div>
    </div>
    <div className=' flex flex-row justify-around gap-11 p-4 md:gap-20'>
     <div className='flex flex-row gap-1 items-center cursor-pointer'>
      <div className=''>
       <img src="img/grid.png" alt="" />
      </div>
      <h2 className='font-black'>Posts</h2>
     </div>
      <div className='flex flex-row gap-1 items-center  cursor-pointer'>
      <div>
       <img src="img/save.png" alt="" />
      </div>
      <h2>Saved</h2>
      </div>
    </div>
    <div>
        {/* <Save /> */}
        <PostsProfile/>
    </div>
    </div>
  )
}

export default Profile