import * as THREE from 'three';
// import * as THREE from "https://github.com/mrdoob/three.js.git"
// const width = 800;
// const height = 800;
const sizes = { 
    width: 400,
    height: 400,
}

const cursor = {
    x: 0,
    y: 0,
};
const canvas = document.querySelector('.canvas');



// const renderer = new THREE.WebGLRenderer({canvas});
// renderer.setSize(width, height);

// Сцена
const scene = new THREE.Scene();

// Оси
const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);

// Камера
const camera = new THREE.PerspectiveCamera(70, sizes.width / sizes.height);
camera.position.z = 3;
// camera.position.y = 10;

scene.add(camera)

// Свойства объекта
const typeobject = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
    color: 'green',
    wireframe: true,
});

// Объект
// const object = new THREE.Mesh(typeobject, material);
// object.position.set(10,10,10);
// scene.add(object);

// Группа объектов
const group = new THREE.Group();
const objects = [];

const colors = ['red', 'blue', 'green'];

for (let x = -1.2; x <= 1.2; x = x + 1.2) {
    for (let y = -1.2; y <= 1.2; y = y + 1.2) {
        const material = new THREE.MeshBasicMaterial({
            color: colors[((Math.random() * 3) | 0) + 1],
            wireframe: true,
        });
        const object = new THREE.Mesh(typeobject, material);
        object.scale.set(0.5, 0.5, 0.5);
        object.position.set(x, y, 0);
        objects.push(object);
    }
}

group.add(...objects);
scene.add(group);

// Рендер
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

// const group = new THREE.Group();
// group.scale.y = 1.5;
// group.rotation.x = Math.PI * 0.25;

// const cube1 = new THREE.Mesh(typeobject, material);
// cube1.position.x = -20;
// const cube2 = new THREE.Mesh(typeobject, material);
// cube2.position.x = 0;
// const cube3 = new THREE.Mesh(typeobject, material);
// cube3.position.x = 20;

// group.add(cube1);
// group.add(cube2);
// group.add(cube3);

// scene.add(group);


// const clock = new THREE.Clock();

// const tick = () => {
//     const elapsedTime = clock.getElapsedTime();
//     group.rotation.x = Math.cos(elapsedTime);
//     group.rotation.y = Math.sin(elapsedTime);
//     window.requestAnimationFrame(tick);
//     renderer.render(scene, camera);
// };


// tick();




const clock = new THREE.Clock();
const maxscale = 1;
const minscale = 0.5;
let grow = false;

const animate = () => {
    const delta = clock.getDelta();
    objects.forEach((item, index) => {
        const mult = index % 2 === 0 ? 1 : -1;
        item.rotation.x += mult * delta;
        item.rotation.y += mult * delta * 0.4;
    })

    const elapsed = clock.getElapsedTime();
    camera.position.x = Math.sin(elapsed);
    camera.position.y = Math.cos(elapsed);
    // camera.lookAt(new THREE.Vector3(0,0,0));

    const mult = grow ? 1 : -1;
    group.scale.x += mult * delta * 0.2;
    group.scale.y += mult * delta * 0.2;
    group.scale.z += mult * delta * 0.2;

    if (grow && group.scale.x >= maxscale) {
        grow = false;
    } else if (group.scale.x <= minscale) {
        grow = true;
    }

    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
};

animate();

// window.addEventListener('mousemove', (event) => {
//     // console.log(event.clientX / sizes.width - 0.5);
//     // console.log(event.clientY / sizes.height - 0.5);
//     cursor.x = -(event.clientX / sizes.width - 0.5);
//     cursor.y = event.clientY / sizes.height - 0.5;
// })

// const tick = () => {
//     camera.position.x = cursor.x * 2;
//     camera.position.y = cursor.y * 2;
//     // camera.lookAt(object.position);
//     renderer.render(scene, camera);
//     window.requestAnimationFrame(tick);
// }

// tick();
