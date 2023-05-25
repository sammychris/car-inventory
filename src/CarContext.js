import React, { createContext, useState, useEffect } from 'react';
// import axios from 'axios';

export const CarContext = createContext();
const carsData = [
    { id: 6, make: 'Lexus', model: 'ES', year: 2022 },
    { id: 1, make: 'Toyota', model: 'Corolla', year: 2018 },
    { id: 5, make: 'Audi', model: 'Q7', year: 2015 },
    { id: 2, make: 'Honda', model: 'Accord', year: 2017 },
    { id: 3, make: 'BMW', model: 'X5', year: 2020 },
    { id: 4, make: 'Mercedes', model: 'C-Class', year: 2019 },
    { id: 7, make: 'Porsche', model: 'Cayenne', year: 2021 }
];


export const CarProvider = ({ children }) => {
  const [cars, setCars] = useState([]);

  const fetchCars = async () => {
    const response = await new Promise(resolve => setTimeout(() => resolve(carsData), 2000));
    setCars(response);
  };

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <CarContext.Provider value={{ cars }}>
      {children}
    </CarContext.Provider>
  );
};
