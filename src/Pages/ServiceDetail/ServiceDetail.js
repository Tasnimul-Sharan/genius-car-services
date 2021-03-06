import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h2>Welcome to Detail {serviceId}</h2>
      <Link to="/cheackout">
        <button className="btn btn-primary">Proceed checkout</button>
      </Link>
    </div>
  );
};

export default ServiceDetail;
