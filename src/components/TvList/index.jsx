import * as React from "react";
import { normalize } from "../../utils/utilities";
import { FieldHeader } from "../FieldHeader";
import { SearchForm } from "../SearchForm";
import { MediaContext } from "../Store";
import "./TvList.css";
import { TvListItem } from "./TvListItem";

export default function TvList() {
  const context = React.useContext(MediaContext);

  const [sortBy, setSortBy] = React.useState("sortTitle");
  const [isSortReverse, setIsSortReverse] = React.useState(false);
  const [searchField, setSearchField] = React.useState("");
  const [tvSortedLocal, setTvSortedLocal] = React.useState(null);
  const [tvFiltered, setTvFiltered] = React.useState(null);

  document.title = `${context.tv.length} TV series - MediaSheetViewer`;

  //   keep current sorted tv in state
  React.useEffect(() => {
    setTvSortedLocal(
      (() => {
        const sorted = context.tvSorted;
        switch (sortBy) {
          case "sortTitle":
            return isSortReverse ? sorted.titleDesc : sorted.titleAsc;
          case "yearStart":
            return isSortReverse ? sorted.yearStartDesc : sorted.yearStartAsc;
          case "yearEnd":
            return isSortReverse ? sorted.yearEndDesc : sorted.yearEndAsc;
          case "creator":
            return isSortReverse ? sorted.creatorDesc : sorted.creatorAsc;
          default:
            return context.tv;
        }
      })()
    );
  }, [sortBy, isSortReverse, context.tv, context.tvSorted]);

  //   filter tv post-sort and store in state
  React.useEffect(() => {
    if (!tvSortedLocal) return;
    setTvFiltered(filterTv(tvSortedLocal, searchField));
  }, [tvSortedLocal, searchField]);

  const handleSort = (field) => {
    if (field === sortBy) {
      setIsSortReverse(!isSortReverse);
    } else {
      setIsSortReverse(false);
      setSortBy(field);
    }
  };

  const filterTv = (sortedTv, searchField) => {
    const searchStr = normalize(searchField);

    if (searchStr.startsWith("g:")) {
      return sortedTv.filter(
        (tv) =>
          tv.genre.findIndex((genre) =>
            normalize(genre).includes(searchStr.replace("g:", ""))
          ) !== -1
      );
    } else if (searchStr.startsWith("y:")) {
      return sortedTv.filter((tv) => {
        const search = Number(searchStr.replace("y:", ""));

        return (
          tv.seasons[0].yearStart <= search &&
          tv.seasons[tv.seasons.length - 1].yearEnd >= search
        );
      });
    } else if (searchStr.startsWith("ys:")) {
      return sortedTv.filter(
        (tv) =>
          tv.seasons[0].yearStart.toString() === searchStr.replace("ys:", "")
      );
    } else if (searchStr.startsWith("ye:")) {
      return sortedTv.filter(
        (tv) =>
          tv.seasons[tv.seasons.length - 1].yearEnd.toString() ===
          searchStr.replace("ye:", "")
      );
    } else {
      return sortedTv.filter(
        (tv) =>
          normalize(tv.title).includes(searchStr) ||
          tv.creator.findIndex((creator) =>
            normalize(creator).includes(searchStr)
          ) !== -1
      );
    }
  };

  if (!tvFiltered) return null;

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
              sort={{ sortBy, isSortReverse }}
              onclick={handleSort}
            />
            <FieldHeader
              field="yearStart"
              label="Start"
              width="10%"
              sort={{ sortBy, isSortReverse }}
              onclick={handleSort}
            />
            <FieldHeader
              field="yearEnd"
              label="End"
              width="10%"
              sort={{ sortBy, isSortReverse }}
              onclick={handleSort}
            />
            <FieldHeader
              field="creator"
              label="Creator"
              width="35%"
              sort={{ sortBy, isSortReverse }}
              onclick={handleSort}
            />
            <FieldHeader
              field="genre"
              label="Genre"
              width="35%"
              sort={{ sortBy, isSortReverse }}
            />
          </div>
        </div>
        <div className="tvs-body">
          {tvFiltered.map((tv) => (
            <TvListItem key={tv.id} tv={tv} setSearchField={setSearchField} />
          ))}
        </div>
      </div>
    </>
  );
}
