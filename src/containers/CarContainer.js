import React, { useContext, useEffect, useState } from "react";
import { CarContext } from "../CarContext";
import Filter from "../components/Filter";
import CarList from "../components/CarList";

function CarContainer() {
  const [sortedCars, setSortedCars] = useState([]);
  const [searchYear, setSearchYear] = useState('');
  const { cars } = useContext(CarContext);

  const mergeSort = (array) => {
    if (array.length < 2) return array;
    const mid = Math.floor(array.length / 2);
    const subLeft = mergeSort(array.slice(0, mid));
    const subRight = mergeSort(array.slice(mid));
    return merge(subLeft, subRight);
  };

  const merge = (a, b) => {
    const c = [];
    while (a.length && b.length) {
      if (a[0].year < b[0].year) c.push(a.shift());
      else c.push(b.shift());
    }
    return [...c, ...a, ...b];
  };

  useEffect(() => {
    setSortedCars(mergeSort(cars));
  }, [cars]);

  const filterCars = (searchYear) => {
    return sortedCars.filter((car) => car.year.toString().startsWith(searchYear));
  };

  const filteredCars = filterCars(searchYear);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#fafafa",
      }}
    >
      <Filter setSearchYear={setSearchYear} />
      <CarList filteredCars={filteredCars} />
    </div>
  );
}

export default CarContainer;
