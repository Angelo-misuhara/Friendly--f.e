import React, { useState } from 'react'

const Fries = () => {
    const [onlick, setonlick] = useState(false)
   console.log(onlick)
  return (
     <>
       
        <div className='flex justify-end flex-col w-full md:hidden fixed left-0 z-50 top-0 ' >
            <div className='flex pt-2 justify-center items-center  '>
           <h1 className='text-2xl font-black' id='titleLogoCP'>Freindly</h1>
        </div>
            <div className=''>
               <img src="img/menu.png" onClick={()=>setonlick(!onlick)} alt="" />
            </div>
          {onlick &&   <ul className=''id='fries'>
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
            </ul>}
         </div>
   </>
  )
}

export default Fries