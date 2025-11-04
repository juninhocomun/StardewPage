import { callJSON, data } from "./modules/data.js";
import { load } from "./modules/ui.js";
import { generatePagination } from "./modules/pagination.js";
import { setupSearch } from "./modules/search.js";

async function init() {
  await callJSON();
  generatePagination(data);
  load(data, 0, 50);
  setupSearch();
}

init();
