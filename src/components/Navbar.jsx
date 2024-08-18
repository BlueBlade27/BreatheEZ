import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import {styles} from '../styles';
import { navLinks } from '../constants';
import logoBez from '../assets/logo-bez.png';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="w-full flex items-center py-5 fixed top-0 z-20 bg-blue-600">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto bg-blue-600">
      <Link to="/" className="flex items-center gap-3 bg-blue-600">
        <img src={logoBez} alt="logo" className="w-16 h-16 object-cover rounded-full border-2 border-white" />
        <p className="text-white text-[30px] font-bold cursor-pointer flex bg-blue-600 font-playwrite">BreatheEZ</p>
        </Link>


        <ul className="list-none hidden sm:flex flex-row gap-10 bg-blue-600">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="text-white  hover:text-white text-[18px] font-medium cursor-pointer bg-blue-600"
              onClick={() => scrollToSection(nav.id)}
            >
              {nav.title}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
