import React, { useContext, useRef, useEffect } from "react";
import { LocationContext } from "../location/LocationProvider";
import { AnimalContext } from "../animal/AnimalProvider";
import "./Animals.css";

export const AnimalForm = (props) => {
  const { addAnimal } = useContext(AnimalContext);
  const { locations, getLocations } = useContext(LocationContext);

  /*
        Create references that can be attached to the input
        fields in the form. This will allow you to get the
        value of the input fields later when the user clicks
        the save button.

        No more `document.querySelector()` in React.
    */
  const name = useRef(null);
  const breed = useRef(null);
  const location = useRef(null);
  const customerId = parseInt(localStorage.getItem("kennel_customer"));

  /*
        Get animal state and location state on initialization.
    */
  useEffect(() => {
    getLocations();
  }, []);

  const constructNewAnimal = () => {
    /*
            The `location` and `animal` variables below are
            the references attached to the input fields. You
            can't just ask for the `.value` property directly,
            but rather `.current.value` now in React.
        */
    const locationId = parseInt(location.current.value);

    if (locationId === 0) {
      window.alert("Please select a location");
    } else {
      addAnimal({
        name: name.current.value,
        breed: breed.current.value,
        locationId,
        customerId,
      }).then(() => props.history.push("/animals"));
    }
  };

  return (
    <form className="animalForm">
      <h2 className="animalForm__title">Admit an animal</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="animalName">Animal name: </label>
          <input
            type="text"
            id="animalName"
            ref={name}
            required
            autoFocus
            className="form-control"
            placeholder="Animal name"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="animalBreed">Breed: </label>
          <input
            type="text"
            id="animalBreed"
            ref={breed}
            required
            autoFocus
            className="form-control"
            placeholder="Breed"
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Assign to location: </label>
          <select
            defaultValue=""
            name="location"
            ref={location}
            id="employeeLocation"
            className="form-control"
          >
            <option value="0">Select a location</option>
            {locations.map((e) => (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <button
        type="submit"
        onClick={(evt) => {
          evt.preventDefault(); // Prevent browser from submitting the form
          constructNewAnimal();
        }}
        className="btn btn-primary"
      >
        Save Employee
      </button>
    </form>
  );
};
