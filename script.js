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


// Story carousel
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".story-slide");
    const volumeBtn = document.querySelector(".global-volume-control .volume-btn");
    const volumeSlider = document.querySelector(".global-volume-control .volume-slider");
    let currentIndex = 0;

    const videos = document.querySelectorAll(".story-video");

    // Function to update volume for all videos
    const updateVolumeUI = () => {
      videos.forEach((video) => {
        volumeBtn.classList.toggle("muted", video.muted || video.volume === 0);
        volumeBtn.classList.toggle("unmuted", !video.muted && video.volume > 0);
        volumeSlider.value = video.volume;
      });
    };

    const showSlide = (index) => {
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;
      currentIndex = index;

      slides.forEach((slide, i) => {
        const video = slide.querySelector("video");
        if (i === index) {
          slide.classList.add("active");
          video.currentTime = 0;
          video.play();
        } else {
          slide.classList.remove("active");
          video.pause();
        }
      });

      updateVolumeUI();
    };

    document.querySelector(".left-zone").addEventListener("click", () => {
      showSlide(currentIndex - 1);
    });

    document.querySelector(".right-zone").addEventListener("click", () => {
      showSlide(currentIndex + 1);
    });

    // Global Volume Button
    volumeBtn.addEventListener("click", () => {
      videos.forEach((video) => {
        video.muted = !video.muted;
      });
      updateVolumeUI();
    });

    // Global Volume Slider
    volumeSlider.addEventListener("input", (e) => {
      const volume = e.target.value;
      videos.forEach((video) => {
        video.volume = volume;
        video.muted = volume == 0;
      });
      updateVolumeUI();
    });

    // Auto move to next slide
    videos.forEach((video) => {
      video.addEventListener("ended", () => {
        showSlide(currentIndex + 1);
      });
    });

    showSlide(0);
  });
