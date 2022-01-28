import { galleryItems } from './gallery-items.js';

const items = document.querySelector(`.gallery`);
console.log(items);
items.innerHTML = `<ul class = "galleryEl"></ul>`;
const gridLi = document.querySelector(`.galleryEl`)
const galleryPicture = getGalleryPicture(galleryItems);
gridLi.insertAdjacentHTML("beforeend", galleryPicture);
  console.log(getGalleryPicture(galleryItems));
function getGalleryPicture(galleryItems) {
  return  galleryItems.map(({priview, original, description})=> {
      return  `<li><div class="gallery__item">
      <a class="gallery__link" href="${original}" target="_self">
        <img
          class="gallery__image"
          src="${original}"
          data-source="${original}"
          alt="${description}"
          title = "${description}"
        />
      </a>
    </div></li>`;
  }).join(``);  

};



gridLi.addEventListener(`click`, addPhotoClick);
let lightbox = new SimpleLightbox('.gallery a', {captionType:'alt', captionDelay: 250, captionPosition: 'bottom'});
// const newListner = document.querySelector(`.gallery__image`);
function addPhotoClick(event) {
  // event.preventDefault();
  if(event.target.nodeName !== `IMG`) {
    return;
  }
  };
// classList.add("basicLightbox");
// mainPic.hasClass('basicLightbox') ? mainPic.removeClass('basicLightbox') : mainPic.addClass('basicLightbox');
// gridLi.addEventListener(`click`, addPhotoClick);
// function addPhotoClick(event) {
// const mainPic = event.target;// };
