import * as React from "react";
import { useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();
  document.title = `404 error: ${location.pathname} - MediaSheetViewer`;
  return (
    <>
      <h1>404</h1>
      {location.pathname} not found
    </>
  );
}
