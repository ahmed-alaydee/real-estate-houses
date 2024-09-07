import { createContext, useEffect, useState } from 'react';
import { housesData } from '../data';

export const HouseContext = createContext(); // قم بتصحيح الاسم هنا

const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]); // تغيير اسم المتغير إلى countries
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]); // تغيير اسم المتغير إلى properties
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);


//return all countries
 
useEffect(() =>{
  const allCOUNTRIES = houses.map((house)=>{
    return house.country
  })
   
  //Remove duplicates
  const uniqueCountries = ['Location (any)', ...new Set(allCOUNTRIES)]

    setCountries(uniqueCountries)

  }, []);


  // return all propertis 
  useEffect(() =>{
    const allProperties = houses.map((house)=>{
      return house.type
    })
     
    //Remove duplicates
    const uniqueProperties= ['Location (any)', ...new Set(allProperties)]
  
      setProperties(uniqueProperties)
  
    },[])


    const handelclick = () =>{

setLoading(true)


// create a function that check if the string includes '(any)
const isDefault = (str) => str.includes('(any)');
const minPrice = parseInt(price.split(' ')[0]);
const maxPrice = parseInt(price.split(' ')[2]);

const newHouses = housesData.filter((house) => {
  const housePrice = parseInt(house.price);

  // Filter by country, property, and price range
  const matchesCountry = isDefault(country) || house.country === country;
  const matchesProperty = isDefault(property) || house.type === property;
  const matchesPrice = isDefault(price) || (housePrice >= minPrice && housePrice <= maxPrice);

  return matchesCountry && matchesProperty && matchesPrice;

  if (!isDefault(country) && !isDefault(property) && !isDefault(price)) {
    newHouses = newHouses.filter(house => 
      house.country === country && house.type === property && (housePrice >= minPrice && housePrice <= maxPrice)
    );
  }


  


});
setTimeout(()=>{
  return newHouses.length < 1 ? setHouses([]):
  setHouses(newHouses),
  setLoading(false)

},1000)
 
    }

  

  return (
    <HouseContext.Provider value={{ 
      country,
      setCountry,
      countries,
      setCountries,
      property,
      setProperty,
      properties,
      setProperties,
      price,
      setPrice,
      houses,
      setHouses,
      handelclick, 
      loading,
    }}>
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
