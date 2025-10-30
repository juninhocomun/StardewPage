import { data, filteredData, activeArray } from "./data.js";
import { load, notFoundComponentLoad } from "./ui.js";
import { generatePagination } from "./pagination.js";

let timeout;
const input = document.getElementById("seach");

export function setupSearch() {
  input.addEventListener("keyup", () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      if (data.length) filter(input.value);
    }, 200);
  });
}

export function filter(searchTerm) {
  const filtered = data.filter((e) =>
    e.names["data-pt-BR"].toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filtered.length) {
    generatePagination(filtered);
    load(filtered, 0, 50);
    activeArray.splice(0, activeArray.length, ...filtered);
  } else {
    notFoundComponentLoad();
  }
}
