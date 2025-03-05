document.addEventListener("DOMContentLoaded", function () {
    const showScoreBtn = document.querySelector(".show-score-btn");
    const scoreInfo = document.querySelector(".credit-score-info");

    showScoreBtn.addEventListener("click", function () {
        if (scoreInfo.style.display === "none" || scoreInfo.style.display === "") {
            scoreInfo.style.display = "block";
        } else {
            scoreInfo.style.display = "none";
        }
    });
});
function navigateTo(page) {
    fetch(page) // Fetch the requested page
        .then(response => {
            if (!response.ok) {
                throw new Error("Page not found");
            }
            return response.text();
        })
        .then(html => {
            document.getElementById("content").innerHTML = html; // Update content
            window.history.pushState({}, "", page); // Change URL without reloading
        })
        .catch(error => console.error("Error loading page:", error));
}

// Handle browser back/forward navigation
window.addEventListener("popstate", () => {
    const path = window.location.pathname;
    if (path !== "/") {
        navigateTo(path.substring(1));
    }
});