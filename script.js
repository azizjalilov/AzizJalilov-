document.addEventListener('DOMContentLoaded', () => {
    // --- THEME SWITCHER LOGIKASI ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const savedTheme = localStorage.getItem('theme') || 'dark-mode';
    body.className = savedTheme;
    themeToggle.checked = savedTheme === 'dark-mode';
    themeToggle.addEventListener('change', () => {
        body.className = body.classList.contains('dark-mode') ? 'light-mode' : 'dark-mode';
        localStorage.setItem('theme', body.className);
    });

    // --- GSAP ANIMATSIYALARI ---
    gsap.registerPlugin(ScrollTrigger);
    gsap.from(".profile-picture, .hero-name, .hero-subtitle", { opacity: 0, y: 30, duration: 1, ease: "power3.out", stagger: 0.2 });
    const sections = gsap.utils.toArray('.content-section');
    sections.forEach(section => {
        const elements = section.querySelectorAll(".section-title, .cv-item, .skill-item, .project-card, .contact-info, .contact-form");
        gsap.from(elements, {
            y: 50, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.1,
            scrollTrigger: { trigger: section, start: "top 85%" }
        });
    });
    
    // --- KONTAKT FORMASI VA ANIMATSIYALI TUGMA LOGIKASI ---
    const contactForm = document.getElementById('contact-form');
    const sendButton = document.getElementById('send-button');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Sahifani yangilanishini to'xtatish
        
        // Tugmani bosib bo'lmas holatga keltirish
        if (sendButton.classList.contains('sending')) return;

        // Ma'lumotlarni olish
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Animatsiyani boshlash
        sendButton.classList.add('sending');

        // Mailto linkini yaratish
        const subject = `Message from ${name} via Portfolio`;
        const body = `${message}\n\nFrom: ${name} (${email})`;
        const mailtoLink = `mailto:azizjalilov575@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Animatsiya tugagach, email dasturini ochish va tugmani "muvaffaqiyatli" holatga o'tkazish
        setTimeout(() => {
            window.location.href = mailtoLink;
            
            sendButton.classList.remove('sending');
            sendButton.classList.add('success');
            
            // Bir necha soniyadan so'ng tugmani asl holiga qaytarish
            setTimeout(() => {
                sendButton.classList.remove('success');
                contactForm.reset(); // Formani tozalash
            }, 3000);

        }, 1500); // 1.5 soniya animatsiya uchun
    });
    
    // --- MODAL LOGIKASI (O'zgarishsiz) ---
    // ... Oldingi versiyadagi modal kodi to'liq ko'chiriladi ...
});
