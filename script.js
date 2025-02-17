document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("navbar");
    var backToTopButton = document.getElementById("backToTop");
    var sticky = navbar.offsetTop;

    window.onscroll = function () {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }

        if (window.pageYOffset > 300) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    };

    backToTopButton.onclick = function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Form validation
  document.getElementById("contactForm").addEventListener("submit", function(e) {
        e.preventDefault(); // Prevent default form submission
        
        var formData = new FormData(this);

        fetch("https://docs.google.com/forms/d/e/1FAIpQLSc3WdXJ149iawfo6ddptQpKBSJNg28ewGCBuzbKMXZR2nBrZA/formResponse", {
            method: "POST",
            mode: "no-cors",
            body: formData
        }).then(() => {
            alert("Thank you! Your response has been submitted.");
            document.getElementById("contactForm").reset();
        }).catch(error => {
            alert("There was an error submitting the form.");
        });
    });
    
