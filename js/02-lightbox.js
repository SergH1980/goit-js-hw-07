import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(`.gallery`);
let modal;
const imageEl = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
  })
  .join(``);
galleryContainer.insertAdjacentHTML(`beforeend`, imageEl);

console.log(galleryItems);

var lightbox = new SimpleLightbox(`.gallery a`, {
  captionsData: `alt`,
  captionDelay: 250,
});
