import React from 'react';

// import image 
import Image from "../assets/img/house-banner.png"

import Search from "../components/Search"

const Banner = () => {
  return (
<>
<section className='h-full max-h-[640px] mb-8 xl:mb-24'>
  <div className='flex flex-col lg:flex-row'>
<div className='lg:ml-8 xl:ml-[-4px] mt-4 flex flex-col items-center lg:items-start text-center lg:text-left l:text-left
justify-center flex-1 px-4 lg:px-0 '>
  
  <h1 className='text-3xl lg:text-[58px] m-:text-[60px]  font-semibold leading-none mb-6 '>
    <span className='text-violet-700'>Rent</span> Your Dream House With Us </h1>
  <p className='max-w-[480px] mb-8'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec odio ac ex faucibus lobortis. Aliquam erat volutpat. Nullam dapibus, nunc eget bibendum bibendum, mi ligula auctor velit, vel sagittis nisi libero vel urna. Nulla facilisi. In consequat, felis vel vestibulum scelerisque, mauris metus bibendum lectus, in facilisis velit velit vel est. Integer consectetur, lectus ut convallis consectetur, lectus metus bib
  </p>
</div>
{/**image */}
<div className='items-end justify-end flex-1 hidden lg:flex '>
  <img src=  {Image} alt='' className='max-w-[80%]'/> 
</div>
</div>
<Search/>

</section>
</>
  );
};

export default Banner;
