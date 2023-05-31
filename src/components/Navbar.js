import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiOutlineDoubleRight } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import { LuLogIn, LuLogOut } from "react-icons/lu";

import { NavLink } from 'react-router-dom';

import logo from '../../src/assets/logo.png';
import anh from '../../src/assets/applyjob.jpg';

import '../css/Navbar.css';
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const [searchItem, setSearchItem] = useState(false);

  const clickSearch = () => {
    setSearchItem(!searchItem);
  };

  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    setLogin(!login);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const [logout, setLogout] = useState(false);

  const handleLogout = () => {
    setLogout(!logout);
  };
  return (
    <div className=''>
      <div className='flex justify-between items-center  max-w-[1540px] mx-auto px-4 text-white header'>
        <img src={logo} alt='logo' className='mt-3' width={90} />
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
        <ul className='hidden md:flex text-[#00df9a] font-text'>
          <NavLink to='/' className='p-4'>Home</NavLink>
          <NavLink to='/company' className='p-4'>Company</NavLink>
          <li className='p-4'>About</li>
          <NavLink to='/contact' className='p-4'>Contact</NavLink>
          <li className='p-4'>CV</li>
        </ul>

        <input type='text' placeholder='Search' className={searchItem ? 'rounded-lg bg-black text-white border-2 border-teal-300 h-' : 'hidden'} />

        <div onClick={clickSearch}>
          {searchItem ? <AiOutlineDoubleRight size={25} /> : <AiOutlineSearch size={25} />}
        </div>

        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div onClick={handleOpen}>
          {!login ? <FaUserAlt className='block ml-3' size={25} /> : ''}
        </div>

        <div >
          {isOpen ?
            <div className='block fixed mt-5 right-36 bg-black rounded-lg w-48 '>
              <div className='text-[#00df9a] font-bold hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white flex items-center'>
                <LuLogIn size={20} className='mt-1 mr-1' />
                <NavLink to='/login' className='mt-1' >Login</NavLink>
              </div>
              <li className='p-2'>Register</li>
            </div>
            : ''}
        </div>

        <div className={login ? 'flex items-center md:order-2 ml-3': 'hidden'}>
          <button onClick={handleLogout} type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
            <span className="sr-only">Open user menu</span>
            <img className="w-24 h-9 rounded-full" src={logo} alt="user photo" />
          </button>
        </div>

        <div >
          {logout ?
            <div className='block fixed mt-7 bg-black rounded-lg w-48 '>
              <div className='text-[#00df9a] font-bold hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white flex items-center'>
                <LuLogIn size={20} className='mt-1 mr-1' />
                <NavLink to='/login' className='mt-1' >Logout</NavLink>
              </div>
            </div>
            : ''}
        </div>


        <ul className={nav ? 'block md:hidden fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Company</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4 border-b border-gray-600'>Contact</li>
          <li className='p-4 border-b border-gray-600'>CV</li>
          <li className='p-4 border-b border-gray-600'>Login</li>
          <li className='p-4'>Register</li>
        </ul>
      </div>

    </div>

  );
};

export default Navbar;