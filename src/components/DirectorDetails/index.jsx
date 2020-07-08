import * as React from "react";
import { useParams } from "react-router-dom";

export default function DirectorDetails() {
  // const context = React.useContext(MediaContext);
  const { directorName } = useParams();

  document.title = `${directorName} - Directors - MediaSheetViewer`;

  return (
    <>
      <div>
        <span>{directorName}</span>
        <span></span>
        <span></span>
      </div>
    </>
  );
}
