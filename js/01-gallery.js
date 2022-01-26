import { galleryItems } from './gallery-items.js';

const items = document.querySelector(`.gallery`);
console.log(items);
items.innerHTML = `<ul class = "galleryEl"></ul>`;
const gridLi = document.querySelector(`.galleryEl`)
const galleryPicture = getGalleryPicture(galleryItems);
gridLi.insertAdjacentHTML("beforeend", galleryPicture);
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
// const newListner = document.querySelector(`.gallery__image`);

// gridLi.addEventListener(`click`, addPhotoClick);
// function addPhotoClick(event) {
// const mainPic = event.target;
// mainPic.classList.add("basicLightbox");
// mainPic.hasClass('basicLightbox') ? mainPic.removeClass('basicLightbox') : mainPic.addClass('basicLightbox');
// };

gridLi.click(function(event) {
  let el = event.target;
  el.hasClass('basicLightbox') ? el.removeClass('basicLightbox') : el.addClass('basicLightbox');
});