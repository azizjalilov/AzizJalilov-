document.addEventListener('DOMContentLoaded', () => {
    const projectsData = {
        '1': {
            title: 'Urban Planning Model',
            images: [
                { src: 'project-1.png', caption: 'General Plan View' }, { src: 'project-4.png', caption: 'Presentation' }, { src: 'project-6.png', caption: 'Street View' }, { src: 'project-9.png', caption: 'Fabrication' }, { src: 'project-7.png', caption: 'Collaboration' }
            ]
        },
        '2': {
            title: 'Residential Complex Model',
            images: [
                { src: 'project-3.png', caption: 'Top View' }, { src: 'project-5.png', caption: 'Facade Detail' }, { src: 'project-8.png', caption: 'Components' }
            ]
        },
        '3': { title: 'CAD Axonometric Drawing', images: [ { src: 'project-2.png', caption: 'Digital 3D Axonometry' } ] }
    };

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".profile-picture, .hero-name, .hero-subtitle", {
        opacity: 0, y: 30, duration: 1, ease: "power3.out", stagger: 0.2
    });

    const sections = gsap.utils.toArray('.content-section');
    sections.forEach(section => {
        const elements = section.querySelectorAll(".section-title, .cv-item, .skill-item, .project-card, .contact-text, .contact-methods a, .cta-button");
        gsap.from(elements, {
            y: 50, opacity: 0, duration: 1, ease: "power3.out", stagger: 0.1,
            scrollTrigger: { trigger: section, start: "top 80%" }
        });
    });

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
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }

    projectCards.forEach(card => { card.addEventListener('click', () => { openModal(card.dataset.projectId); }); });
    closeButton.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) { closeModal(); } });
});
