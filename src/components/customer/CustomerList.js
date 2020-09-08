import React, { useContext, useEffect } from "react";
import { CustomerContext } from "./CustomerProvider";
import { Customer } from "./Customer";
import "../../components/Kennel.css";

export const CustomerList = () => {
  const { customers, getCustomers } = useContext(CustomerContext);

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <div className="page-section">
      {customers.map((customer) => (
        <Customer key={customer.id} customer={customer} />
      ))}
    </div>
  );
};
