document.addEventListener("DOMContentLoaded", function() {
    const valentine = document.getElementById("valentine");
    const calendar = document.getElementById("calendar");
    const message = document.getElementById("message");

    if (valentine) {
        // When 14 is clicked, hide calendar and show "I Love You"
        valentine.addEventListener("click", function() {
            if (calendar) calendar.style.display = "none"; 
            if (message) {
                message.style.display = "block"; 

                setTimeout(function() {
                    message.style.display = "none"; 
                    window.location.href = "options.html"; // Redirect to 4 options page
                }, 3000); 
            }
        });
    } else {
        console.error("Error: valentine element not found!");
    }
});
