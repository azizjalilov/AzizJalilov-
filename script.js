// ==========================================
// 1. THREE.JS ORQA FON (FAQAT #hero UCHUN)
// ==========================================
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer({ antialias: true });
const heroSection = document.getElementById('hero');
if (heroSection) {
    renderer.setSize(heroSection.clientWidth, heroSection.clientHeight);
    document.getElementById('canvas-container').appendChild(renderer.domElement);
}
const starGeometry = new THREE.BufferGeometry();
const starCount = 5000;
const posArray = new Float32Array(starCount * 3);
for (let i = 0; i < starCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 60;
}
starGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
const starMaterial = new THREE.PointsMaterial({ size: 0.012, color: 0x00e5ff });
const starMesh = new THREE.Points(starGeometry, starMaterial);
scene.add(starMesh);

function animate3D() {
    requestAnimationFrame(animate3D);
    starMesh.rotation.y += 0.0002;
    renderer.render(scene, camera);
}
animate3D();

window.addEventListener('resize', () => {
    camera.aspect = heroSection.clientWidth / heroSection.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(heroSection.clientWidth, heroSection.clientHeight);
});


// ==========================================
// 2. KETMA-KET CHIQISH ANIMATSIYASI
// ==========================================
const sectionsToAnimate = document.querySelectorAll('.animated-section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

sectionsToAnimate.forEach(section => {
    observer.observe(section);
});


// ==========================================
// 3. AVTOMATIK SCROLL LOGIKASI
// ==========================================
const allSections = document.querySelectorAll('.section');
let currentSectionIndex = 0;
let autoScrollInterval;

const startAutoScroll = () => {
    autoScrollInterval = setInterval(() => {
        currentSectionIndex++;
        if (currentSectionIndex >= allSections.length) {
            stopAutoScroll(); // Barcha bo'limlar ko'rsatilgach, to'xtatish
            return;
        }
        allSections[currentSectionIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 5000); // Har 5 sekundda
};

const stopAutoScroll = () => {
    clearInterval(autoScrollInterval);
    // Foydalanuvchi aralashgandan so'ng, event listener'larni o'chirish
    window.removeEventListener('wheel', stopAutoScroll);
    window.removeEventListener('touchstart', stopAutoScroll);
    window.removeEventListener('keydown', stopAutoScroll);
};

// Sayt yuklangach 5 sekunddan keyin avto-scrollni boshlash
setTimeout(startAutoScroll, 5000);

// Foydalanuvchi scroll qilsa, teginib ko'rsa yoki klaviatura ishlatsa, avto-scrollni to'xtatish
window.addEventListener('wheel', stopAutoScroll, { once: true });
window.addEventListener('touchstart', stopAutoScroll, { once: true });
window.addEventListener('keydown', stopAutoScroll, { once: true });
