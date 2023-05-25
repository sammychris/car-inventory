import React from 'react';
import { CarProvider } from './CarContext';
import CarContainer from './containers/CarContainer';

function App() {
  return (
    <CarProvider>
      <CarContainer />
    </CarProvider>
  );
}

export default App;
