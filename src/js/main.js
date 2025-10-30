import { callJSON, data } from "http://localhost:3000/js/modules/data.js";
import { load } from "http://localhost:3000/js/modules/ui.js";
import { generatePagination } from "http://localhost:3000/js/modules/pagination.js";
import { setupSearch } from "http://localhost:3000/js/modules/search.js";

async function init() {
  await callJSON();
  generatePagination(data);
  load(data, 0, 50);
  setupSearch();
}

init();
