const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true }); // Включаем сглаживание

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Добавляем свет
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
scene.add(light);
scene.add(new THREE.AmbientLight(0x404040)); // Мягкий фоновый свет

// Создаем "Корпус" (металлический)
const geometry = new THREE.BoxGeometry(2, 0.5, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.8, roughness: 0.2 });
const carBody = new THREE.Mesh(geometry, material);
scene.add(carBody);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    carBody.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
