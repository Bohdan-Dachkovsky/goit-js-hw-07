import { galleryItems } from './gallery-items.js';
// Change code below this line
const items = document.querySelector(`.gallery`);

console.log(items);
const galleryPicture = getGalleryPicture(galleryItems);

items.insertAdjacentHTML("beforeend", galleryPicture);
  console.log(getGalleryPicture(galleryItems));
function getGalleryPicture(galleryItems) {
  return  galleryItems.map(({priview, original})=> {
      return  `<li><div class="gallery__item">
      <a class="gallery__link" href="large-image.jpg">
        <img
          class="gallery__image"
          src="${original}"
          data-source="large-image.jpg"
          alt="Image description"
        />
      </a>
    </div></li>`;
  }).join(``);  

};

items.click(function(event) {
  let el = event.target;
  el.hasClass('basicLightbox') ? el.removeClass('basicLightbox') : el.addClass('basicLightbox');
});