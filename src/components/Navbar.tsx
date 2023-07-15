'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { navLinks } from '@/constants';
import { logo, menu, close } from '@/assets';
import Image from 'next/image';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex justify-center paddingX py-5 fixed top-0 z-20 bg-primary">
      <div className="w-full flex justify-between items-center max-w-7xl max-auto ">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0); // Scroll to top of page
          }}
        >
          <Image
            src={logo}
            alt="Cruz Interactive Logo"
            width={36}
            height={36}
            style={{ objectFit: 'contain' }}
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            William &nbsp;
            <span className="sm:block hidden"> | JS and Java Mastery</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image
            src={toggle ? close : menu}
            width={toggle ? 18 : 20}
            height={toggle ? 18 : 12}
            alt="Menu"
            style={{ cursor: 'pointer' }}
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'text-white' : 'text-secondary'
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
