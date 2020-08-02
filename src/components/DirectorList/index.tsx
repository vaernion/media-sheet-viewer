import * as React from "react";
import { Link } from "react-router-dom";
import "../../styles/lists.css";
import { normalize } from "../../utils/utilities";
import { SearchForm } from "../SearchForm";
import { mediaSheet } from "../Store/mediaSheet";
import "./DirectorList.css";

export default function DirectorList() {
  const [searchField, setSearchField] = React.useState("");
  const [directorsFiltered, setDirectorsFiltered] = React.useState(
    mediaSheet.directors
  );

  React.useEffect(() => {
    setDirectorsFiltered(
      mediaSheet.directors.filter((director) => {
        const name = normalize(director);
        const searchStr = normalize(searchField);
        return name.includes(searchStr);
      })
    );
  }, [searchField]);

  document.title = `${mediaSheet.directors.length} Directors - MediaSheetViewer`;

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
