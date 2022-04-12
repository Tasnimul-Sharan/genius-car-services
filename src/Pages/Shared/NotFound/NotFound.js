import React from "react";
import error from "../../../images/error.jpg";

const NotFound = () => {
  return (
    <div>
      {/* <h1>The page is not found</h1> */}
      <img src={error} alt="" />
    </div>
  );
};

export default NotFound;
