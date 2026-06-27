// Explore Button

document.getElementById("exploreBtn").addEventListener("click", function () {

    alert("Welcome! Let's explore beautiful destinations.");

    document.getElementById("destinations").scrollIntoView({
        behavior: "smooth"
    });

});

// Book Buttons

const bookButtons = document.querySelectorAll(".bookBtn");

bookButtons.forEach(button => {

    button.addEventListener("click", function () {

        alert("Thank you for choosing Travel Explorer!\nOur team will contact you soon.");

    });

});

// Navbar Active Effect

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {

    link.addEventListener("click", function () {

        navLinks.forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});

// Contact Form

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Message Sent Successfully!");

    form.reset();

});