import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const Navbar = () => {
    const [drawer,setdrawer] = useState(false)
    const handleclick = () =>{
        console.log("jdbwvh")
        setdrawer(!drawer)
    }
  return (
    <>
    <div className='hidden md:flex justify-center item-center pt-8 pb-3 bg-[#84B7F2] h-24 w-screen'>
        <div className='flex gap-20 text-2xl h-full  text-white font-bold item-center'>
            <h1>Home</h1>
            <h1>Events</h1>
            <h1>Execom</h1>
        </div>
    
    </div>
    <div className='md:hidden flex justify-between bg-[#84B7F2]  pt-8 pb-3 h-24 w-screen p-2'>
        <div>

        </div>
        <div>
            <img></img>
        </div>
        <div>
            {drawer?<div onClick={handleclick}><CloseIcon /></div>:<div onClick={handleclick}><MenuIcon /></div>}
        </div>
    </div>
    {drawer?<div className='w-screen h-screen bg-[#84B7F2] flex flex-col justify-start items-center pt-10 gap-10'>
        <h1>Home</h1>
        <h1>Events</h1>
        <h1>Execom</h1>
    </div>:<></>}
    </>
  )
}

export default Navbar
