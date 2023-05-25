import React from 'react';

const CarList = ({filteredCars}) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {filteredCars.map(car => (
        <div key={car.id} 
             style={{ 
               backgroundColor: '#fff', 
               padding: '20px', 
               margin: '10px', 
               borderRadius: '10px', 
               boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', 
               flexBasis: '30%', 
               boxSizing: 'border-box',
               display: 'flex',
               flexDirection: 'column',
               justifyContent: 'center',
               alignItems: 'center'
             }}
        >
          <p><strong>Make:</strong> {car.make}</p>
          <p><strong>Model:</strong> {car.model}</p>
          <p><strong>Year:</strong> {car.year}</p>
        </div>
      ))}
    </div>
  );
  
  
};

export default CarList;
