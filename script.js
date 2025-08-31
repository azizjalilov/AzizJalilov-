document.addEventListener('DOMContentLoaded', () => {

    // --- YUKLANISH SPINNERI LOGIKASI ---
    window.addEventListener('load', () => {
        const loader = document.querySelector('.loader');
        const mainContent = document.getElementById('main-content');
        
        loader.classList.add('content-loaded');
        gsap.to(mainContent, { opacity: 1, duration: 1 });
    });

    // --- THEME SWITCHER LOGIKASI ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme') || 'dark-mode';
    body.className = savedTheme;
    themeToggle.checked = savedTheme === 'dark-mode';

    themeToggle.addEventListener('change', () => {
        if (body.classList.contains('dark-mode')) {
            body.className = 'light-mode';
            localStorage.setItem('theme', 'light-mode');
        } else {
            body.className = 'dark-mode';
            localStorage.setItem('theme', 'dark-mode');
        }
    });

    // --- LOYIHALAR MA'LUMOTLARI ---
    const projectsData = {
        '1': { title: 'Urban Planning Model', images: [ { src: 'project-1.png', caption: 'General Plan' }, { src: 'project-4.png', caption: 'Presentation' } ] },
        '2': { title: 'Residential Complex Model', images: [ { src: 'project-3.png', caption: 'Top View' }, { src: 'project-5.png', caption: 'Facade Detail' } ] },
        '3': { title: 'CAD Axonometric Drawing', images: [ { src: 'project-2.png', caption: 'Digital 3D Axonometry' } ] }
    };

    // --- GSAP ANIMATSIYALARI ---
    gsap.registerPlugin(ScrollTrigger);
    
    // Kirish animatsiyasi (yuklanishdan keyin)
    gsap.from(".profile-picture, .hero-name, .hero-subtitle", {
        opacity: 0, y: 30, duration: 1, ease: "power3.out", stagger: 0.2, delay: 0.5
    });

    const sections = gsap.utils.toArray('.content-section');
    sections.forEach(section => {
        const elements = section.querySelectorAll(".section-title, .cv-item, .skill-item, .project-card, .contact-text, .contact-link, .cta-button");
        gsap.from(elements, {
            y: 50, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.1,
            scrollTrigger: { trigger: section, start: "top 85%" }
        });
    });

    // --- MODAL LOGIKASI ---
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalGallery = document.getElementById('modal-gallery');
    const closeButton = document.querySelector('.modal-close');
    const projectCards = document.querySelectorAll('.project-card');

    function openModal(projectId) {
        const project = projectsData[projectId];
        if (!project) return;
        modalTitle.textContent = project.title;
        modalGallery.innerHTML = '';
        project.images.forEach(image => {
            const item = document.createElement('div');
            item.className = 'modal-gallery-item';
            item.innerHTML = `<img src="${image.src}" alt="${image.caption}"><p>${image.caption}</p>`;
            modalGallery.appendChild(item);
        });
        modal.style.display = 'flex';
    }

    function closeModal() { modal.style.display = 'none'; }
    projectCards.forEach(card => { card.addEventListener('click', () => { openModal(card.dataset.projectId); }); });
    closeButton.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) { closeModal(); } });
});
