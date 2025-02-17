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
   function validateForm() {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all required fields.");
      return false;
    }
    return true;
  }
    });
});
