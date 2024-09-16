document.addEventListener('DOMContentLoaded', function () {
    // Back to top functionality
    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 200) {
                backToTopBtn.style.display = 'block';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });

        backToTopBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function () {
            document.body.classList.toggle('dark-mode');
        });
    }

    // Menu slider functionality
    const prevMenuBtn = document.querySelector('.prev-slide');
    const nextMenuBtn = document.querySelector('.next-slide');
    const menuSlider = document.querySelector('.menu-categories .slider');
    let menuIndex = 0;

    if (prevMenuBtn && nextMenuBtn && menuSlider) {
        function showMenuSlide(newIndex) {
            const totalSlides = document.querySelectorAll('.menu-categories .menu-category').length;
            if (newIndex < 0) {
                menuIndex = totalSlides - 1;
            } else if (newIndex >= totalSlides) {
                menuIndex = 0;
            } else {
                menuIndex = newIndex;
            }
            menuSlider.style.transform = `translateX(-${menuIndex * 100}%)`;
        }

        prevMenuBtn.addEventListener('click', function () {
            showMenuSlide(menuIndex - 1);
        });

        nextMenuBtn.addEventListener('click', function () {
            showMenuSlide(menuIndex + 1);
        });

        // Initial load
        showMenuSlide(menuIndex);
    }

    // Testimonials slider functionality
    const prevTestimonialBtn = document.querySelector('.prev-slide-testimonial');
    const nextTestimonialBtn = document.querySelector('.next-slide-testimonial');
    const testimonialsSlider = document.querySelector('.testimonials-slider .slider');
    let testimonialIndex = 0;

    if (prevTestimonialBtn && nextTestimonialBtn && testimonialsSlider) {
        function showTestimonialSlide(newIndex) {
            const totalSlides = document.querySelectorAll('.testimonials-slider .testimonial').length;
            if (newIndex < 0) {
                testimonialIndex = totalSlides - 1;
            } else if (newIndex >= totalSlides) {
                testimonialIndex = 0;
            } else {
                testimonialIndex = newIndex;
            }
            document.querySelectorAll('.testimonials-slider .testimonial').forEach((slide, index) => {
                slide.classList.toggle('active', index === testimonialIndex);
            });
            testimonialsSlider.style.transform = `translateX(-${testimonialIndex * 100}%)`;
        }

        prevTestimonialBtn.addEventListener('click', function () {
            showTestimonialSlide(testimonialIndex - 1);
        });

        nextTestimonialBtn.addEventListener('click', function () {
            showTestimonialSlide(testimonialIndex + 1);
        });

        // Initial load
        showTestimonialSlide(testimonialIndex);
    }

    // Menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function () {
            menu.classList.toggle('show');
        });
    }
});
