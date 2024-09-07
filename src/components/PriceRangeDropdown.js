/* eslint-disable no-unused-expressions */
import React, { useState, useContext } from 'react';

// Import icons
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from "@headlessui/react";
import { HouseContext } from './HouseContext';

const PriceRangeDropdown = () => {

  const { price, setPrice} = useContext(HouseContext); // التأكد من استخدام HouseContext بشكل صحيح

  const [isOpen, setIsOpen] = useState(false);

const prices = [
  {
    value: 'price range (any)',
  },
  {
    value: '10000 -13000',
  },
  {
    value: '130000 -16000',
  },
  {
    value: '160000 -19000',
  },
  {
    value: '190000 -22000',
  },
  {
    value: '10000 -30000',
  },
  {
    value: '30000 -40000',
  },
]


  return (
    <Menu as='div' className='relative dropdown'>
      <Menu.Button 
        onClick={() => setIsOpen(!isOpen)}
        className='w-full text-left dropdown-btn'
      >
        <RiWallet3Line className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{price}</div>
          <div className='text-[13px]'>Choose price range </div>
        </div>
        {isOpen ? (
          <RiArrowUpSLine className='dropdown-icon-secondary' />
        ) : (
          <RiArrowDownSLine className='dropdown-icon-secondary' />
        )}
      </Menu.Button>
      
      {/* تأكد من إضافة ul حول Menu.Items */}
      <Menu.Items as='ul' className='dropdown-menu'>
        {prices.map((price, index) => (
          <Menu.Item
            as='li'
            key={index}
            onClick={() => setPrice(price.value)}
            className='px-4 py-2 transition cursor-pointer hover:bg-violet-100'
          >
            {price.value}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
