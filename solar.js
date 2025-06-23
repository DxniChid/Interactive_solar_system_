
const sunGeometry = new THREE.SphereGeometry(5, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({color: 0xffff00 });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

const earthGeometry = new THREE.SphereGeometry(2, 32, 32);
const earthMaterial = new THREE.MeshBasicMaterial({color:0x0000ff});
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);

const moonGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const moonMaterial = new THREE.MeshBasicMaterial({color: 0x888888});
const moon = new THREE.Mesh(moonGeometry, moonMaterial);

window.addEventListener('resize', ()=> {
    camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize(window.innerWidth, window.innerHeight);
});

function animate() {
    requestAnimationFrame(animate);
    sun.rotation.y += 0.01;
    console.log("Sun rotation:", sun.rotation.y);
    renderer.render(scene, camera);
}
animate();