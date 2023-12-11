import { galleryItems } from './gallery-items.js';
// Change code below this line

let gallery = document.querySelector('.gallery');

const imageList = galleryItems.map((element, i, galleryItems) => `
    <li class="gallery__item">
        <a class="gallery__link" href="${galleryItems[i].original}">
            <img class="gallery__image" src="${galleryItems[i].preview}" alt="${galleryItems[i].description}">
        </a>
    </li>`);

gallery.insertAdjacentHTML("afterbegin", imageList.join("") );

const configuration = {
    captions: true,
    captionsDelay: 250,
    captionSelector: "img",
    captionType: "attr",
    captionPosition: "bottom",
    captionsData: "alt",
};
const lightbox = new SimpleLightbox(".gallery a", configuration);
