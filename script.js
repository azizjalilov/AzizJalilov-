// Sahna, Kamera, Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x0a192f, 1); // CSS dagi fon rangi bilan bir xil

const container = document.getElementById('canvas-container');
container.appendChild(renderer.domElement);

// Zarralar (Particles) yaratish
const particleCount = 7000;
const particles = new THREE.BufferGeometry();
const posArray = new Float32Array(particleCount * 3);

for (let i = 0; i < particleCount * 3; i++) {
    // Zarralarni sferik shaklda joylashtiramiz
    let theta = THREE.MathUtils.randFloatSpread(360); 
    let phi = THREE.MathUtils.randFloatSpread(360); 
    posArray[i] = Math.sin(theta) * Math.cos(phi) * 15;
    posArray[i+1] = Math.sin(theta) * Math.sin(phi) * 15;
    posArray[i+2] = Math.cos(theta) * 15;
}

particles.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

const particleMaterial = new THREE.PointsMaterial({
    size: 0.015,
    color: 0x00c6ff,
    transparent: true,
    opacity: 0.7
});

const particleMesh = new THREE.Points(particles, particleMaterial);
scene.add(particleMesh);

// Sichqoncha harakatini kuzatish
let mouseX = 0;
let mouseY = 0;
document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

// Animatsiya
const clock = new THREE.Clock();

const animate = () => {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    // Zarralarning sekin aylanishi
    particleMesh.rotation.y = elapsedTime * 0.05;

    // Kamera harakati
    camera.position.x += (mouseX - window.innerWidth / 2 - camera.position.x) * 0.0001;
    camera.position.y += (-mouseY + window.innerHeight / 2 - camera.position.y) * 0.0001;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
};

animate();

// Oyna o'lchami o'zgarganda
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
