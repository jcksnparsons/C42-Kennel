import React, { useContext, useEffect } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import { Link } from "react-router-dom";
import "../../components/Kennel.css";
import "./Employee.css";

export const EmployeeList = (props) => {
  const { employees, getEmployees } = useContext(EmployeeContext);

  useEffect(() => {
    getEmployees();
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
          return (
            <section className="employee">
              <Link key={employee.id} to={`/employees/${employee.id}`}>
                <h3>{employee.name}</h3>
              </Link>
            </section>
          );
        })}
      </div>
    </>
  );
};
