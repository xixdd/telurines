// Nitro+ CHiRAL Website Scripts
// Carousel functionality with pause on hover and arrow navigation

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('carousel');
    const carouselTrack = document.getElementById('carouselTrack');
    const arrowLeft = document.getElementById('arrowLeft');
    const arrowRight = document.getElementById('arrowRight');
    
    if (carousel && carouselTrack) {
        const slides = carouselTrack.querySelectorAll('.carousel-slide');
        const slideWidth = slides[0].offsetWidth;
        let currentPosition = 0;
        let isManualScrolling = false;
        let autoResumeTimeout;
        
        // Function to update carousel position
        function updatePosition() {
            carouselTrack.style.transform = `translateX(-${currentPosition}px)`;
        }
        
        // Scroll left (previous)
        function scrollLeft() {
            isManualScrolling = true;
            carouselTrack.classList.add('manual-scroll');
            
            currentPosition -= slideWidth;
            if (currentPosition < 0) {
                currentPosition = (slides.length - 1) * slideWidth;
            }
            updatePosition();
            
            // Clear existing timeout and set new one to resume auto-scroll
            clearTimeout(autoResumeTimeout);
            autoResumeTimeout = setTimeout(() => {
                carouselTrack.classList.remove('manual-scroll');
                carouselTrack.style.transform = '';
                currentPosition = 0;
                isManualScrolling = false;
            }, 3000);
        }
        
        // Scroll right (next)
        function scrollRight() {
            isManualScrolling = true;
            carouselTrack.classList.add('manual-scroll');
            
            currentPosition += slideWidth;
            if (currentPosition >= slides.length * slideWidth) {
                currentPosition = 0;
            }
            updatePosition();
            
            // Clear existing timeout and set new one to resume auto-scroll
            clearTimeout(autoResumeTimeout);
            autoResumeTimeout = setTimeout(() => {
                carouselTrack.classList.remove('manual-scroll');
                carouselTrack.style.transform = '';
                currentPosition = 0;
                isManualScrolling = false;
            }, 3000);
        }
        
        // Add click event listeners to arrows
        if (arrowLeft) {
            arrowLeft.addEventListener('click', function(e) {
                e.stopPropagation();
                scrollLeft();
            });
        }
        
        if (arrowRight) {
            arrowRight.addEventListener('click', function(e) {
                e.stopPropagation();
                scrollRight();
            });
        }
        
        // Optional: Add click navigation to slides
        slides.forEach((slide, index) => {
            slide.style.cursor = 'pointer';
            slide.addEventListener('click', function() {
                console.log('Slide ' + (index + 1) + ' clicked');
            });
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                scrollLeft();
            } else if (e.key === 'ArrowRight') {
                scrollRight();
            }
        });
        
        // Handle window resize
        window.addEventListener('resize', function() {
            if (!isManualScrolling) {
                currentPosition = 0;
                carouselTrack.style.transform = '';
            }
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

if (!localStorage.getItem("alertShown")) {
    alert("Welcome!");
    localStorage.setItem("alertShown", "true");