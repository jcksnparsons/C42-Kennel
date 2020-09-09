import React, { useContext, useEffect } from "react";
import { AnimalContext } from "./AnimalProvider";
import { LocationContext } from "../location/LocationProvider";
import { CustomerContext } from "../customer/CustomerProvider";
import { Animal } from "./Animal";
import "../../components/Kennel.css";

export const AnimalList = (props) => {
  const { animals, getAnimals } = useContext(AnimalContext);
  const { locations, getLocations } = useContext(LocationContext);
  const { customers, getCustomers } = useContext(CustomerContext);

  useEffect(() => {
    getAnimals();
    getLocations();
    getCustomers();
  }, []);

  return (
    <>
      <h1>Animals</h1>
      <button onClick={() => props.history.push("/animals/create")}>
        Make Appointment
      </button>
      <div className="page-section">
        {animals.map((animal) => {
          const owner = customers.find((c) => c.id === animal.customerId) || {};
          const clinic =
            locations.find((l) => l.id === animal.locationId) || {};

          return (
            <Animal
              key={animal.id}
              animal={animal}
              location={clinic}
              customer={owner}
            />
          );
        })}
      </div>
    </>
  );
};
