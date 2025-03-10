document.addEventListener("DOMContentLoaded", () => {
    console.log("Floating Navbar Loaded!");
});
function navigateTo(url) {
    window.location.href = url;
}
function navigateTo(page) {
    window.location.href = page;
}
const coords = { x: 0, y: 0 };

const circles = document.querySelectorAll(".circle");

circles.forEach(function (circle) {
    circle.x = 0;
    circle.y = 0;
});

window.addEventListener("mousemove", function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
});

function animateCircles() {

    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
        circle.style.left = x - 10 + "px";
        circle.style.top = y - 10 + "px";
        circle.style.transform = `scale(${(10 - index) / 10})`;
        circle.x = x;
        circle.y = y;
        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });
    requestAnimationFrame(animateCircles);
}
animateCircles();
window.addEventListener("scroll", function () {
    let title = document.querySelector(".title");
    let subtitle = document.querySelector(".subtitle");
    let description = document.querySelector(".description");

    function isInViewport(element) {
        let rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom >= 0;
    }

    if (isInViewport(title)) {
        title.style.transform = "translateX(0)";
        title.style.opacity = "1";
    } else {
        title.style.transform = "translateX(100%)";
        title.style.opacity = "0";
    }
    if (isInViewport(subtitle)) {
        subtitle.style.transform = "translateX(0)";
        subtitle.style.opacity = "1";
    } else {
        subtitle.style.transform = "translateX(-100%)";
        subtitle.style.opacity = "0";
    }

    if (isInViewport(description)) {
        description.style.transform = "translateX(0)";
        description.style.opacity = "1";
    } else {
        description.style.transform = "translateX(-100%)";
        description.style.opacity = "0";
    }
});
function scrollToFeatures() {
    document.querySelector(".features-container").scrollIntoView({ behavior: "smooth" });
}
