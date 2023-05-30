import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiOutlineDoubleRight } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

import logo from '../../src/assets/logo.png';

import '../css/Navbar.css';
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const [searchItem, setSearchItem] = useState(false);

  const handleSearch = () => {
    setSearchItem(!searchItem);
  };

  return (
    <div className=''>
      <div className='flex justify-between items-center  max-w-[1240px] mx-auto px-4 text-white header'>
        <img src={logo} alt='logo' className='mt-3' width={90} />
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
        <ul className='hidden md:flex text-[#00df9a] font-text'>
          <NavLink to='/' activeClassName='text-[#00df9a]' className='p-4'>Home</NavLink>
          <NavLink to='/company' activeClassName='text-[#00df9a]' className='p-4'>Company</NavLink>
          <li className='p-4'>About</li>
          <NavLink to='/contact' activeClassName='text-[#00df9a]' className='p-4'>Contact</NavLink>
        </ul>

        <input type='text' placeholder='Search' className={searchItem ? 'rounded-lg bg-black text-white border-2 border-teal-300 ' : 'hidden'} />

        <div onClick={handleSearch}>
          {searchItem ? <AiOutlineDoubleRight size={20} /> : <AiOutlineSearch size={20} />}
        </div>

        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul className={nav ? 'block md:hidden fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>Company</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4'>Contact</li>
        </ul>

      </div>

    </div>

  );
};

export default Navbar;