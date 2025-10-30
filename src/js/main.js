import { callJSON, data } from "../StardewPage/src/js/modules/data.js";
import { load } from "../StardewPage/src/js/modules/ui.js";
import { generatePagination } from "../StardewPage/src/js/modules/pagination.js";
import { setupSearch } from "../StardewPage/src/js/modules/search.js";

async function init() {
  await callJSON();
  generatePagination(data);
  load(data, 0, 50);
  setupSearch();
}

init();
