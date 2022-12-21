import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector(".gallery");
console.log(galleryEl);

const markup = galleryItems
  .map(
    ({
      preview,
      original,
      description,
    }) => `<li><a class="gallery__item" href="${original}"> 
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`
  )
    .join("");
  
galleryEl.innerHTML = markup;

const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});

