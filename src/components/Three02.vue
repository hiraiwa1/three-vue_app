
<script setup>
import { defineComponent, onMounted, ref } from "vue";
import { GridHelper, Mesh, MeshLambertMaterial, PerspectiveCamera, PointLight, Scene, SphereGeometry, BoxGeometry, WebGLRenderer, CameraHelper } from "three";

const container = ref();

const scene = new Scene();
const camera = new PerspectiveCamera();
const renderer = new WebGLRenderer({ alpha: true });
const light = new PointLight();
let sphere, box;

const init = () => {
  if(container.value instanceof HTMLElement) {
    const { clientWidth, clientHeight } = container.value;

    /* グリッド線 */
    // scene.add(new GridHelper());

    /* ライトの設定 */
    light.color.setHex(0xffffff);
    light.position.set(10, 10, 0);
    scene.add(light);

    /* 球体 */
    // sphere = createSphere();
    // // sphere.position.set(0, 5, 5)
    // scene.add(sphere);

    /* ボックス */
    box = createBox();
    scene.add(box)

    /* カメラ */
    camera.aspect = clientWidth / clientHeight;
    camera.updateProjectionMatrix();
    camera.position.set(80, 0, 80);
    camera.lookAt(0, 0, 0);

    const cameraHelper = new CameraHelper( camera );
    scene.add(cameraHelper)

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


// const animate = () => {
//   /* カメラの位置パラメータ */
//   let phi = 0;

//   const frame = () => {
//     renderer.render(scene, camera);

//     phi += 0.002 * Math.PI;
//     camera.position.set(10 * Math.cos(phi), 10, 10 * Math.sin(phi));
//     camera.lookAt(0, 0, 0);

//     light.position.x = -Math.sin(performance.now() * 0.001) * 5;
//     light.position.z = Math.cos(performance.now() * 0.001) * 5;

//     requestAnimationFrame(frame);
//   };

//   frame();
// };

const animationScripts = [];

animationScripts.push({
  start: 5,
  end:45,
  function() {
    box.position.x += 0.1 * plusMinusSing;
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;
  }
},{
  start: 46,
  end:70,
  function() {
    box.rotation.x += 0.03;
    box.rotation.z += 0.03;
  }
},{
  start: 71,
  end: 100,
  function() {
    box.rotation.y += 0.01;
    box.rotation.z += 0.01;
    box.position.x += 0.1 * plusMinusSing;
  }
});


const tick = () => {
  window.requestAnimationFrame(tick);
  playScrollAnimation();

  renderer.render(scene, camera);

}

onMounted(() => {
  init();


  const panelTop = document.querySelector('.clickPanel1');
  const panelTopLeft = panelTop.querySelector('.left');
  const panelTopRight = panelTop.querySelector('.right');
  const panelMidle = document.querySelector('.clickPanel2');
  const panelMidleLeft = panelMidle.querySelector('.left');
  const panelMidleRight = panelMidle.querySelector('.right');
  const panelBottom = document.querySelector('.clickPanel');
  const panelBottomLeft = panelBottom.querySelector('.left');
  const panelBottomRight = panelBottom.querySelector('.right');
  const panels = [
    {button: panelTop, move: {x: 1, y: 1} },
    {panelTopLeft},
    {panelTopRight},
    {panelMidle},
    panelMidleLeft, panelMidleRight, panelBottom, panelBottomLeft, panelBottomRight];


  tick();

});



function playScrollAnimation() {
}
</script>


<template>
  <div ref="container" class="fullcanvas">
    <div class="clickPanel clickPanel1">
      <span class="left"></span>
      <span class="right"></span>
    </div>
    <div class="clickPanel clickPanel2">
      <span class="left"></span>
      <span class="right"></span>
    </div>
    <div class="clickPanel clickPanel3">
      <span class="left"></span>
      <span class="right"></span>
    </div>
  </div>
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
.clickPanel {
  width: 33.3%;
  height: 33.3%;
  position: absolute;
  z-index: 10;
}
.clickPanel1 {
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.clickPanel2 {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.clickPanel3 {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.clickPanel .left,
.clickPanel .right {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.clickPanel .left {
  transform: translateX(-100%);
}
.clickPanel .right {
  transform: translateX(100%);
}
</style>