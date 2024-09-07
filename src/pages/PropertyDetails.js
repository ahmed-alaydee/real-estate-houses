import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { housesData } from '../data';
import { Link, useParams } from 'react-router-dom';

// Import icons
import { BiBed, BiBath, BiArea } from 'react-icons/bi';

const PropertyDetails = () => {
  const { id } = useParams();

  // Get the house based on the id
  const house = housesData.find((house) => house.id === parseInt(id));

  // If the house is not found (optional, useful for handling invalid IDs)
  if (!house) {
    return <div>House not found</div>;
  }

  return (
    <>
      <Header />

      <section className="pt-10 pb-14">
        <div className="container mx-auto min-h-[800px] mb-14">
          {/* Top section with title and price */}
          <div className="flex flex-col mb-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="mb-2 text-3xl font-semibold">{house.name}</h2>
              <h3 className="text-lg text-gray-500">{house.address}</h3>
            </div>

            <div className="flex mb-4 lg:mb-0 gap-x-2">
              <div className="px-3 py-1 text-white bg-green-500 rounded-full">
                {house.type}
              </div>
              <div className="px-3 py-1 text-white rounded-full bg-violet-600">
                {house.country}
              </div>
            </div>

            <div className="text-3xl font-semibold text-violet-700">
              $ {house.price}
            </div>
          </div>

          {/* Main content: house image and details */}
          <div className="flex flex-col gap-10 lg:flex-row">
            <div className="lg:w-2/3">
              <div className="mb-8">
                <img src={house.imageLg} alt="House" className="w-full rounded-lg" />
              </div>

              {/* House features */}
              <div className="flex gap-6 mb-6 text-violet-700">
                <div className="flex items-center gap-x-2">
                  <BiBed className="text-2xl" />
                  <div>{house.bedrooms} Bedrooms</div>
                </div>

                <div className="flex items-center gap-x-2">
                  <BiBath className="text-2xl" />
                  <div>{house.bathrooms} Bathrooms</div>
                </div>

                <div className="flex items-center gap-x-2">
                  <BiArea className="text-2xl" />
                  <div>{house.surface} sq ft</div>
                </div>
              </div>

              {/* House description */}
              <div className="text-gray-600">{house.description}</div>
            </div>

            {/* Agent info */}
            <div className="lg:w-1/3">
              <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={house.agent.image}
                    alt="Agent"
                    className="w-16 h-16 border border-gray-300 rounded-full"
                  />
                  <div>
                    <div className="text-lg font-semibold">{house.agent.name}</div>
                    <Link to="" className="text-sm text-violet-700">
                      View Listings
                    </Link>
                  </div>
                </div>

                {/* Contact Agent Button */}
                <button className="block w-full py-2 text-white transition rounded-lg bg-violet-700 hover:bg-violet-600">
               <Link to=''>Contact Agent</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default PropertyDetails;
