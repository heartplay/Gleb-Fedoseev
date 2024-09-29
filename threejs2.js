import * as THREE from 'three';
// import * as THREE from "https://github.com/mrdoob/three.js.git"

const sizes = { 
    width: 1000,
    height: 1000,
}

const cursor = {
    // x: 1.8,
    // y: 0.8,
    x: 0,
    y: 0,
};
const canvas = document.querySelector('.canvas');

// Сцена
const scene = new THREE.Scene();

// Оси
const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);

// Камера
const camera = new THREE.PerspectiveCamera(70, sizes.width / sizes.height);
camera.position.z = 3;
// camera.position.y = 0.5;
scene.add(camera)



// Свойства объекта
const typeobject = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
    color: 'green',
    wireframe: true,
});

// Объект
const object = new THREE.Mesh(typeobject, material);
object.position.set(0,0,0);
scene.add(object);

// Рендер
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

window.addEventListener('mousemove', (event) => {
    console.log(event.clientX / sizes.width - 0.5, event.clientY / sizes.height - 0.5);
    cursor.x = -(event.clientX / sizes.width - 1);
    cursor.y = event.clientY / sizes.height - 0.5
});

const tick = () => {
    // camera.position.x = cursor.x * 4;
    // camera.position.y = cursor.y * 4;
    camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 2;
    camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 2;
    camera.position.y = cursor.y * 2;
    camera.lookAt(object.position);

    renderer.render(scene, camera);
    window.requestAnimationFrame(tick);
}

tick();

// window.addEventListener('mousemove', (event) => {
//     // console.log(event.clientX / sizes.width - 0.5);
//     // console.log(event.clientY / sizes.height - 0.5);
//     // cursor.x = -(event.clientX / sizes.width - 0.5);
//     // cursor.y = event.clientY / sizes.height - 0.5;
//     console.log(event.clientX);
//     console.log(event.clientY);
//     cursor.x = -(event.clientX);
//     cursor.y = event.clientY;
// })

// const tick = () => {
//     camera.position.x = cursor.x * 0.5;
//     camera.position.y = cursor.y * 0.5;
//     camera.lookAt(object.position);
//     renderer.render(scene, camera);
//     window.requestAnimationFrame(tick);
// }

// tick();
