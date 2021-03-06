let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        logoSpan.forEach((span, index) => {
            setTimeout(() => {
                span.classList.add("active");
            }, (index + 1) * 300);
        });

        setTimeout(() => {
            logoSpan.forEach((span, index) => {
                setTimeout(() => {
                    span.classList.remove("active");
                    span.classList.add("fade");
                }, (index + 1) * 40);
            });
        }, 1500);

        setTimeout(() => {
            intro.style.top = "-100vh";
        }, 1800);
    });
});
