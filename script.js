document.addEventListener("DOMContentLoaded", function () {
    var backToTopButton = document.getElementById("backToTop");

    window.onscroll = function () {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    backToTopButton.onclick = function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
});
