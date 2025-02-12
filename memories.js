document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const images = document.querySelectorAll(".carousel-image");
    const leftBtn = document.querySelector(".left");
    const rightBtn = document.querySelector(".right");
    const totalImages = images.length;
    let index = 0;

    function updateCarousel() {
        const imageWidth = images[0].clientWidth + 10;
        const offset = -(index * imageWidth);
        carousel.style.transform = `translateX(${offset}px)`;

        images.forEach(img => img.classList.remove("centered"));
        images[Math.min(index + 1, totalImages - 1)].classList.add("centered"); // Ensure it doesn't exceed last index
    }

    function scrollLeft() {
        if (index > 0) {
            index--;
            updateCarousel();
        }
    }

    function scrollRight() {
        if (index < totalImages - 3) { // Show only 3 at a time
            index++;
            updateCarousel();
        }
    }

    function expandImage(event) {
        const popup = document.getElementById("popup");
        const popupImage = document.getElementById("popup-image");

        popupImage.src = event.target.src;
        popup.style.display = "block";
    }

    function closePopup() {
        document.getElementById("popup").style.display = "none";
    }

    images.forEach(img => {
        img.addEventListener("click", expandImage);
    });

    leftBtn.addEventListener("click", scrollLeft);
    rightBtn.addEventListener("click", scrollRight);
    document.getElementById("close-popup").addEventListener("click", closePopup);

    updateCarousel();
});
