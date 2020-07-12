export const normalize = (str) => {
  return str
    .normalize("NFD")
    .replace(/[^\w\s.-_/]/g, "")
    .toLowerCase();
};
