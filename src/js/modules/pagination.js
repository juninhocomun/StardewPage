import { load } from "./ui.js";
import { activeArray } from "./data.js";

const paginationList = document.querySelectorAll(".pagination__list");
const pageButton = document.querySelectorAll(".pagination__button");
let currentPage = 1;

export function generatePagination(arr) {
  const itemsPerPage = 50;
  const totalPages = Math.ceil(arr.length / itemsPerPage);

  paginationList.forEach((e) => (e.innerHTML = ""));

  for (let i = 0; i < totalPages; i++) {
    const num = i + 1;
    paginationList.forEach((container) => {
      const button = document.createElement("span");
      button.setAttribute("name", num);
      button.textContent = num;
      button.classList.add("pagination__number");
      container.appendChild(button);
      button.addEventListener("click", () =>
        handlePageChange(num, itemsPerPage, arr)
      );
    });
  }

  reloadButtonsStyle();
}

function handlePageChange(buttonNumber, itemsPerPage, arr) {
  currentPage = buttonNumber;
  const min = (buttonNumber - 1) * itemsPerPage;
  const max = buttonNumber * itemsPerPage;
  reloadButtonsStyle();
  load(arr, min, max);
}

function reloadButtonsStyle() {
  document.querySelectorAll(".pagination__number").forEach((e) => {
    if (Number(e.getAttribute("name")) === currentPage) {
      e.classList.add("--active");
    } else {
      e.classList.remove("--active");
    }
  });
}

pageButton.forEach((element) => {
  element.addEventListener("click", (event) => {
    const direction = event.currentTarget.getAttribute("data-direction");
    const totalPages = Math.ceil(activeArray.length / 50);

    if (direction === "prev" && currentPage > 1) {
      handlePageChange(currentPage - 1, 50, activeArray);
    } else if (direction === "next" && currentPage < totalPages) {
      handlePageChange(currentPage + 1, 50, activeArray);
    }
  });
});

paginationList.forEach((element) =>
  element.addEventListener("wheel", (e) => secHover(e), { passive: false })
);

function secHover(event) {
  event.preventDefault();
  event.currentTarget.scrollLeft += event.deltaY;
}
