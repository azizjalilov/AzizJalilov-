// script.js (classic Three.js, no modules)

// Renderer
const canvas = document.getElementById('scene');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(canvas.clientWidth || window.innerWidth, canvas.clientHeight || 520);

// Scene & Camera
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x071424);

const camera = new THREE.PerspectiveCamera(40, canvas.clientWidth / canvas.clientHeight, 0.1, 100);
camera.position.set(0, 1.2, 6);

// Light
const hemi = new THREE.HemisphereLight(0xbfefff, 0x080820, 0.7);
scene.add(hemi);
const dir = new THREE.DirectionalLight(0xffffff, 1.0);
dir.position.set(5, 10, 7);
scene.add(dir);

// Controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.maxPolarAngle = Math.PI / 2.1;
controls.target.set(0, 0.5, 0);
controls.update();

// Objects
const group = new THREE.Group();
scene.add(group);

const torus = new THREE.Mesh(
  new THREE.TorusGeometry(1.2, 0.22, 64, 160),
  new THREE.MeshStandardMaterial({ color: 0x7ce7ff, metalness: 0.3, roughness: 0.2 })
);
torus.position.y = 0.6;
group.add(torus);

const knot = new THREE.Mesh(
  new THREE.TorusKnotGeometry(0.6, 0.18, 160, 32),
  new THREE.MeshStandardMaterial({ color: 0x8a7cff, metalness: 0.3, roughness: 0.2 })
);
knot.position.y = 0.6;
group.add(knot);

// Animation
function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.005;
  torus.rotation.y += 0.01;
  knot.rotation.y += 0.01;

  controls.update();
  renderer.render(scene, camera);
}
animate();

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
