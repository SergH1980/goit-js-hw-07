import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(`.gallery`);
let modal;
const imageEl = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
  })
  .join(``);
galleryContainer.insertAdjacentHTML(`beforeend`, imageEl);

galleryContainer.addEventListener(`click`, onImageClick);
function onImageClick(event) {
  if (event.target.nodeName !== `IMG`) {
    return;
  }
  event.preventDefault();
  createModal(event);
}
function createModal(data) {
  const modalImgLink = data.target.dataset.source;
  const modalImgAlt = data.target.getAttribute(`alt`);

  modal = basicLightbox.create(
    `
    <img src="${modalImgLink}" alt="${modalImgAlt}">
`
  );
  modal.show();
}

galleryContainer.addEventListener(`keydown`, closeModal);
function closeModal(data) {
  if (data.code === "Escape") {
    modal.close();
  }
}
