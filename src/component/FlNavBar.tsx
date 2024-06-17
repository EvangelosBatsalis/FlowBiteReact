// import React from 'react';
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
import { Link } from 'react-router-dom';

const navItems = [
  { name: 'Αρχική', path: '/' },
  { name: 'Το φροντιστήριο', path: '/about' },
  { name: 'Υπηρεσίες', path: '/services' },
  { name: 'Επιτυχίες', path: '/success' },
  { name: 'Ραντεβού', path: '/appointment' },
  { name: 'Επικοινωνία', path: '/contact' }
];

export function FlNavBar() {
  return (
    <Navbar fluid rounded className="shadow-xl">
      <NavbarBrand href="https://flowbite-react.com">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        {navItems.map((item, index) => (
          <NavbarLink as={Link} to={item.path} key={index} className="text-black font-bold">
            {item.name}
          </NavbarLink>
        ))}
      </NavbarCollapse>
    </Navbar>
  );
}
