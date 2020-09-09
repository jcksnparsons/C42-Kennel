import React, { useContext, useEffect } from "react";
import { AnimalContext } from "./AnimalProvider";
import { Animal } from "./Animal";
import "../../components/Kennel.css";

export const AnimalList = (props) => {
  const { animals, getAnimals } = useContext(AnimalContext);

  useEffect(() => {
    getAnimals();
  }, []);

  return (
    <>
      <h1>Animals</h1>
      <button onClick={() => props.history.push("/animals/create")}>
        Make Appointment
      </button>
      <div className="page-section">
        {animals.map((animal) => {
          return <Animal key={animal.id} animal={animal} />;
        })}
      </div>
    </>
  );
};
