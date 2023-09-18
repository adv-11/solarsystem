const images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg", "image6.jpg", "image7.jpg" , "image8.jpg"];
const descTexts = ["MERCURY", "VENUS", "EARTH", "MARS", "JUPITER", "SATURN", "URANUS" , "NEPTUNE"];
const desc1Texts = ["Distance from SUN : 58M km", "Distance from SUN : 108.2M km", "Distance from SUN : 149.6M km", "Distance from SUN : 227.9M km", "Distance from SUN : 778.5M km", "Distance from SUN : 1.434B km", "Distance from SUN : 2.871B km" , "Distance from SUN : 4.495B km"];

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




window.addEventListener('load', () => {

    const loader = document.querySelector('.loader');
    const mainContent = document.getElementById('mainContent');

    setTimeout(() => {
        loader.style.display = 'none';
        mainContent.style.display = 'block';
    }, 500);


    const loaderBar = document.getElementById('loaderBar');
    let progress = 0;

    const interval = setInterval(() => {
        if (progress < 100) {
            progress += 1;
            loaderBar.style.width = progress + '%';
        } else {
            clearInterval(interval);
        }
    }, 10);
});

