import React from "react";
import { Link } from "react-router-dom";
import "./Location.css";

export const LocationDetail = (props) => {
  const animalsAtLocation = props.location.state.chosenLocation.animals;

  console.log(animalsAtLocation);

  return (
    <section className="location">
      <h2 className="location__name">
        {props.location.state.chosenLocation.name}
      </h2>
      <h5>
        Currently caring for{" "}
        {animalsAtLocation.map((a) => {
          return animalsAtLocation.indexOf(a) ===
            animalsAtLocation.length - 1 ? (
            <span key={a.id}>
              <Link to={`animals/${a.id}`}>{a.name}</Link>
            </span>
          ) : (
            <span key={a.id}>
              <Link key={a.id} to={`animals/${a.id}`}>
                {a.name}
              </Link>{", "}
            </span>
          );
        })}
      </h5>
      <div>
        <h4>Employees</h4>
        {props.location.state.chosenLocation.employees
          .map((e) => e.name)
          .join(", ")}
      </div>
    </section>
  );
};
