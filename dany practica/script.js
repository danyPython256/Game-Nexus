// JavaScript para el movimiento automático del carrusel
var carouselInner = document.querySelector('.carousel-inner');

setInterval(function () {
    var firstImage = carouselInner.firstElementChild;
    carouselInner.appendChild(firstImage);
}, 1000); // Cambia la imagen cada 3 segundos