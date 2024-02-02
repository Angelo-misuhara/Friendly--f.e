import React, { useState } from 'react'

const Sidebar = () => {

   return (
      <>
         <aside className='fixed top-0 w-[16rem] left-0 z-40 hidden md:block'>
            <div className='  flex px-7  flex-col h-lvh border-r-[0.5px] border-opacity-50' style={{ borderColor: 'rgba(243, 245, 247, 0.5)' }} >
               <div className='py-14'>
                  <h1 className='font-semiThin text-3xl' id='titleLogo'>Friendly!</h1>
               </div>
               <ul className='flex flex-col '>
                  <li className='hover:bg-slate-500 rounded-lg py-3 cursor-pointer hover:font-black'><div className='flex gap-4 items-center'>
                     <img src="/img/home.png" className='w-9 pl-2 ' alt="" />
                     <p className=''>
                        Home
                     </p>
                  </div></li>
                  <li className='hover:bg-slate-500 rounded-lg py-3 cursor-pointer hover:font-black'><div className='flex gap-4 items-center'>
                     <img src="/img/notif.png" className='w-9 pl-2' alt="" />
                     <p>
                        Notifications
                     </p>
                  </div></li>
                  <li className='hover:bg-slate-500 rounded-lg py-3 cursor-pointer hover:font-black'><div className='flex gap-4 items-center'>
                     <img src="/img/profile.png" className='w-9 pl-2' alt="" />
                     <p>
                        Profile
                     </p>
                  </div></li>
                  <li className='hover:bg-slate-500 rounded-lg py-3 cursor-pointer hover:font-black'><div className='flex gap-4 items-center'>
                     <img src="/img/mess.png" className='w-9 pl-2' alt="" />
                     <p>
                        Messages
                     </p>
                  </div></li>
                  <li className='hover:bg-slate-500 rounded-lg py-3 cursor-pointer hover:font-black'><div className='flex gap-4 items-center'>
                     <img src="/img/create.png" className='w-9 pl-2' alt="" />
                     <p>
                        Post
                     </p>
                  </div></li>
      

               </ul>
               <div className='underline flex  gap-4    py-3 cursor-pointer hover:font-black items-center absolute bottom-14 text-center'>
                  <img src="/img/logout.png" className='w-8 pl-2' alt=""  />
                  <p className=''>
                     Logout
                  </p>
               </div>
            </div>
         </aside>


       
      </>
   )
}

export default Sidebar