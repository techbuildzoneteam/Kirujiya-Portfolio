
    // Disable right-click
    document.addEventListener("contextmenu", function (event) {
        event.preventDefault();
    });

    // Disable image dragging
    document.addEventListener("dragstart", function (event) {
        if (event.target.tagName === "IMG") {
            event.preventDefault();
        }
    });

/* ========================================
   ELEMENTS
======================================== */

const body = document.body;

const themeToggle = document.getElementById("themeToggle");

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navMenu");

const navLinks = document.querySelectorAll(".nav-link");


/* ========================================
   DARK / LIGHT MODE
======================================== */

function setTheme(theme) {

    if (theme === "dark") {

        body.classList.add("dark-theme");

        themeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

        themeToggle.setAttribute(
            "aria-label",
            "Switch to light mode"
        );

    } else {

        body.classList.remove("dark-theme");

        themeToggle.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

        themeToggle.setAttribute(
            "aria-label",
            "Switch to dark mode"
        );
    }

    localStorage.setItem("portfolio-theme", theme);
}


/* ========================================
   LOAD SAVED THEME
======================================== */

const savedTheme =
    localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {

    setTheme("dark");

} else {

    setTheme("light");
}


/* ========================================
   THEME TOGGLE
======================================== */

themeToggle.addEventListener("click", () => {

    const isDark =
        body.classList.contains("dark-theme");

    setTheme(isDark ? "light" : "dark");

});


/* ========================================
   OPEN / CLOSE MOBILE MENU
======================================== */

function openMenu() {

    navMenu.classList.add("show");

    menuToggle.classList.add("active");

    menuToggle.setAttribute(
        "aria-expanded",
        "true"
    );

    menuToggle.setAttribute(
        "aria-label",
        "Close navigation menu"
    );

    menuToggle.innerHTML =
        '<i class="fa-solid fa-xmark"></i>';
}


function closeMenu() {

    navMenu.classList.remove("show");

    menuToggle.classList.remove("active");

    menuToggle.setAttribute(
        "aria-expanded",
        "false"
    );

    menuToggle.setAttribute(
        "aria-label",
        "Open navigation menu"
    );

    menuToggle.innerHTML =
        '<i class="fa-solid fa-bars"></i>';
}


/* ========================================
   MENU BUTTON
======================================== */

menuToggle.addEventListener("click", (event) => {

    event.stopPropagation();

    const menuIsOpen =
        navMenu.classList.contains("show");

    if (menuIsOpen) {

        closeMenu();

    } else {

        openMenu();

    }

});


/* ========================================
   CLOSE WHEN CLICKING NAV LINK
======================================== */

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        closeMenu();

    });

});


/* ========================================
   CLOSE WHEN CLICKING OUTSIDE
======================================== */

document.addEventListener("click", (event) => {

    const clickedInsideNavbar =
        event.target.closest(".header");

    if (!clickedInsideNavbar) {

        closeMenu();

    }

});


/* ========================================
   CLOSE MENU WITH ESCAPE KEY
======================================== */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeMenu();

    }

});


/* ========================================
   CLOSE MOBILE MENU WHEN RESIZING
======================================== */

window.addEventListener("resize", () => {

    if (window.innerWidth > 768) {

        closeMenu();

    }

});




/* ========================================
   TYPING EFFECT
======================================== */

const typingText = document.querySelector(".typing-text");

const professions = [
    "Web Developer",
    "UI/UX Designer",
    "Software Developer",
    "Creative Thinker"
];

let professionIndex = 0;
let characterIndex = 0;
let isDeleting = false;

function typeEffect() {

    if (!typingText) return;

    const currentProfession =
        professions[professionIndex];

    if (isDeleting) {

        characterIndex--;

    } else {

        characterIndex++;

    }

    typingText.textContent =
        currentProfession.substring(0, characterIndex);


    let typingSpeed = isDeleting ? 50 : 100;


    /* Finished typing */

    if (!isDeleting &&
        characterIndex === currentProfession.length) {

        typingSpeed = 1800;

        isDeleting = true;
    }


    /* Finished deleting */

    if (isDeleting && characterIndex === 0) {

        isDeleting = false;

        professionIndex =
            (professionIndex + 1) % professions.length;

        typingSpeed = 400;
    }


    setTimeout(typeEffect, typingSpeed);
}

typeEffect();



/* ========================================
   CURRENT YEAR
======================================== */

const currentYear =
    document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent =
        new Date().getFullYear();
}


/* ========================================
   CONTACT FORM
======================================== */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            formMessage.textContent =
                "Thank you. Your message has been received.";

            contactForm.reset();

        }
    );

}





document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});

document.addEventListener("keydown", function (event) {

    // F12
    if (event.key === "F12") {
        event.preventDefault();
    }

    // Ctrl + U
    if (event.ctrlKey && event.key.toLowerCase() === "u") {
        event.preventDefault();
    }

    // Ctrl + Shift + I
    if (
        event.ctrlKey &&
        event.shiftKey &&
        event.key.toLowerCase() === "i"
    ) {
        event.preventDefault();
    }

    // Ctrl + Shift + J
    if (
        event.ctrlKey &&
        event.shiftKey &&
        event.key.toLowerCase() === "j"
    ) {
        event.preventDefault();
    }

});

