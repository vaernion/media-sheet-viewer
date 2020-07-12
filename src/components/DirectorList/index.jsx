import * as React from "react";
import { Link } from "react-router-dom";
import { SearchForm } from "../SearchForm";
import { MediaContext } from "../Store";
import "./DirectorList.css";

export default function DirectorList() {
  const context = React.useContext(MediaContext);

  const [searchField, setSearchField] = React.useState("");
  const [directorsFiltered, setDirectorsFiltered] = React.useState(
    context.directors
  );

  React.useEffect(() => {
    const normalize = (str) =>
      str.normalize("NFKD").replace(/[^\w\s.-_/]/g, "");

    setDirectorsFiltered(
      context.directors.filter((e) => {
        const name = normalize(e).toLowerCase();
        const search = normalize(searchField).toLowerCase();
        return name.includes(search);
      })
    );
  }, [searchField, context.directors]);

  document.title = `Directors - MediaSheetViewer`;

  return (
    <>
      <div className="directors">
        <div className="directors-head">
          <SearchForm
            value={searchField}
            setValue={setSearchField}
            placeholder="examples: kubrick | ridley scott | melies"
          />
        </div>
        <div className="directors-body">
          <ul>
            {directorsFiltered.map((name) => (
              <li key={name}>
                <Link to={`/directors/${name}`}>{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
