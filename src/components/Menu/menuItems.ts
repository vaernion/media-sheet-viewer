import { MenuItem } from ".";

export const menuItems: MenuItem[] = [
  {
    path: "/",
    name: "Home",
    exact: true,
    children: [
      { path: "/abcdef/:12345", name: "404" },
      { path: "/", name: "Home", exact: true },
      { path: "/films", name: "Films" },
      { path: "/tv", name: "TV" },
      { path: "/games", name: "Games" },
    ],
  },
  {
    path: "/films",
    name: "Films",
    children: [{ path: "/directors", name: "Directors" }],
  },
  { path: "/tv", name: "TV" },
  {
    path: "/games",
    name: "Games",
  },
  {
    path: "/stats",
    name: "Stats",
    exact: true,
    children: [
      { path: "/stats/films", name: "Films" },
      { path: "/stats/tv", name: "TV" },
      { path: "/stats/games", name: "Games" },
    ],
  },
];
