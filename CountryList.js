import React from "react";
import StateList from "./StateList";

const CountryList = ({ countries, updateCountry, deleteCountry, setCountries }) => {
  const addState = (countryIndex) => {
    const stateName = prompt("Enter state name:");
    if (stateName) {
      const updatedCountries = [...countries];
      updatedCountries[countryIndex].states.push({ name: stateName, cities: [] });
      setCountries(updatedCountries);
    }
  };

  return (
    <div>
      {countries.map((country, index) => (
        <div key={index}>
          <h2>{country.name}</h2>
          <button onClick={() => updateCountry(index)}>Edit</button>
          <button onClick={() => deleteCountry(index)}>Delete</button>
          <button onClick={() => addState(index)}>Add State</button>
          <StateList
            countryIndex={index}
            states={country.states}
            setCountries={setCountries}
          />
        </div>
      ))}
    </div>
  );
};

export default CountryList;
