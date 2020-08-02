import Chart from "chart.js";
import palette from "google-palette";
import { stats } from "../Store/mediaSheet";

console.log(stats);

const defaultConfig = {
  options: {
    title: {
      display: true,
      fontSize: 14,
    },
  },
};

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
      ...defaultConfig.options.title,
      text: "Genres",
    },
  },
};

export const filmYearsConfig: Chart.ChartConfiguration = {
  type: "bar",
  data: {
    labels: stats.filmYears.map((e) => e.year),
    datasets: [
      {
        label: "# of films",
        data: stats.filmYears.map((e) => e.sum),
        backgroundColor: palette("tol-rainbow", stats.filmYears.length).map(
          (hex: string) => "#" + hex
        ),
      },
    ],
  },
  options: {
    title: {
      ...defaultConfig.options.title,
      text: "Years",
    },
  },
};

export const filmGenresYearsConfig: Chart.ChartConfiguration = {
  type: "bar",
  data: {
    labels: stats.filmYears.map((e) => e.year),
    datasets: [
      {
        label: "# of films",
        data: stats.filmYears.map((e) => e.sum),
        backgroundColor: palette("tol-rainbow", stats.filmYears.length).map(
          (hex: string) => "#" + hex
        ),
      },
    ],
  },
  options: {
    title: {
      ...defaultConfig.options.title,
      text: "Genres per years",
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
      ...defaultConfig.options.title,
      text: "Genres",
    },
  },
};

export const tvYearsConfig: Chart.ChartConfiguration = {
  type: "bar",
  data: {
    labels: stats.tvYears.map((e) => e.year),
    datasets: [
      {
        label: "# of series",
        data: stats.tvYears.map((e) => e.sum),
        backgroundColor: palette("tol-rainbow", stats.tvYears.length).map(
          (hex: string) => "#" + hex
        ),
      },
    ],
  },
  options: {
    title: {
      ...defaultConfig.options.title,
      text: "Years",
    },
  },
};

/* ***********
GAME
*********** */
export const gameGenresConfig: Chart.ChartConfiguration = {
  type: "bar",
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
      ...defaultConfig.options.title,
      text: "Genres",
    },
  },
};

export const gameYearsConfig: Chart.ChartConfiguration = {
  type: "bar",
  data: {
    labels: stats.gameYears.map((e) => e.year),
    datasets: [
      {
        label: "# of games",
        data: stats.gameYears.map((e) => e.sum),
        backgroundColor: palette("tol-rainbow", stats.gameYears.length).map(
          (hex: string) => "#" + hex
        ),
      },
    ],
  },
  options: {
    title: {
      ...defaultConfig.options.title,
      text: "Years",
    },
  },
};

export const gameGenresYearsConfig: Chart.ChartConfiguration = {
  type: "bar",
  data: {
    labels: stats.gameYears.map((e) => e.year),
    datasets: [
      {
        label: "# of games",
        data: stats.gameYears.map((e) => e.sum),
        backgroundColor: palette("tol-rainbow", stats.gameYears.length).map(
          (hex: string) => "#" + hex
        ),
      },
    ],
  },
  options: {
    title: {
      ...defaultConfig.options.title,
      text: "Genres per years",
    },
  },
};
