import * as React from "react";
import { mediaSheet, stats } from "../Store/mediaSheet";
import "./Timeline.css";

console.log(mediaSheet.tvSorted);

const start = stats.tvYears[0].year;
const end = stats.tvYears[stats.tvYears.length - 1].year;
const scale = new Array(end - start + 1)
  .fill(0)
  .map((e, i) => Number(String(start + i).substring(2)));
console.log(start, end, scale);
console.log(end - start + 1);

export default function Timeline() {
  React.useEffect(() => {
    document.title = "Timeline - TV - MediaSheetViewer";
  }, []);

  return (
    <>
      <div className="timeline">
        <div
          className="timeline-body"
          style={{
            gridTemplateColumns: `repeat(${end - start + 1}, minmax(0,1fr))`,
          }}
        >
          <div className="timeline-scale-top">
            <TimelineScale />
          </div>

          {mediaSheet.tvSorted.yearStartAsc.map((e) => {
            return (
              <div
                key={e.id}
                className="timeline-box"
                style={{
                  gridColumn: `${e.seasons[0].yearStart - start + 1} / ${
                    e.seasons[e.seasons.length - 1].yearEnd - start + 1
                  }`,
                }}
              >
                <span>{e.name}</span>
                {/* <span> S:{e.seasons.length}</span> */}
                <span>
                  {e.seasons[0].yearStart}-
                  {e.seasons[e.seasons.length - 1].yearEnd}
                </span>
              </div>
            );
          })}
          <div className="timeline-scale-bottom">
            <TimelineScale />
          </div>
        </div>
      </div>
    </>
  );
}

const TimelineScale = () => (
  //   <div className="timeline-scale">
  <>
    {scale.map((e, i) => (
      <span
        key={e}
        className="timeline-scale-item"
        style={{ gridColumn: `${i} / ${i}` }}
      >
        {(3000 - e) % 5 === 0 ||
        e === Number(String(start).substring(2)) ||
        e === Number(String(end).substring(2))
          ? e
          : " ... "}
      </span>
    ))}
  </>
  //   </div>
);
