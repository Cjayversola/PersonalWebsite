
document.addEventListener("DOMContentLoaded", function () {
    // Automatically update the footer year
    const currentYear = document.getElementById("currentYear");

    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }

    // Reveal sections as they enter the screen
    const revealElements = document.querySelectorAll(".reveal");

    if ("IntersectionObserver" in window) {
        const revealObserver = new IntersectionObserver(
            function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12
            }
        );

        revealElements.forEach(function (element) {
            revealObserver.observe(element);
        });
    } else {
        revealElements.forEach(function (element) {
            element.classList.add("visible");
        });
    }

    // Close the mobile navbar after selecting a section
    const navbar = document.getElementById("mainNavbar");
    const navLinks = document.querySelectorAll("#mainNavbar .nav-link");

    if (navbar && window.bootstrap) {
        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                if (navbar.classList.contains("show")) {
                    const collapse = bootstrap.Collapse.getOrCreateInstance(navbar);
                    collapse.hide();
                }
            });
        });
    }

    // Contact form demo: no email is sent
    const contactForm = document.getElementById("contactForm");
    const formNotice = document.getElementById("formNotice");

    if (contactForm && formNotice) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const visitorName = document
                .getElementById("visitorName")
                .value
                .trim();

            formNotice.textContent =
                "Thank you, " + visitorName +
                "! Your form works, but this demo does not send or store messages.";

            contactForm.reset();
        });
    }
});
