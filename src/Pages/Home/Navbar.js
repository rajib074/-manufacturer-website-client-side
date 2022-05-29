import React from 'react';

const Navbar = () => {
    return (
        <div>
          <div class="navbar bg-base-100">
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        
      <li><Link to="/">Home</Link></li>
      <li><Link to="/parts">Parts</Link></li>
      <li><Link to="/review">Review</Link></li>
      <li><Link to="/dashbord">Dashbord</Link></li>
      <li><Link to="/">Log in</Link></li>
      

      </ul>
    </div>
    <a class="w-10 lg:mx-5">
      <img src="https://image.shutterstock.com/image-vector/autoparts-gear-auto-piston-spark-260nw-1623130876.jpg" alt=""/>
    </a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal p-0">
    <li><a>Home</a></li>
        <li><a>Parts</a></li>
        <li><a>Review</a></li>
        <li><a>Dashbord</a></li>
        <li><a>Log in</a></li>
        <li><a>Log out</a></li>
    </ul>
  </div>
  
</div>
  
        </div>
    );
};

export default Navbar;