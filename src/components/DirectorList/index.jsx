import * as React from "react";
import { Link } from "react-router-dom";
import "../../styles/lists.css";
import { normalize } from "../../utils/utilities";
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
    setDirectorsFiltered(
      context.directors.filter((director) => {
        const name = normalize(director);
        const searchStr = normalize(searchField);
        return name.includes(searchStr);
      })
    );
  }, [searchField, context.directors]);

  document.title = `${context.directors.length} Directors - MediaSheetViewer`;

  if (!directorsFiltered) return null;

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
          <div className="list-items">
            <ul>
              {directorsFiltered.map((name) => (
                <li key={name}>
                  <Link to={`/creators/${name}`}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
