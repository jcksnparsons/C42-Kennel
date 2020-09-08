import React, { useContext, useEffect } from "react";
import { AnimalContext } from "./AnimalProvider";
import { Animal } from "./Animal";
import "../../components/Kennel.css";

export const AnimalList = () => {
  const { animals, getAnimals } = useContext(AnimalContext);

  useEffect(() => {
    getAnimals();
  }, []);

  return (
    <div className="page-section">
      {animals.map((animal) => (
        <Animal key={animal.id} animal={animal} />
      ))}
    </div>
  );
};
