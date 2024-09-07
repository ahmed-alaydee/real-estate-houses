/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, useContext } from 'react';

// Import icons
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from "@headlessui/react";
import { HouseContext } from './HouseContext'; // تأكد من أن اسم السياق مطابق

const CountryDropdown = () => {

  const { country, setCountry, countries } = useContext(HouseContext); // تأكد من استخدام HouseContext


  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as='div' className='relative dropdown'>
      <Menu.Button 
        onClick={() => setIsOpen(!isOpen)}
        className='w-full text-left dropdown-btn'
      >
        <RiMapPinLine className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{country}</div>
          <div className='text-[13px]'>Select your place</div>
        </div>
        {isOpen ? (
            <RiArrowUpSLine className='dropdown-icon-secondary' />

        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />

        )}
      </Menu.Button>
      
      {/* تأكد من إضافة ul حول Menu.Items */}
      <Menu.Items as='ul' className='dropdown-menu   '>
        {countries.map((country, index) => (
          <Menu.Item
            as='li'
            key={index}
            onClick={() => setCountry(country)}
            className='px-4 py-2 transition cursor-pointer hover:bg-violet-100'
          >
            {country}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default CountryDropdown;
