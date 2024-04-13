//  MILESTONE 1: CREAZIONE DINAMICA DEL CONTENUTO DEL CAROSELLO

// Funzione per creare il contenuto del carosello
function createCarouselContent() {
  // Creo le stringhe vuote per il contenuto del carosello e delle thumbnails
  let carouselImg = "";
  let carouselThumb = "";

  // forEach per iterare ogni oggetto immagine nell'array
  images.forEach((img, index) => {
    // Codice HTML del carosello da stampare
    carouselImg += `
        <div class="my-carousel-item" carousel-item="${index}">
          <img class="img-fluid" src="${img.image}" alt="${img.title}">
          <div class="item-description px-3">
            <h2>${img.title}</h2>
            <p>${img.text}</p>
          </div>
        </div>
      `;

    // Codice HTML del thumbnails da stampare
    carouselThumb += `
        <img class="img-fluid my-thumbnail" src="${img.image}" alt="Thumbnail of ${img.title} picture" onclick="handleThumbnailClick(${index})">
      `;
  });

  // STAMPA IN PAGINA
  document.getElementById("carousel-images").innerHTML = carouselImg;
  document.getElementById("carousel-thumbnails").innerHTML = carouselThumb;

  // Imposta la prima immagine come attiva per renderla visibile
  document.querySelector(".my-carousel-item").classList.add("active");
}

//  MILESTONE 2

// Funzione per attivare l'elemento del carosello 
function activateImg(index) {
  // Rimuovo la classe .active da tutti gli elementi del carosello
  document.querySelectorAll(".my-carousel-item").forEach((item) => {
    item.classList.remove("active");
  });

  // Aggiungo la classe "active" all'elemento del carosello attuale
  document
    .querySelector(`.my-carousel-item[carousel-item="${index}"]`)
    .classList.add("active");
}
