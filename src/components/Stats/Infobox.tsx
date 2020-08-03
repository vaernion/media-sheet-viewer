import Chart from "chart.js";
import * as React from "react";

Chart.defaults.global.title!.display = true;
Chart.defaults.global.title!.fontSize = 18;

export function Infobox({
  config,
  large,
}: {
  config: Chart.ChartConfiguration;
  large?: boolean;
}) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  // const [chart, setChart] = React.useState<Chart | null>(null);

  React.useEffect(() => {
    if (canvasRef.current) {
      new Chart(canvasRef.current, config);
      // const newChart = new Chart(canvasRef.current, config);
      // setChart(newChart);
    }
  }, [canvasRef, config]);

  return (
    <>
      <div className="stats-infobox">
        <div className={large ? "canvas-container-large" : "canvas-container"}>
          <canvas ref={canvasRef} />
        </div>
      </div>
    </>
  );
}
