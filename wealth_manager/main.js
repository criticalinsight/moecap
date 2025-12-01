document.addEventListener('DOMContentLoaded', () => {
    // Header scroll effect
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Animate elements
    const animatedElements = [
        ...document.querySelectorAll('.feature-card'),
        document.querySelector('.hero-title'),
        document.querySelector('.hero-subtitle'),
        document.querySelector('.testimonial')
    ];

    animatedElements.forEach((el, index) => {
        if (el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            // Stagger delay for cards
            if (el.classList.contains('feature-card')) {
                el.style.transitionDelay = `${index * 0.1}s`;
            }
            observer.observe(el);
        }
    });
});
