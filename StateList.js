import React from "react";
import CityList from "./CityList";

const StateList = ({ countryIndex, states, setCountries }) => {
  const addCity = (stateIndex) => {
    const cityName = prompt("Enter city name:");
    if (cityName) {
      setCountries((prev) => {
        const updatedCountries = [...prev];
        updatedCountries[countryIndex].states[stateIndex].cities.push(cityName);
        return updatedCountries;
      });
    }
  };

  return (
    <div>
      {states.map((state, index) => (
        <div key={index}>
          <h3>{state.name}</h3>
          <button onClick={() => addCity(index)}>Add City</button>
          <CityList countryIndex={countryIndex} stateIndex={index} state={state} setCountries={setCountries} />
        </div>
      ))}
    </div>
  );
};

export default StateList;