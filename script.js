document.addEventListener('DOMContentLoaded', () => {
  console.log('Document loaded');

  // Smooth scrolling
  const links = document.querySelectorAll('header nav ul li a');
  const navWrapper = document.querySelector('.nav-wrapper');
  const hamburger = document.querySelector('.hamburger');

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 50, // Adjust for header height if needed
          behavior: 'smooth'
        });
      }

      // Close the nav menu when a link is clicked on mobile
      if (navWrapper.classList.contains('active')) {
        navWrapper.classList.remove('active');
        // Change the hamburger icon back to its original state
        hamburger.classList.remove('active');
      }
    });
  });

  // Slideshow functionality
  const slideshows = document.querySelectorAll('.slideshow-container');

  slideshows.forEach(slideshow => {
    let slideIndex = 0;
    const slides = slideshow.querySelectorAll('.mySlides');

    const showSlides = () => {
      slides.forEach((slide, index) => {
        slide.style.display = 'none';
        slide.style.opacity = '0';
        slide.style.transform = 'translateX(100%)';
      });

      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }

      const currentSlide = slides[slideIndex - 1];
      currentSlide.style.display = 'block';
      setTimeout(() => {
        currentSlide.style.transition = 'opacity 1s ease, transform 1s ease';
        currentSlide.style.opacity = '1';
        currentSlide.style.transform = 'translateX(0)';
      }, 10); // Allow display change to take effect before starting transition

      setTimeout(showSlides, 3000); // Change image every 3 seconds
    };

    showSlides();
  });

  // Hamburger menu functionality
  hamburger.addEventListener('click', function() {
    navWrapper.classList.toggle('active');
    // Toggle the hamburger icon to X and back
    hamburger.classList.toggle('active');
  });
});
