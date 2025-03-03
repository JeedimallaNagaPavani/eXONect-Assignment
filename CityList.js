import React from "react";

const CityList = ({ countryIndex, stateIndex, state, setCountries }) => {
  const deleteCity = (cityIndex) => {
    if (window.confirm("Are you sure you want to delete this city?")) {
      setCountries((prev) => {
        const updatedCountries = [...prev];
        updatedCountries[countryIndex].states[stateIndex].cities.splice(cityIndex, 1);
        return updatedCountries;
      });
    }
  };

  return (
    <ul>
      {state.cities.map((city, index) => (
        <li key={index}>
          {city} <button onClick={() => deleteCity(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default CityList;
