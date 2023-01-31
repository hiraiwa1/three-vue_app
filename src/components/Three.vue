
<script setup>
import { defineComponent, onMounted, ref } from "vue";
import { GridHelper, TorusGeometry, Mesh, MeshLambertMaterial, PerspectiveCamera, AmbientLight, PointLight, PointLightHelper, Scene, SphereGeometry, BoxGeometry, WebGLRenderer, CameraHelper, AnimationMixer } from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const container = ref();

const scene = new Scene();
const camera = new PerspectiveCamera();
const renderer = new WebGLRenderer({
  antialias: true,
  alpha: true
});
const light = new AmbientLight( 0x303030, 0.8 );

const pointLight = new PointLight();
let sphere, box, torus, model, mixer;

const init = () => {
  if(container.value instanceof HTMLElement) {
    const { clientWidth, clientHeight } = container.value;

    /* グリッド線 */
    // scene.add(new GridHelper());

    /* ライトの設定 */
    scene.add( light );

    pointLight.color.setHex(0xffffff);
    pointLight.position.set(43, 50, 60);
    scene.add(pointLight);

    // const sphereSize = 3;
    // const pointLightHelper = new PointLightHelper( pointLight, sphereSize );
    // scene.add( pointLightHelper );

    /* 球体 */
    // sphere = createSphere();
    // // sphere.position.set(0, 5, 5)
    // scene.add(sphere);
    torus = createTorus();
    torus.position.set(0, -10, 0)
    torus.rotation.x = -Math.PI * 0.45;
    scene.add( torus );

    /* ボックス */
    // box = createBox();
    // scene.add(box)

    /* カメラ */
    camera.aspect = clientWidth / clientHeight;
    camera.updateProjectionMatrix();
    camera.position.set(50, 10, 80);
    camera.lookAt(0, 0, 0);

    // const cameraHelper = new CameraHelper( camera );
    // scene.add(cameraHelper)

    /* rendererの設定 */
    renderer.setSize(clientWidth, clientHeight);
    renderer.setPixelRatio(clientWidth / clientHeight);
    container.value.appendChild(renderer.domElement);

    renderer.render(scene, camera);
    // animate();

  }
}

/* spherの作成 */
const createSphere = () => {
  const geometry = new SphereGeometry(3);
  const material = new MeshLambertMaterial({ color: 0x60a576 })
  return new Mesh(geometry, material);
}
const createBox = () => {
  const geometry = new BoxGeometry(10, 10, 10);
  const material = new MeshLambertMaterial({ color: 0x60a576 })
  return new Mesh(geometry, material);
}
const createTorus = () => {
  const geometry = new TorusGeometry( 10, 3, 20, 10 );
  const material = new MeshLambertMaterial( { color: 0x1495ff } );
  return new Mesh( geometry, material );
}

const radian = Math.PI / 180;

const glafLoader = new GLTFLoader();
glafLoader.load("/models/animation.gltf", (gltf) => {
  model = gltf.scene;
  model.position.set(14, -6.5, 9)
  model.scale.set(2, 2, 2);
  // model.rotation.y = -Math.PI / 12;
  model.rotation.y = Math.tan(1 * radian);
  model.rotation.x = 0.2;
  scene.add(model);

  mixer = new AnimationMixer(model);
  const clips = gltf.animations;
  // console.log(clips);
  clips.forEach(clip => {
    const action = mixer.clipAction(clip);
    action.play();
  })
})


const animationScripts = [];
let rot = 1;
const MODEL_FORWARD = 1;
const MODEL_BACKWARD = 71;
animationScripts.push(
  {
  direction: 'init',
  function() {
    torus.rotation.z += 0.01;
  }
},{
  direction: 'down',
  function() {

    if(rot !== MODEL_FORWARD) {
      rot -= 5;
      model.rotation.y = Math.tan(rot * radian);
    } else {
      model.rotation.y = Math.tan(MODEL_FORWARD * radian);
    }
  }
},{
  direction: 'up',
  function() {
    torus.rotation.z -= 0.03;
    // model.rotation.y = -Math.PI / 1;

    if(rot !== MODEL_BACKWARD) {
      rot += 5;
      model.rotation.y = Math.tan(rot * radian);
    } else {
      model.rotation.y = Math.tan(MODEL_BACKWARD * radian);
    }
  }
});


let scrollPercent = 0;
let scrollPosition = 0;
let plusMinusSing = 1;
let scrollDirection = {
  down: false,
  up: false
}
document.body.onscroll = () => {
  scrollPercent = (document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;


  if(scrollPosition < document.documentElement.scrollTop) {
    // console.log('down')
    scrollDirection.down = true;
    scrollDirection.up = false;
  } else {
    // console.log('up')
    scrollDirection.down = false;
    scrollDirection.up = true;
  };
  scrollPosition = document.documentElement.scrollTop;

  // console.log(scrollPercent)
}


const tick = () => {
  window.requestAnimationFrame(tick);
  playScrollAnimation();

  if(mixer) {
    mixer.update(0.04);
  }

  renderer.render(scene, camera);

}


onMounted(() => {
  init();
  tick();
});

function playScrollAnimation() {
  // rot += 0.05;
  // let radian = rot * (Math.PI / 180);
  // // console.log(Math.PI / 180)
  // // console.log(radian)
  // // console.log(Math.sin(radian))

  animationScripts.forEach(animation => {
    if(animation.direction === 'init') {
      animation.function();
    } else if(animation.direction === 'down' && scrollDirection.down) {
      animation.function();
    } else if(animation.direction === 'up' && scrollDirection.up) {
      animation.function();
    }
  });
}
</script>


<template>
  <div ref="container" class="fullcanvas"></div>
</template>

<style scoped>
.fullcanvas {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>