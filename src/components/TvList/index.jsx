import * as React from "react";
import "../../styles/lists.css";
import { filterTv } from "../../utils/filters";
import { FieldHeader } from "../FieldHeader";
import { SearchForm } from "../SearchForm";
import { DispatchContext, StateContext } from "../Store";
import { mediaSheet } from "../Store/mediaSheet";
import "./TvList.css";
import { TvListItem } from "./TvListItem";

export default function TvList() {
  const dispatch = React.useContext(DispatchContext);
  const state = React.useContext(StateContext);
  const [searchField, setSearchField] = React.useState(state.filterTv);

  document.title = `${mediaSheet.tv.length} TV series - MediaSheetViewer`;

  // persist filter
  React.useEffect(() => {
    dispatch({ type: "FILTER_TV", payload: searchField });
  }, [searchField, dispatch]);

  const handleSort = (field) => {
    if (field === state.sortTv) {
      dispatch({ type: "SORT_REVERSE_TV" });
    } else {
      dispatch({ type: "SORT_TV", payload: field });
    }
  };

  const tvSortedLocal =
    mediaSheet.tvSorted[state.sortTv + (state.sortReverseTv ? "Desc" : "Asc")];
  const tvFiltered = filterTv(tvSortedLocal, searchField);

  return (
    <>
      <div className="tvs">
        <div className="tvs-head">
          <SearchForm
            value={searchField}
            setValue={setSearchField}
            placeholder="examples: wire | david simon | g:sci-fi | (y|ys|ye):2005"
          />
          <div className="headers">
            <FieldHeader
              field="sortTitle"
              label="Title"
              width="10%"
              sort={{
                sortBy: state.sortTv,
                isSortReverse: state.sortReverseTv,
              }}
              onclick={handleSort}
            />
            <FieldHeader
              field="yearStart"
              label="Start"
              width="10%"
              sort={{
                sortBy: state.sortTv,
                isSortReverse: state.sortReverseTv,
              }}
              onclick={handleSort}
            />
            <FieldHeader
              field="yearEnd"
              label="End"
              width="10%"
              sort={{
                sortBy: state.sortTv,
                isSortReverse: state.sortReverseTv,
              }}
              onclick={handleSort}
            />
            <FieldHeader
              field="creator"
              label="Creator"
              width="35%"
              sort={{
                sortBy: state.sortTv,
                isSortReverse: state.sortReverseTv,
              }}
              onclick={handleSort}
            />
            <FieldHeader
              field="genre"
              label="Genre"
              width="35%"
              sort={{
                sortBy: state.sortTv,
                isSortReverse: state.sortReverseTv,
              }}
            />
          </div>
        </div>
        <div className="tvs-body">
          {tvFiltered.map((tv, i) => (
            <TvListItem key={tv.id} tv={tv} setSearchField={setSearchField} />
          ))}
        </div>
      </div>
    </>
  );
}
