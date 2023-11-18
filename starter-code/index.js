// Logic For Opening & Closing Hamburger Button
// Accessing the navigation-menu & Hamburger Icon
const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

// When someone clicks on the hamburger button
navToggle.addEventListener("click", () => {
    // if the nav menu is closed, open it
    const visibility = nav.getAttribute("data-visible");
    if (visibility === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute('aria-expanded', true);
    }

    else {
        nav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }

})
