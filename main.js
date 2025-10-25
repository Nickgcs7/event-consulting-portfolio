// Main GSAP setup and utilities
gsap.registerPlugin(ScrollTrigger);

// Smooth scroll setup
const lenis = {
    init() {
        // Smooth scrolling enhancement via CSS
        document.documentElement.style.scrollBehavior = 'smooth';
    }
};

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    lenis.init();

    // Navigation animation on scroll
    let lastScroll = 0;
    const nav = document.querySelector('.nav');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling down
            gsap.to(nav, {
                y: -100,
                duration: 0.3,
                ease: 'power2.out'
            });
        } else {
            // Scrolling up
            gsap.to(nav, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
        
        lastScroll = currentScroll;
    });

    // Button hover effects
    document.querySelectorAll('.cta-button, .submit-button').forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Service card hover effects
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Parallax effect for sections
    gsap.utils.toArray('section').forEach(section => {
        const bg = section.querySelector('.hero-decoration');
        if (bg) {
            gsap.to(bg, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true
                },
                y: 200,
                ease: 'none'
            });
        }
    });
});

// Utility function for stagger animations
function animateOnScroll(selector, options = {}) {
    const defaults = {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out'
    };

    const settings = { ...defaults, ...options };

    gsap.from(selector, {
        scrollTrigger: {
            trigger: selector,
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        ...settings
    });
}

// Cursor interaction (optional enhancement)
if (window.matchMedia('(pointer: fine)').matches) {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    const cursorStyle = document.createElement('style');
    cursorStyle.textContent = `
        .custom-cursor {
            position: fixed;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: rgba(102, 126, 234, 0.5);
            pointer-events: none;
            z-index: 10000;
            mix-blend-mode: difference;
            transition: transform 0.2s ease;
        }
    `;
    document.head.appendChild(cursorStyle);

    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, {
            x: e.clientX - 10,
            y: e.clientY - 10,
            duration: 0.3,
            ease: 'power2.out'
        });
    });

    // Scale cursor on interactive elements
    document.querySelectorAll('a, button').forEach(el => {
        el.addEventListener('mouseenter', () => {
            gsap.to(cursor, { scale: 2, duration: 0.3 });
        });
        el.addEventListener('mouseleave', () => {
            gsap.to(cursor, { scale: 1, duration: 0.3 });
        });
    });
}