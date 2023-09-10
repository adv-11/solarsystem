const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg", "image7.jpg"];
const descTexts = ["MERCURY", "VENUS", "EARTH", "MARS", "JUPITER", "SATURN", "URANUS"];
const desc1Texts = ["Distance from SUN : 58M km", "Distance from SUN : 108.2M km", "Distance from SUN : 149.6M km", "Distance from SUN : 227.9M km", "Distance from SUN : 778.5M km", "Distance from SUN : 1.434B km", "Distance from SUN : 2.871B km"];

let currentIndex = 0;

const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");
const carouselImage = document.getElementById('carouselImage');
const descText = document.getElementById("descText");
const desc1Text = document.getElementById("desc1Text");

function updateCarousel() {
    carouselImage.src = images[currentIndex];
    descText.textContent = descTexts[currentIndex];
    desc1Text.textContent = desc1Texts[currentIndex];
}

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
});

updateCarousel();

