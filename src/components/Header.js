import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/img/logo.svg"
const Header = () => {
  return (
<>
<header className='py-6 mb-12 border-b '>
  <div className='container flex items-center justify-between max-auto'>
    

  {/**logo */}
  <Link to='/'>
  <img src={logo} alt=''/>
  </Link>
  
  {/**button */}
  <div className='flex items-center gap-6 '>
    <Link className='transition hover:text-violet-900' to=''>Log in</Link>
    <Link  className='px-4 py-3 text-white transition rounded-lg bg-violet-700 hover:bg-violet-800' to=''>Sign up</Link>

  </div>
  
  </div>
</header>


</>

  );
};

export default Header;
