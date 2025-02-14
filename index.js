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

