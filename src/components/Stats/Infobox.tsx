import Chart from "chart.js";
import * as React from "react";

export function Infobox({
  config,
  large,
}: {
  config: Chart.ChartConfiguration;
  large?: boolean;
}) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    if (canvasRef.current) {
      new Chart(canvasRef.current, config);
    }
  }, [canvasRef, config]);

  return (
    <>
      <div className="stats-infobox">
        <div className={large ? "canvas-container-large" : "canvas-container"}>
          <canvas ref={canvasRef}></canvas>
        </div>
      </div>
    </>
  );
}
