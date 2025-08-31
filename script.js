document.addEventListener('DOMContentLoaded', () => {

    // --- 1. LOYIHALAR HAQIDA MA'LUMOT (RASMLAR VA YOZUQLAR) ---
    // Rasmlaringiz nomini va yozuvlarni shu yerda o'zgartirasiz
    const projectsData = {
        '1': {
            title: 'Urban Planning Model',
            images: [
                { src: 'project-1.png', caption: 'General Plan View' },
                { src: 'project-4.png', caption: 'Presentation to Stakeholders' },
                { src: 'project-6.png', caption: 'Detailed Street View' },
                { src: 'project-9.png', caption: 'Fabrication Process' },
                { src: 'project-7.png', caption: 'Team Collaboration' }
            ]
        },
        '2': {
            title: 'Residential Complex Model',
            images: [
                { src: 'project-3.png', caption: 'Physical Model - Top View' },
                { src: 'project-5.png', caption: 'Detailed Facade' },
                { src: 'project-8.png', caption: 'Laser Cut Components' }
            ]
        },
        '3': {
            title: 'CAD Axonometric Drawing',
            images: [
                { src: 'project-2.png', caption: 'Digital 3D Axonometry' }
            ]
        }
    };


    // --- 2. GSAP KINEMATIK ANIMATSIYALARI ---
    gsap.registerPlugin(ScrollTrigger);

    // Hero Section Animation
    gsap.from(".hero-line span", {
        y: "100%",
        ease: "power3.out",
        duration: 1,
        stagger: 0.2
    });

    // Boshqa bo'limlar uchun umumiy animatsiya
    const sections = gsap.utils.toArray('.content-section');
    sections.forEach(section => {
        const elements = section.querySelectorAll(".section-title, .section-intro, .cv-item, .skill-item, .project-card, .contact-text, .contact-links a");
        gsap.from(elements, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
            }
        });
    });


    // --- 3. INTERAKTIV PROJECT MODAL LOGIKASI ---
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalGallery = document.getElementById('modal-gallery');
    const closeButton = document.querySelector('.modal-close');
    const projectCards = document.querySelectorAll('.project-card');

    function openModal(projectId) {
        const project = projectsData[projectId];
        if (!project) return;

        modalTitle.textContent = project.title;
        modalGallery.innerHTML = ''; // Galereyani tozalash

        project.images.forEach(image => {
            const item = document.createElement('div');
            item.className = 'modal-gallery-item';
            item.innerHTML = `<img src="${image.src}" alt="${image.caption}"><p>${image.caption}</p>`;
            modalGallery.appendChild(item);
        });

        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Orqa fon scrollini o'chirish
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Scrollni qaytarish
    }

    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            openModal(card.dataset.projectId);
        });
    });

    closeButton.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) { // Faqat qora fonga bosganda yopilishi uchun
            closeModal();
        }
    });
});
