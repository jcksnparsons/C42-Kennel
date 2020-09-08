import React from "react";
import { Route } from "react-router-dom";
import { LocationProvider } from "./location/LocationProvider";
import { AnimalProvider } from "./animal/AnimalProvider";
import { LocationList } from "./location/LocationList";
import { AnimalList } from "./animal/AnimalList";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { EmployeeList } from "./employee/EmployeeList";
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"

export const ApplicationViews = (props) => {
  return (
    <>
      <LocationProvider>
        {/* Render the location list when http://localhost:3000/ */}
        <Route exact path="/">
          <LocationList />
        </Route>
      </LocationProvider>

      <AnimalProvider>
        {/* Render the animal list when http://localhost:3000/animals */}
        <Route path="/animals">
          <AnimalList />
        </Route>
      </AnimalProvider>

      <EmployeeProvider>
          <Route path="/employees">
              <EmployeeList />
          </Route>
      </EmployeeProvider>

      <CustomerProvider>
          <Route path="/customers">
              <CustomerList />
          </Route>
      </CustomerProvider>
    </>
  );
};