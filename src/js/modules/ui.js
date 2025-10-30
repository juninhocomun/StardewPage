import { clearContents } from "./utils.js";

const main = document.querySelector(".main__cards");
const template = document.createElement("template");

export function card(title, image, index) {
  const article = document.createElement("article");
  article.classList.add("card");

  const img = document.createElement("img");
  img.src = `data:image/png;base64,${image}`;
  img.classList.add("card__picture");

  const h2 = document.createElement("h2");
  h2.classList.add("card__title");
  h2.textContent = title;

  const span = document.createElement("span");
  span.classList.add("card__number");
  span.textContent = index;

  article.append(img, h2, span);
  template.content.appendChild(article);
}

export function load(arr, min, max) {
  clearContents(main, template);
  for (let i = min; i < arr.length && i < max; i++) {
    card(arr[i].names["data-pt-BR"], arr[i].image, i + 1);
  }
  main.appendChild(template.content);
}

export function notFoundComponentLoad() {
  const notFound = document.createElement("div");
  notFound.classList.add("not-found");

  const h2 = document.createElement("h2");
  h2.textContent = "Não há nada com esse nome, tente verificar a ortografia";

  const face = document.createElement("span");
  face.classList.add("not-found__face");

  const smile = document.createElement("span");
  smile.classList.add("not-found__smile");

  face.appendChild(smile);
  notFound.appendChild(h2);
  notFound.appendChild(face);

  clearContents(main, template);
  main.appendChild(notFound);
}
