import * as React from "react";
import { useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();
  return (
    <>
      <h1>404</h1>
      {location.pathname} not found
    </>
  );
}
