import images from "./gallery-items.js";

const ul = document.querySelector(".js-gallery");
const lightBox = document.querySelector(".js-lightbox");
const lightBoxImage = document.querySelector(".lightbox__image");
const lightBoxCloseButton = document.querySelector(
  'button[data-action="close-lightbox"]'
);
const lightBoxOverlay = document.querySelector(".lightbox__overlay");
let index = 0;
let gallery = [];

images.forEach((picture) => {
  let li = `
  <li class="gallery__item">
    <a
      class="gallery__link"
      href="${picture.original}"
    >
      <img
        class="gallery__image"
        src="${picture.preview}"
        data-source="${picture.original}"
        alt="${picture.description}"
      />
    </a>

  </li>
  `;
  gallery.push(picture.original);
  ul.insertAdjacentHTML("beforeend", li);
});

const openLargeImg = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") return;
  index = gallery.indexOf(event.target.dataset.source);
  window.addEventListener("keydown", keyAction);
  imgUpdate(index);
  lightBox.classList.add("is-open");
};

const closeLargeImg = () => {
  lightBox.classList.remove("is-open");
  lightBoxImage.src = "";
  window.removeEventListener("keydown", keyAction);
};

const imgUpdate = (index) => (lightBoxImage.src = gallery[index]);

const keyAction = (event) => {
  if (event.code === "Escape") closeLargeImg();
  if (event.code === "ArrowLeft") {
    index -= 1;
    index < 0 ? (index = gallery.length - 1) : index;
  }
  if (event.code === "ArrowRight") {
    index += 1;
    index === gallery.length ? (index = 0) : index;
  }
  imgUpdate(index);
};

ul.addEventListener("click", openLargeImg);
lightBoxCloseButton.addEventListener("click", closeLargeImg);
lightBoxOverlay.addEventListener("click", closeLargeImg);
