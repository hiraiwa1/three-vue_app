
<script setup>
import { defineComponent, onMounted, ref } from "vue";
import { GridHelper, Light, Mesh, MeshLambertMaterial, PerspectiveCamera, PointLight, Scene, SphereGeometry, WebGLRenderer } from "three";

const container = ref();

const scene = new Scene();
const camera = new PerspectiveCamera();
const renderer = new WebGLRenderer({ alpha: true });
const light = new PointLight();
let sphere;

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
    sphere = createSphere();
    scene.add(sphere);

    /* カメラ */
    camera.aspect = clientWidth / clientHeight;
    camera.updateProjectionMatrix();
    camera.position.set(10, 10, 0);
    camera.lookAt(0, 0, 0);

    /* rendererの設定 */
    renderer.setSize(clientWidth, clientHeight);
    renderer.setPixelRatio(clientWidth / clientHeight);
    container.value.appendChild(renderer.domElement);

    renderer.render(scene, camera);
    // animate();

  }
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
  start: 0,
  end:30,
  function() {
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
  }
});
animationScripts.push({
  start: 31,
  end: 45,
  function() {
    sphere.scale.x -= 0.01;
    sphere.scale.y -= 0.01;
    sphere.scale.z -= 0.01;
    sphere.position.z += 0.1;
  }
});
animationScripts.push({
  start: 46,
  end: 60,
  function() {
    sphere.scale.x += 0.01;
    sphere.scale.y += 0.01;
    sphere.scale.z += 0.01;
    sphere.position.y -= 0.1;
  }
});
animationScripts.push({
  start: 61,
  end: 75,
  function() {
    sphere.rotation.y += 0.001;
    sphere.rotation.z += 0.015;
    sphere.position.y += 0.1;
    sphere.position.z -= 0.1;
  }
});
animationScripts.push({
  start: 76,
  end:100,
  function() {
    sphere.rotation.y += 0.001;
    sphere.rotation.z += 0.015;
  }
});

let scrollPercent = 0;
document.body.onscroll = () => {
  scrollPercent = (document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;
}

const tick = () => {
  window.requestAnimationFrame(tick);
  playScrollAnimation();

  renderer.render(scene, camera);

}


onMounted(() => {
  init();
  tick();
});


/* spherの作成 */
const createSphere = () => {
  const geometry = new SphereGeometry(3);
  const material = new MeshLambertMaterial({ color: 0x60a576 })
  return new Mesh(geometry, material);
}


function playScrollAnimation() {
  animationScripts.forEach(animation => {
    if(scrollPercent >= animation.start && scrollPercent < animation.end) {
      animation.function();
    }
  })
}
</script>


<template>
  <div ref="container" class="fullcanvas"></div>
</template>

<style scoped>
.fullcanvas {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>