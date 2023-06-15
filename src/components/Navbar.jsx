import React, {useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion'

const NavigationItem = ({ href, text }) => {
  return (
      <a href={href} className='text-center w-full p-3 hover:bg-black hover:text-lightRoseBrown transition-colors duration-500 ease-in-out rounded'>{text}</a>
  );
};

const MenuItems = ({active}) => {
  return(
    //transition is not working !
    <div className={`transition-opacity duration-1000 ease-in-out ${active ? 'opacity-100' : 'opacity-0'} `}>
      <div className='rounded shadow bg-black bg-opacity-40 backdrop-blur-sm flex flex-col w-36 items-center absolute right-0 top-14 md:hidden'> 
        <NavigationItem href="#about" text="About" />
        <NavigationItem href="#skills" text="Skills" />
        <NavigationItem href="#collections" text="Collections" />
        <NavigationItem href="#contact" text="Contact Us" />
        </div> 
    </div>
  )
}

const Navbar = () => {
  const [ active, setActive ] = useState(false)

  return (
      <div className='absolute bg-red-600 flex items-center w-full h-14'>
        <div className='bg-blue-600 flex-1 p-2'>
          logo
        </div>
        <div className='hidden md:block flex-none flex justify-end items-center'>
          <NavigationItem href="#about" text="About" />
          <NavigationItem href="#skills" text="Skills" />
          <NavigationItem href="#collections" text="Collections" />
          <NavigationItem href="#contact" text="Contact Us" />
        </div>
        <div className='md:hidden cursor-pointer' onClick={()=>setActive(!active)}>
          { !active ? <MenuIcon className='text-lightRoseBrown'/> : <CloseIcon className='text-lightRoseBrown'/>}  
        </div>
        { active && <MenuItems active={active} />}
      </div>  
  )
}

export default Navbar