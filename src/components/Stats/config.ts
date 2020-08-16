import Chart from "chart.js";
import palette from "google-palette";
import { stats } from "../Store/mediaSheet";

/* ***********
FILM
*********** */
export const filmGenresConfig: Chart.ChartConfiguration = {
  type: "bar",
  data: {
    labels: stats.filmGenres.map((e) => e.name),
    datasets: [
      {
        label: "# of films",
        data: stats.filmGenres.map((e) => e.sum),
        backgroundColor: palette("tol-rainbow", stats.filmGenres.length).map(
          (hex: string) => "#" + hex
        ),
      },
    ],
  },
  options: {
    title: {
      text: "Genres",
    },
  },
};

export const filmYearsConfig: Chart.ChartConfiguration = {
  type: "line",
  data: {
    labels: stats.filmYears.map((e) => e.year),
    datasets: [
      {
        label: "# of films",
        data: stats.filmYears.map((e) => e.sum),
        pointBackgroundColor: palette("tol-sq", stats.filmYears.length).map(
          (hex: string) => "#" + hex
        ),
        backgroundColor: "grey",
      },
    ],
  },
  options: {
    title: {
      text: "Years",
    },
  },
};

export const filmGenresPerYearsConfig: Chart.ChartConfiguration = {
  type: "bar",
  data: {
    labels: stats.filmYears.map((e) => e.year),
    datasets: stats.filmGenres.map((filmGenre, genreIndex) => ({
      label: filmGenre.name,
      data: stats.filmYears.map(
        (filmYear) =>
          filmYear.genres[
            filmYear.genres.findIndex((e) => e.name === filmGenre.name)
          ].sum
      ),
      backgroundColor: palette("mpn65", stats.filmGenres.length).map(
        (hex: string) => "#" + hex
      )[genreIndex],
    })),
  },
  options: {
    title: {
      text: "Genres per year",
    },
    tooltips: {
      filter: (tooltipItem) => Number(tooltipItem.value) > 0,
      intersect: false,
      mode: "index",
    },
    scales: {
      xAxes: [
        {
          stacked: true,
        },
      ],
      yAxes: [
        {
          stacked: true,
        },
      ],
    },
  },
};

/* ***********
TV
*********** */
export const tvGenresConfig: Chart.ChartConfiguration = {
  type: "bar",
  data: {
    labels: stats.tvGenres.map((e) => e.name),
    datasets: [
      {
        label: "# of series",
        data: stats.tvGenres.map((e) => e.sum),
        backgroundColor: palette("tol-rainbow", stats.tvGenres.length).map(
          (hex: string) => "#" + hex
        ),
      },
    ],
  },
  options: {
    title: {
      text: "Genres",
    },
  },
};

export const tvYearsConfig: Chart.ChartConfiguration = {
  type: "line",
  data: {
    labels: stats.tvYears.map((e) => e.year),
    datasets: [
      {
        label: "# of series",
        data: stats.tvYears.map((e) => e.sum),
        pointBackgroundColor: palette("tol-sq", stats.tvYears.length).map(
          (hex: string) => "#" + hex
        ),
        backgroundColor: "grey",
      },
    ],
  },
  options: {
    title: {
      text: "Years",
    },
  },
};

export const tvGenresPerYearsConfig: Chart.ChartConfiguration = {
  type: "bar",
  data: {
    labels: stats.tvYears.map((e) => e.year),
    datasets: stats.tvGenres.map((tvGenre, genreIndex) => ({
      label: tvGenre.name,
      data: stats.tvYears.map(
        (tvYear) =>
          tvYear.genres[tvYear.genres.findIndex((e) => e.name === tvGenre.name)]
            .sum
      ),
      backgroundColor: palette("mpn65", stats.tvGenres.length).map(
        (hex: string) => "#" + hex
      )[genreIndex],
    })),
  },
  options: {
    title: {
      text: "Genres per year",
    },
    tooltips: {
      filter: (tooltipItem) => Number(tooltipItem.value) > 0,
      intersect: false,
      mode: "index",
    },
    scales: {
      xAxes: [
        {
          stacked: true,
        },
      ],
      yAxes: [
        {
          stacked: true,
        },
      ],
    },
  },
};

/* ***********
GAME
*********** */
export const gameGenresConfig: Chart.ChartConfiguration = {
  type: "doughnut",
  data: {
    labels: stats.gameGenres.map((e) => e.name),
    datasets: [
      {
        label: "# of games",
        data: stats.gameGenres.map((e) => e.sum),
        backgroundColor: palette("tol-rainbow", stats.gameGenres.length).map(
          (hex: string) => "#" + hex
        ),
      },
    ],
  },
  options: {
    title: {
      text: "Genres",
    },
  },
};

export const gameYearsConfig: Chart.ChartConfiguration = {
  type: "line",
  data: {
    labels: stats.gameYears.map((e) => e.year),
    datasets: [
      {
        label: "# of games",
        data: stats.gameYears.map((e) => e.sum),
        pointBackgroundColor: palette("tol-sq", stats.gameYears.length).map(
          (hex: string) => "#" + hex
        ),
        backgroundColor: "grey",
      },
    ],
  },
  options: {
    title: {
      text: "Years",
    },
  },
};

export const gameGenresPerYearsConfig: Chart.ChartConfiguration = {
  type: "bar",
  data: {
    labels: stats.gameYears.map((e) => e.year),
    datasets: stats.gameGenres.map((gameGenre, genreIndex) => ({
      label: gameGenre.name,
      data: stats.gameYears.map(
        (gameYear) =>
          gameYear.genres[
            gameYear.genres.findIndex((e) => e.name === gameGenre.name)
          ].sum
      ),
      backgroundColor: palette("mpn65", stats.gameGenres.length).map(
        (hex: string) => "#" + hex
      )[genreIndex],
    })),
  },
  options: {
    title: {
      text: "Genres per year",
    },
    tooltips: {
      filter: (tooltipItem) => Number(tooltipItem.value) > 0,
      intersect: false,
      mode: "index",
    },
    scales: {
      xAxes: [
        {
          stacked: true,
        },
      ],
      yAxes: [
        {
          stacked: true,
        },
      ],
    },
  },
};
