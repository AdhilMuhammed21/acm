import React from 'react'

const Hero = () => {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center bg-gradient-to-b from-[#84B7F2] to-[#113056] overflow-y-hidden'>
      <h1 className='text-[150px] md:text-[300px] font-bold text-transparent font-outline-4 -mt-40'>ACM</h1>
      <p className='text-[30px] text-center md:text-[70px] md:-mt-28 text-white'>Association for Computing Machinery</p>
      <h1 className='pt-[90px]  md:text-[40px]  font-bold text-white pt-[300px] underline'>About</h1>
      <p className=' px-8 md:text-[20px] text-white px-32'> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
  
  )
}

export default Hero