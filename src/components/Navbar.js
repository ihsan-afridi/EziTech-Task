import React from 'react';
import heart from '../assets/heart.png'
import search from '../assets/search.png'


const Navbar = () => {
  return (
    <div className=' border-b border-b-1 border-b-gray-500 navbar-container  font-bold text-black  bg-transparent' style={{ background: 'transparent' }}>
  {/* Left-side Menu Items */}
  <div className='flex items-center justify-between'>
    {/* Logo and Menu Items Container */}
    <div className='flex items-center space-x-6 ml-4'>
      <div className='logo font-bold text-[30px]'>
        <img 
          src="http://ezitech.org/wp-content/uploads/2024/07/blue-official.png" 
          alt="Logo" 
          className="logo" 
          style={{ height: '80px', width: '200px' }} 
        />
      </div>
      {/* Navbar Menu Items */}
      <ul className='hidden md:flex text-lg font-sm'>
        <li className='hover:text-blue-200 text-white cursor-pointer ml-10 mr-4'>Home</li>
        <li className='hover:text-blue-200 text-white cursor-pointer mr-12'>About Us</li>
        <li className='hover:text-blue-200 text-white cursor-pointer mr-12'>Certifications</li>
        <li className='hover:text-blue-200 text-white cursor-pointer mr-12'>Career</li>
        <li className='hover:text-blue-200 text-white cursor-pointer mr-12'>Seminar</li>
        <li className='hover:text-blue-200 text-white cursor-pointer mr-12'>Tech Blog</li>
        <li className='hover:text-blue-200 text-white cursor-pointer'>iPortal Login</li>
      </ul>
    </div>
    {/* Right-side Icons */}
    <div className='flex items-center space-x-4 mr-4'>
      <img 
        src={heart} 
        alt='Heart Icon' 
        className='h-8 w-8 cursor-pointer' 
      />
      <img 
        src={search} 
        alt='Search Icon' 
        className='h-8 w-8 cursor-pointer' 
      />

    </div>
  </div>
</div>

  );
};

export default Navbar;


