import React, { useState, useContext, useEffect } from "react";
import { AnimalContext } from "./AnimalProvider";
import { Animal } from "./Animal";
import "../../components/Kennel.css";

export const AnimalList = ({ history }) => {
  const { animals, searchTerms } = useContext(AnimalContext);
  const [filteredAnimals, setFiltered] = useState([]);

  useEffect(() => {
    if (searchTerms !== "") {
      // If the search field is not blank, display matching animals
      const subset = animals.filter((animal) =>
        animal.name.toLowerCase().includes(searchTerms)
      );
      setFiltered(subset);
    } else {
      // If the search field is blank, display all animals
      setFiltered(animals);
    }
  }, [searchTerms, animals]);

  return (
    <>
      <h1>Animals</h1>
      <button onClick={() => history.push("/animals/create")}>
        Make Appointment
      </button>
      <div className="page-section">
        {filteredAnimals.map((animal) => {
          return <Animal key={animal.id} animal={animal} />;
        })}
      </div>
    </>
  );
};
