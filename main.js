//Scene
const scene =new THREE.Scene()

// object of scene 
const geometry = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({ color:0xffff00});
const mesh = new THREE.Mesh(geometry, material);

// adding this object to the scene
scene.add(mesh);

const sizes ={
    width : 600,
    height : 500
}

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height )
camera.position.z =3;
// camera.position.x =1;
// camera.position.y =1;

// adding camera in scene 
scene.add(camera)

 //renderer
const canvas = document.querySelector(".webgl");
// console.log(canvas);
const renderer = new THREE.WebGLRenderer({
    canvas : canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)
