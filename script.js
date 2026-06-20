// Typing Effect
const text = "Welcome to Foodie's Restaurant";
let i = 0;
let isDeleting = false;

function typeEffect() {
    const element = document.getElementById("typing-text");

    if (!isDeleting) {
        element.textContent = text.substring(0, i++);

        if (i > text.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        element.textContent = text.substring(0, i--);

        if (i < 0) {
            isDeleting = false;
        }
    }

    setTimeout(typeEffect, 100);
}

window.onload = () => {
    typeEffect();

    document.querySelector(".hero").style.opacity = "1";
};

// Order Button
document.getElementById("orderBtn").addEventListener("click", () => {
    alert("Order placed successfully!");
});

// Contact Form
document.getElementById("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
document.querySelectorAll(".cart-btn")
    .forEach(btn => {

        btn.addEventListener("click", () => {
            alert("Added to Cart!");
        });

    });
document.getElementById("searchInput")
    .addEventListener("keyup", function () {

        let value =
            this.value.toLowerCase();

        let cards =
            document.querySelectorAll(".card");

        cards.forEach(card => {

            let food =
                card.querySelector("h3")
                    .textContent.toLowerCase();

            if (food.includes(value)) {
                card.style.display = "block";
            }
            else {
                card.style.display = "none";
            }
        });

    });
