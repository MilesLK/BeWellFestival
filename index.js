let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    const navLinks = document.getElementById("nav-links");

    burger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    })
});

window.addEventListener("scroll", function () {
    let scrollTop = this.window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-100px";
    } else {
        navbar.style.top = "0"
    }
    lastScrollTop = scrollTop
})

// Slider de la page d'accueil //
let currentIndex= 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const slider = document.querySelector(".slider");

function updateSlide () {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides; // Boucle infinie
    updateSlide();    
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlide();    
}

// Défilement automatique toutes les 3 secondes
setInterval(nextSlide, 3000);