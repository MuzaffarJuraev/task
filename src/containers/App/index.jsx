import React from "react";
import { useSelector } from "react-redux";
import { useRoutes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../../routes/routes";

export default () => {
  const { token } = useSelector((state) => state.authReducer);

  const content = useRoutes(token ? privateRoutes : publicRoutes);
  return <>{content}</>;
};
