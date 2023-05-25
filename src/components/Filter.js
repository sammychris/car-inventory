import React from 'react';

const Filter = ({setSearchYear}) => {
    return (
      <div style={{ marginBottom: '20px' }}>
        <input 
          type='text' 
          placeholder='Filter by year' 
          onChange={e => setSearchYear(e.target.value)}
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ddd', width: '200px' }} 
        />
      </div>
    );
  };
  

export default Filter;
