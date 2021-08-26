import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Fragment>
      Path Not found
      <Link to="/">Home</Link>
    </Fragment>
  );
};

export default NotFound;
