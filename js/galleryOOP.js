import items from "./gallery-items.js";

const refs = {
  ul: document.querySelector(".js-gallery"),
  lightBox: document.querySelector(".js-lightbox"),
  lightBoxImage: document.querySelector(".lightbox__image"),
  lightBoxCloseButton: document.querySelector(
    'button[data-action="close-lightbox"]'
  ),
  lightBoxOverlay: document.querySelector(".lightbox__overlay"),
};

class Gallery {
  constructor({
    ul,
    lightBox,
    lightBoxImage,
    lightBoxCloseButton,
    lightBoxOverlay,
  }) {
    this.ul = ul;
    this.lightBox = lightBox;
    this.lightBoxImage = lightBoxImage;
    this.lightBoxCloseButton = lightBoxCloseButton;
    this.lightBoxOverlay = lightBoxOverlay;
    this.index = 0;
    this.gallery = [];
  }
  createGallery = (images) =>
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
      this.gallery.push(picture.original);
      this.ul.insertAdjacentHTML("beforeend", li);
    });

  openLargeImg = (event) => {
    event.preventDefault();
    document.querySelector("body").style.overflow = "hidden";
    if (event.target.nodeName !== "IMG") return;
    this.index = this.gallery.indexOf(event.target.dataset.source);
    window.addEventListener("keydown", this.keyAction);
    this.update(this.index);
    this.lightBox.classList.add("is-open");
  };
  closeLargeImg = () => {
    this.lightBox.classList.remove("is-open");
    this.lightBoxImage.src = "";
    window.removeEventListener("keydown", this.keyAction);
    document.querySelector("body").style.overflow = "auto";
  };

  keyAction = (event) => {
    if (event.code === "Escape") this.closeLargeImg();
    if (event.code === "ArrowLeft") {
      this.index -= 1;
      this.index < 0 ? (this.index = this.gallery.length - 1) : this.index;
    }
    if (event.code === "ArrowRight") {
      this.index += 1;
      this.index === this.gallery.length ? (this.index = 0) : this.index;
    }
    this.update(this.index);
  };

  update = (index) => (this.lightBoxImage.src = this.gallery[index]);

  addListeners = () => {
    this.ul.addEventListener("click", this.openLargeImg);
    this.lightBoxCloseButton.addEventListener("click", this.closeLargeImg);
    this.lightBoxOverlay.addEventListener("click", this.closeLargeImg);
  };
}

let myGallery = new Gallery(refs);
myGallery.createGallery(items);
myGallery.addListeners();
