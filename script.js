document.addEventListener('DOMContentLoaded', () => {

    // --- 1. THEME SWITCHER (KUNDUZGI/TUNGI REJIM) LOGIKASI ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Brauzer xotirasidan saqlangan rejimni tekshirish
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        if (savedTheme === 'dark-mode') {
            themeToggle.checked = true;
        }
    } else {
        // Agar xotirada bo'lmasa, default qorong'u rejimni yoqish
        body.classList.add('dark-mode');
        themeToggle.checked = true;
    }

    themeToggle.addEventListener('change', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light-mode');
        } else {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        }
    });


    // --- 2. LOYIHALAR HAQIDA MA'LUMOT ---
    const projectsData = { /* Bu qism o'zgarishsiz qoladi */ };


    // --- 3. GSAP ANIMATSIYALARI ---
    gsap.registerPlugin(ScrollTrigger);
    // Kirish animatsiyasi
    gsap.from(".profile-picture, .hero-name, .hero-subtitle", {
        opacity: 0, y: 30, duration: 1, ease: "power3.out", stagger: 0.2
    });
    // Scroll animatsiyalari
    const sections = gsap.utils.toArray('.content-section');
    sections.forEach(section => {
        const elements = section.querySelectorAll(".section-title, .cv-item, .skill-item, .project-card, .contact-text, .contact-link");
        gsap.from(elements, {
            y: 50, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.1,
            scrollTrigger: { trigger: section, start: "top 85%", }
        });
    });

    // --- 4. INTERAKTIV PROJECT MODAL LOGIKASI ---
    // Bu qism ham o'zgarishsiz qoladi
    
});
