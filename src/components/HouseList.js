import React, { useContext } from 'react';
import { HouseContext } from './HouseContext';
import House from './House';  // تأكد من أن مسار الاستيراد صحيح
import { Link } from 'react-router-dom';
import { ImSpinner2 } from 'react-icons/im';

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);

  console.log(houses);



// if loading is true 

if (loading) {
  return (
    <ImSpinner2 className='mx-auto animate-spin text-violet-700 text-4xl mt-[200px]' />
  );
}

if(houses.lenght < 1 ){
  return <div>Sorry, nothing found</div>
}

  return (
    <>
      <section className='mb-20'>
        <div className='container mx-auto'>
  
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg-gap-14 '>
              {houses.map((house, index) => (
                <Link to={`/property/${house.id}`} key={index}>
                  <House house={house} />
                </Link>
              ))}
            </div>
          
        </div>
      </section>
    </>
  );
};

export default HouseList;
