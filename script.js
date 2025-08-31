// ==========================================
// 1. THREE.JS ORQA FON ANIMATSIYASI
// ==========================================

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#canvas-container canvas'), antialias: true });
if (document.getElementById('canvas-container')) {
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('canvas-container').appendChild(renderer.domElement);
}

// Yulduzlar effekti
const starGeometry = new THREE.BufferGeometry();
const starCount = 10000;
const posArray = new Float32Array(starCount * 3);

for (let i = 0; i < starCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 60; // X, Y, Z bo'yicha kengroq joylashuv
}

starGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
const starMaterial = new THREE.PointsMaterial({
    size: 0.01,
    color: 0x00c6ff
});
const starMesh = new THREE.Points(starGeometry, starMaterial);
scene.add(starMesh);

let mouseX = 0;
let mouseY = 0;
document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});


function animate3D() {
    requestAnimationFrame(animate3D);
    starMesh.rotation.y += 0.0001;
    starMesh.rotation.x += 0.0001;

    // Kamera harakati
    camera.position.x += (mouseX - window.innerWidth / 2 - camera.position.x) * 0.00005;
    camera.position.y += (-mouseY + window.innerHeight / 2 - camera.position.y) * 0.00005;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
}

animate3D();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// ==========================================
// 2. SCROLL ANIMATSIYASI LOGIKASI
// ==========================================

const sections = document.querySelectorAll('.animated-section');

const options = {
    root: null, // default: viewport
    threshold: 0.15, // bo'limning 15%i ko'ringanda ishga tushadi
    rootMargin: "0px"
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Animatsiya qayta-qayta ishlamasligi uchun
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});
