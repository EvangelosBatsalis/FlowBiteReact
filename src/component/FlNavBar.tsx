import React from 'react';
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, Dropdown, DropdownItem } from 'flowbite-react';
import { Link } from 'react-router-dom';

const navItems = [
  { name: 'Αρχική', path: '/' },
  { name: 'Το φροντιστήριο', path: '/about' },
  { name: 'Υπηρεσίες', path: '/services' },
  { name: 'Επιτυχίες', path: '/success' },
  { name: 'Ραντεβού', path: '/appointment' },
  // { name: 'Επικοινωνία', path: '/contact' }
];

export function FlNavBar() {
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
              <Dropdown
                label={<span className="text-black font-bold">{item.name}</span>}
                inline
                key={index}
              >
                <DropdownItem>Dashboard</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem>Earnings</DropdownItem>
                <DropdownItem>Sign out</DropdownItem>
              </Dropdown>
            );
          } else {
            return (
              <NavbarLink as={Link} to={item.path} key={index} className="text-black font-bold">
                {item.name}
              </NavbarLink>
            );
          }
        })}
      </NavbarCollapse>
    </Navbar>
  );
}
