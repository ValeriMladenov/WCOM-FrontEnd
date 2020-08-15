import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { LOAD_USER } from "../utils/graphql/queries";

const PrivateAdminRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("token");
  useQuery(LOAD_USER, {
    onError: () => {
      localStorage.removeItem("token");
    },
  });

  return (
    <Route
      {...rest}
      render={props =>
        token ? <Component {...props} /> : <Redirect to="/auth/login" />
      }
    />
  );
};

export default PrivateAdminRoute;
