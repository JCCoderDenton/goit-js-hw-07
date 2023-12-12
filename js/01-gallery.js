import { galleryItems } from './gallery-items.js';
// Change code below this line

let gallery = document.querySelector('.gallery');

const imageList = galleryItems.map((element, i, galleryItems) => `
    <li class="gallery__item">
        <a class="gallery__link" href="${galleryItems[i].original}">
            <img class="gallery__image" src="${galleryItems[i].preview}" data-source="${galleryItems[i].original}" alt="${galleryItems[i].description}">
        </a>
    </li>`);

gallery.insertAdjacentHTML("afterbegin", imageList.join("") );

gallery.addEventListener("click", (event) => {
    if (event.target.classList.contains("gallery__image")) {
        event.preventDefault();
        const OriginalImg = event.target.dataset.source;
        const popup = basicLightbox.create(`<img src="${OriginalImg}" width="800" height="600">`);
        popup.show();
    }
});