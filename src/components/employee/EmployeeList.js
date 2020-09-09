import React, { useContext, useEffect } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import { LocationContext } from "../location/LocationProvider";
import { Employee } from "./Employee";
import "../../components/Kennel.css";

export const EmployeeList = (props) => {
  const { employees, getEmployees } = useContext(EmployeeContext);
  const { locations, getLocations } = useContext(LocationContext);

  useEffect(() => {
    getEmployees();
    getLocations();
  }, []);

  return (
    <>
      <h1>Employees</h1>
      <button
        className="add-button"
        onClick={() => props.history.push("/employees/create")}
      >
        Add Employee
      </button>
      <div className="page-section">
        {employees.map((employee) => {
          const employer =
            locations.find((l) => l.id === employee.locationId) || {};

          return (
            <Employee
              key={employee.id}
              employee={employee}
              location={employer}
            />
          );
        })}
      </div>
    </>
  );
};
