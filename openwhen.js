document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".open-me-image");
    const popup = document.getElementById("popup");
    const popupImage = document.getElementById("popup-image");
    const closePopup = document.getElementById("close-popup");

    images.forEach(image => {
        image.addEventListener("click", function () {
            popupImage.src = this.src;
            popup.style.display = "flex";
        });
    });

    closePopup.addEventListener("click", function () {
        popup.style.display = "none";
    });

    popup.addEventListener("click", function (e) {
        if (e.target !== popupImage) {
            popup.style.display = "none";
        }
    });
});

