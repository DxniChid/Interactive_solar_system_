
const sunGeometry = new THREE.SphereGeometry(5, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({color: 0xffff00 });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

const earthGeometry = new THREE.SphereGeometry(2, 32, 32);
const earthMaterial = new THREE.MeshBasicMaterial({color:0x0000ff});
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);
earth.position.x = 15;

const moonGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const moonMaterial = new THREE.MeshBasicMaterial({color: 0x888888});
const moon = new THREE.Mesh(moonGeometry, moonMaterial);
scene.add(moon);
moon.position.x = 18;

const marsGeometry = new THREE.SphereGeometry(1.5, 32, 32);
const marsMaterial = new THREE.MeshBasicMaterial({color: 0x0000ff });
const mars = new THREE.Mesh(marsGeometry, marsMaterial);
scene.add(mars);
mars.position.x = 22;

const neptuneGeometry = new THREE.SphereGeometry(3, 32, 32);
const neptuneMaterial = new THREE.MeshBasicMaterial({color: 0xff4500});
const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
scene.add(neptune);
neptune.position.x = 29;



window.addEventListener('resize', ()=> {
    camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize(window.innerWidth, window.innerHeight);
});

let time = 0;

function animate() {
    requestAnimationFrame(animate);
    sun.rotation.y += 0.01;

    const earthOrbitRadius = 15;
    const marsOrbitRadius = 22;
    const neptuneOrbitRadius = 40;
    const moonOrbitRadius = 3;

    time += 0.01;
    
    earth.position.x = earthOrbitRadius * Math.cos(time);
    earth.position.z = earthOrbitRadius * Math.sin(time);

    mars.position.x = marsOrbitRadius * Math.cos(time * 0.8);
    mars.position.z = marsOrbitRadius * Math.sin(time * 0.8);

    neptune.position.x = neptuneOrbitRadius * Math.cos(time * 0.3);
    neptune.position.z = neptuneOrbitRadius * Math.sin(time * 0.3);

    moon.position.x = earth.position.x + moonOrbitRadius * Math.cos(time * 5);
    moon.position.z = earth.position.z + moonOrbitRadius * Math.sin(time * 5);
    renderer.render(scene, camera);
}
animate();