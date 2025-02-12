document.addEventListener("DOMContentLoaded", function () {
    const hearts = document.querySelectorAll(".heart");
    const audioPlayer = document.getElementById("audio-player");
    const backButton = document.getElementById("back-button");

    hearts.forEach(heart => {
        heart.addEventListener("click", function () {
            let songSrc = this.getAttribute("data-song");

            if (audioPlayer.src.includes(songSrc) && !audioPlayer.paused) {
                audioPlayer.pause();
                audioPlayer.currentTime = 0;
            } else {
                audioPlayer.src = songSrc;
                audioPlayer.play();
            }
        });
    });

    backButton.addEventListener("click", function () {
        audioPlayer.pause();
        window.location.href = "options.html"; // Redirects back to options
    });
});
