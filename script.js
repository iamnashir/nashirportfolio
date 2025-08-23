document.addEventListener('DOMContentLoaded', () => {
    // GSAP Scroll Animations
    gsap.registerPlugin(ScrollTrigger);

    // Loader Animation and Removal
    const loader = document.querySelector('.loader');
    if (loader) {
        gsap.to(loader, {
            opacity: 0,
            duration: 1,
            onComplete: () => {
                if (loader.parentNode) loader.parentNode.removeChild(loader);
            }
        });
    }

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        gsap.to(section, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Counter Animation for Showcase
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        gsap.from(counter, {
            textContent: 0,
            duration: 2.5,
            ease: 'power1.out',
            snap: { textContent: 1 },
            scrollTrigger: {
                trigger: counter,
                start: 'top 85%',
                toggleActions: 'play none none none'
            },
            onUpdate: function() {
                counter.textContent = Math.ceil(this.targets()[0].textContent);
            },
            onComplete: function() {
                counter.textContent = target;
            }
        });
    });

    // Animate timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        gsap.from(item, {
            opacity: 0,
            x: index % 2 === 0 ? -50 : 50,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Animate skills on hover
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        skill.addEventListener('mouseenter', () => {
            gsap.to(skill, {
                scale: 1.1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        skill.addEventListener('mouseleave', () => {
            gsap.to(skill, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Animate stats on hover
    const stats = document.querySelectorAll('.stat');
    stats.forEach(stat => {
        stat.addEventListener('mouseenter', () => {
            gsap.to(stat, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        stat.addEventListener('mouseleave', () => {
            gsap.to(stat, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Animate project cards on hover
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Animate testimonial cards on hover
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Basic form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Form submitted! (This is a demo, no data is actually sent.)');
            contactForm.reset();
        });
    }

    // Animate CV button on hover
    const cvButton = document.querySelector('.cv-button');
    if (cvButton) {
        cvButton.addEventListener('mouseenter', () => {
            gsap.to(cvButton, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        cvButton.addEventListener('mouseleave', () => {
            gsap.to(cvButton, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    }

    // Toggle mobile menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Back to Top Button
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 200) {
                backToTop.style.display = 'block';
                gsap.to(backToTop, { opacity: 1, duration: 0.3 });
            } else {
                gsap.to(backToTop, { opacity: 0, duration: 0.3, onComplete: () => backToTop.style.display = 'none' });
            }
        });

        backToTop.addEventListener('click', () => {
            gsap.to(window, { scrollTo: 0, duration: 1, ease: 'power2.out' });
        });
    }

    // Fade in footer
    const footer = document.querySelector('footer');
    if (footer) {
        gsap.from(footer, {
            opacity: 0,
            duration: 0.5,
            scrollTrigger: {
                trigger: footer,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    }
});