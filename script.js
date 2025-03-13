// ===== Mobile Menu Toggle =====
const mobileMenuBtn = document.getElementById("menu-btn-mobile");
const mobileMenuNav = document.getElementById("mobile-menu-nav");
const mobileNavCloseBtn = document.getElementById("mobile-Nav-close");

// Toggle mobile menu visibility
if (mobileMenuBtn && mobileMenuNav) {
    mobileMenuBtn.addEventListener("click", (event) => {
        event.stopPropagation(); // Prevent event from bubbling up
        mobileMenuNav.classList.toggle("mobile-menu-nav-hidden");
    });
}

// Close mobile menu when the close button is clicked
if (mobileNavCloseBtn && mobileMenuNav) {
    mobileNavCloseBtn.addEventListener("click", () => {
        mobileMenuNav.classList.add("mobile-menu-nav-hidden");
    });
}

// Close mobile menu when clicking outside
document.addEventListener("click", (event) => {
    if (mobileMenuNav && !mobileMenuNav.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
        mobileMenuNav.classList.add("mobile-menu-nav-hidden");
    }
});

// ===== Toggle Nested Navigation Containers =====
const toggleNestedNavigation = (containerId, buttonId, closeBtnId) => {
    const container = document.getElementById(containerId);
    const button = document.getElementById(buttonId);
    const closeBtn = document.getElementById(closeBtnId);

    if (container && button && closeBtn) {
        button.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent event from bubbling up
            closeAllDropdowns(containerId); // Close other dropdowns
            container.classList.toggle("nested-navigation_hidden");
            button.classList.toggle("bg-loginB1");
        });

        closeBtn.addEventListener("click", () => {
            container.classList.add("nested-navigation_hidden");
            button.classList.remove("bg-loginB1");
        });
    }
};

// Initialize toggles for Tutorials, Services, and Exercises
toggleNestedNavigation("nested-navigation-container_id", "Tutorials-btn", "nested-navigation-close-Btn");
toggleNestedNavigation("nested-navigation-container-services", "services-btn", "nested-navigation-close-Btn-services");
toggleNestedNavigation("nested-navigation-container-exercises", "exercises-btn", "nested-navigation-close-Btn-exercises");

// ===== Mobile Dropdown Toggle =====
const toggleMobileDropdown = (buttonId, dropdownId) => {
    const button = document.getElementById(buttonId);
    const dropdown = document.getElementById(dropdownId);

    if (button && dropdown) {
        button.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent event from bubbling up
            closeAllDropdowns(dropdownId); // Close other dropdowns
            dropdown.classList.toggle("show");
        });
    }
};

// Initialize toggles for mobile dropdowns
toggleMobileDropdown("tutorial_menuLink_mobile", "Tutorial_menu_mobile");
toggleMobileDropdown("services_menuLink_mobile", "Services_menu_mobile");
toggleMobileDropdown("exercises_menuLink_mobile", "Exercises_menu_mobile");
toggleMobileDropdown("videos_menuLink_mobile", "Videos_menu_mobile");

// ===== Close All Dropdowns Except the One Being Opened =====
function closeAllDropdowns(exceptId) {
    const dropdowns = document.querySelectorAll(".nested-navigation-container, .nested-naivgation-container_content_Mobile");
    dropdowns.forEach((dropdown) => {
        if (dropdown.id !== exceptId) {
            dropdown.classList.add("nested-navigation_hidden");
            dropdown.classList.remove("show");
        }
    });

    // Remove active class from all buttons
    const buttons = document.querySelectorAll(".menu-btn-mobile_menu, #Tutorials-btn, #services-btn, #exercises-btn");
    buttons.forEach((button) => {
        button.classList.remove("bg-loginB1", "mobile_menu_Active");
    });
}

// ===== Close All Dropdowns When Clicking Outside =====
document.addEventListener("click", (event) => {
    if (mobileMenuNav && !mobileMenuNav.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
        mobileMenuNav.classList.add("mobile-menu-nav-hidden");
    }

    const dropdowns = document.querySelectorAll(".nested-navigation-container, .nested-naivgation-container_content_Mobile");
    let isClickInside = false;

    dropdowns.forEach((dropdown) => {
        if (dropdown.contains(event.target)) {
            isClickInside = true;
        }
    });

    if (!isClickInside) {
        closeAllDropdowns(null); // Close all dropdowns
    }
});

// ===== Back Button Functionality =====
const backBtn = document.getElementById("back-btn");
if (backBtn) {
    backBtn.addEventListener("click", () => {
        window.location.href = "index.html"; // Redirect to home page
    });
}