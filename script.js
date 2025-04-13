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

  // BURGER MENU
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');
  
  // Toggle the mobile menu visibility when the logo is clicked
  burger.addEventListener('click', () => {
    mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
  });
  
  // Close the mobile menu when any link is clicked
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.style.display = 'none';
    });
  });
  
  // STARZZZ
  document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll('.star');

    stars.forEach(star => {
        // Randomize the position of each star
        const xPos = Math.random() * 100; // Random horizontal position (0 to 100%)
        const yPos = Math.random() * 100; // Random vertical position (0 to 100%)
        
        // Randomize the size of each star for variety
        const size = Math.random() * 3 + 1; // Random size between 1px and 4px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Set the star position
        star.style.left = `${xPos}%`;
        star.style.top = `${yPos}%`;

        // Add random opacity to make stars look more natural
        star.style.opacity = Math.random() * 0.5 + 0.3;
    });
});

//PANETSZZZZ 
