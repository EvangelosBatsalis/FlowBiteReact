import React, { useState, useEffect } from 'react';
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';
import { Link } from 'react-router-dom';
import 'flowbite';

const navItems = [
  { name: 'Αρχική', path: '/' },
  { name: 'Το φροντιστήριο', path: '/about' },
  { name: 'Υπηρεσίες', path: '/services' },
  { name: 'Επιτυχίες', path: '/success' },
  { name: 'Ραντεβού', path: '/appointment' },
  // { name: 'Επικοινωνία', path: '/contact' }
];

export function FlNavBar() {
  useEffect(() => {
    // Initialize Flowbite dropdown functionality
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/flowbite@latest/dist/flowbite.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <Navbar fluid rounded className="shadow-xl">
      <NavbarBrand href="https://flowbite-react.com">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button>Επικοινωνία</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        {navItems.map((item, index) => {
          if (item.name === 'Ραντεβού') {
            return (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <NavbarLink
                  as="span"
                  className="text-black font-bold cursor-pointer hover:text-blue-500"
                >
                  {item.name}
                </NavbarLink>
                {isDropdownOpen && (
                  <div
                    id="dropdownDelay"
                    className="z-10 absolute left-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                      <li>
                        <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          Settings
                        </Link>
                      </li>
                      <li>
                        <Link to="/earnings" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          Earnings
                        </Link>
                      </li>
                      <li>
                        <Link to="/signout" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                          Sign out
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            );
          } else {
            return (
              <NavbarLink
                as={Link}
                to={item.path}
                key={index}
                className="text-black font-bold hover:text-blue-500"
              >
                {item.name}
              </NavbarLink>
            );
          }
        })}
      </NavbarCollapse>
    </Navbar>
  );
}
