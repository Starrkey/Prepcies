document.addEventListener("DOMContentLoaded", function () {
    // If the URL has a hash (like #main-content), prevent auto-scroll
    if (window.location.hash) {
        window.scrollTo(0, 0); // Scroll to top
        history.replaceState(null, null, window.location.pathname); // Remove the hash from URL
    }

    // Handle CTA button behavior
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function () {
            setTimeout(() => {
                history.replaceState(null, null, ' '); // Remove the hash on button click
            }, 100); // Slight delay to let scroll happen
        });
    }
});

// Carousel logic for services section
document.addEventListener("DOMContentLoaded", () => {
    const servicesTrack = document.querySelector('.services-track');
    const leftButton = document.querySelector('.carousel-btn.left');
    const rightButton = document.querySelector('.carousel-btn.right');

    // Check if carousel elements exist before applying logic
    if (servicesTrack && leftButton && rightButton) {
        const scrollAmount = 300; // Customize the scroll distance

        leftButton.addEventListener('click', () => {
            servicesTrack.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        rightButton.addEventListener('click', () => {
            servicesTrack.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    // Burger menu toggle functionality
    const burgerMenu = document.querySelector('.burger-menu');
    const burgerMenuContent = document.querySelector('.burger-menu-content');
    
    if (burgerMenu && burgerMenuContent) {
        burgerMenu.addEventListener('click', function () {
            
            burgerMenuContent.classList.toggle('active'); // Toggle the mobile menu
            

            // Lock or unlock body scroll
            if (burgerMenuContent.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.navbar ul li a, .burger-menu-content ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor behavior
            const targetId = this.getAttribute('href').substring(1); // Get target section ID
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust the scroll position (offset)
                    behavior: 'smooth'
                });
            }
        });
    });

    // Close mobile menu when a menu item is clicked
    const menuItems = document.querySelectorAll('.burger-menu-content ul li a');
    menuItems.forEach(item => {
        item.addEventListener('click', function () {
            burgerMenuContent.classList.remove('active'); // Close menu after clicking
            document.body.style.overflow = 'auto'; // Re-enable scroll when menu closes
        });
    });
});
