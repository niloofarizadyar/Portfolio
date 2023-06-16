import React from 'react'
import headerImage from './../assets/Header.JPG'

const Header = () => {
  return (
    <div className='relative flex items-center' >
      
      <img className='w-full' src={headerImage} />
      <div className='absolute left-[5%]'>
        <p className='text-1xl md:text-3xl lg:text-5xl font-bold'>Hello, my name is <br /><span className='text-darkRoseBrown'>Nazanin</span></p>
        <p className='text-1xl md:text-3xl lg:text-5xl'>I'm <span className='text-darkRoseBrown'>Freelancer Designer</span>.</p>
        {/* href should be changed to download link. */}
        <a target='_blank' href='https://www.google.com/'>
          <button className='text-[10px] md:text-sm text-center p-2 mt-2 bg-lightRoseBrown hover:bg-darkRoseBrown transition-colors duration-500 ease-in-out rounded'>Download CV</button>
        </a>
      </div>
    </div>
  )
}

export default Header