//  Array di immagini

const images = [
  {
    image: "img/01.webp",
    title: "Marvel's Spiderman Miles Morale",
    text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
  },
  {
    image: "img/02.webp",
    title: "Ratchet & Clank: Rift Apart",
    text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
  },
  {
    image: "img/03.webp",
    title: "Fortnite",
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  {
    image: "img/04.webp",
    title: "Stray",
    text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
  },
  {
    image: "img/05.webp",
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
  },
];

// MILESTONE 1 e 2

let activeIndex = 0;

printImages(images);

const imageElems = document.querySelectorAll(".my-carousel-item"); // array di elementi nel DOM
console.log(imageElems);

// Attiva il primo elemento
imageElems[activeIndex].classList.add("active");

// Aggiungi event listener per il click sulla freccia "next"
document.querySelector(".my-next").addEventListener("click", showNext);

// Aggiungi event listener per il click sulla freccia "prev"
document.querySelector(".my-previous").addEventListener("click", showPrev);

///////////////
function showNext() {
  imageElems[activeIndex].classList.remove("active");
  if (activeIndex < imageElems.length - 1) {
    activeIndex++;
  } else {
    activeIndex = 0;
  }
  imageElems[activeIndex].classList.add("active");
}

function showPrev() {
  imageElems[activeIndex].classList.remove("active");
  if (activeIndex > 0) {
    activeIndex--;
  } else {
    activeIndex = imageElems.length - 1;
  }
  imageElems[activeIndex].classList.add("active");
}
///////////////

function printImages() {
  const carouselContainer = document.querySelector(".my-carousel-images");
  carouselContainer.innerHTML = ""; // Pulisce il contenuto precedente
  images.forEach((image) => {
    carouselContainer.innerHTML += `
    <div class="my-carousel-item" carousel-item="1"> <!-- Rimuove la classe "active" iniziale -->
      <img
        class="img-fluid"
        src="${image.image}"
        alt="${image.title} picture"
      />
      <div class="item-description px-3">
        <h2>${image.title}</h2>
        <p>
          ${image.text}
        </p>
      </div>
    </div>`;
  });
}

// BONUS 1

// Seleziona il contenitore delle miniature
const thumbnailsContainer = document.querySelector(".my-thumbnails");

// Seleziona tutte le miniature all'interno del contenitore
const thumbnails = thumbnailsContainer.querySelectorAll("img");

// Aggiungi un event listener a ciascuna miniatura
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    // Rimuovi la classe 'active' da tutte le immagini del carosello
    imageElems.forEach((image) => image.classList.remove("active"));

    // Aggiungi la classe 'active' all'immagine corrispondente
    imageElems[index].classList.add("active");

    // Aggiorna l'indice attivo
    activeIndex = index;
  });
});
