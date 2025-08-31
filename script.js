document.addEventListener('DOMContentLoaded', () => {

    // --- 1. 3D BACKGROUND LOGIC ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.getElementById('canvas-container').appendChild(renderer.domElement);
    }
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 5000;
    const posArray = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 60;
    }
    starGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const starMaterial = new THREE.PointsMaterial({ size: 0.015, color: 0x00e5ff });
    const starMesh = new THREE.Points(starGeometry, starMaterial);
    scene.add(starMesh);

    function animate3D() {
        requestAnimationFrame(animate3D);
        starMesh.rotation.y += 0.0002;
        renderer.render(scene, camera);
    }
    animate3D();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // --- 2. INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS ---
    const animatedSections = document.querySelectorAll('.animated-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 }); // Trigger when 20% of the section is visible

    animatedSections.forEach(section => {
        observer.observe(section);
    });
    
    // --- 3. HAMBURGER MENU LOGIC ---
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mainNav = document.querySelector('.main-nav');

    hamburgerMenu.addEventListener('click', () => {
        hamburgerMenu.classList.toggle('is-active');
        mainNav.classList.toggle('is-active');
    });

    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('is-active')) {
                hamburgerMenu.classList.remove('is-active');
                mainNav.classList.remove('is-active');
            }
        });
    });

});
