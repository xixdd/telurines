// DOM Elements
const leftArrow = document.getElementById('leftArrow');
const sidebarMenu = document.getElementById('sidebarMenu');
const overlay = document.getElementById('overlay');
const mainContent = document.getElementById('mainContent');
const downArrow = document.getElementById('downArrow');
const expandedContent = document.getElementById('expandedContent');
const infoBox = document.getElementById('infoBox');

// State
let isSidebarOpen = false;
let isContentExpanded = false;

// Toggle Sidebar Menu
function toggleSidebar() {
    isSidebarOpen = !isSidebarOpen;
    
    if (isSidebarOpen) {
        sidebarMenu.classList.add('open');
        overlay.classList.add('active');
        mainContent.classList.add('blurred');
        leftArrow.classList.add('active');
    } else {
        sidebarMenu.classList.remove('open');
        overlay.classList.remove('active');
        mainContent.classList.remove('blurred');
        leftArrow.classList.remove('active');
    }
}

// Toggle Expanded Content
function toggleExpandedContent() {
    isContentExpanded = !isContentExpanded;
    
    if (isContentExpanded) {
        expandedContent.classList.add('open');
        downArrow.classList.add('active');
        infoBox.style.borderRadius = '16px 16px 0 0';
    } else {
        expandedContent.classList.remove('open');
        downArrow.classList.remove('active');
        infoBox.style.borderRadius = '16px';
    }
}

// Event Listeners
leftArrow.addEventListener('click', toggleSidebar);

overlay.addEventListener('click', () => {
    if (isSidebarOpen) {
        toggleSidebar();
    }
});

downArrow.addEventListener('click', toggleExpandedContent);

// Handle sidebar link clicks
const sidebarLinks = document.querySelectorAll('.sidebar-link');
sidebarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // Close sidebar first
        toggleSidebar();
        
        // Allow navigation to happen naturally
        console.log('Navigating to:', href);
    });
});


// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (isSidebarOpen) {
            toggleSidebar();
        }
        if (isContentExpanded) {
            toggleExpandedContent();
        }
    }
});

// Add pulse animation to down arrow after a delay
setTimeout(() => {
    downArrow.classList.add('pulse');
}, 2000);

// Remove pulse on hover
downArrow.addEventListener('mouseenter', () => {
    downArrow.classList.remove('pulse');
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Touch swipe support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    const swipeThreshold = 100;
    const diff = touchStartX - touchEndX;
    
    // Swipe left to open sidebar (from left edge)
    if (touchStartX < 50 && diff < -swipeThreshold && !isSidebarOpen) {
        toggleSidebar();
    }
    
    // Swipe right to close sidebar
    if (diff > swipeThreshold && isSidebarOpen) {
        toggleSidebar();
    }
}

console.log('画世界Pro - Website loaded successfully!');
