/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, useContext } from 'react';

// Import icons
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from "@headlessui/react";
import { HouseContext } from './HouseContext'; // تأكد من أن اسم السياق مطابق

const PropertyDropdown = () => {

  const { property, setProperty, properties } = useContext(HouseContext); // استخدام HouseContext

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu as='div' className='relative dropdown'>
      <Menu.Button 
        onClick={() => setIsOpen(!isOpen)}
        className='w-full text-left dropdown-btn'
      >
        <RiHome5Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{property}</div>
          <div className='text-[13px]'>Select your place</div>
        </div>
        {isOpen ? (
                    <RiArrowDownSLine className='dropdown-icon-secondary' />

        ) : (
          <RiArrowUpSLine className='dropdown-icon-secondary' />

        )}
      </Menu.Button>
      
      {/* تأكد من إضافة ul حول Menu.Items */}
      <Menu.Items as='ul' className='dropdown-menu'>
        {properties.map((property, index) => (
          <Menu.Item
            as='li'
            key={index}
            onClick={() => setProperty(property)}
            className='px-4 py-2 transition cursor-pointer hover:bg-violet-100'
          >
            {property}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
