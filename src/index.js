import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import * as Three from 'three';

const scene = new Three.Scene();
const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 10, 1000);
const renderer = new Three.WebGL1Renderer({
  alpha: true,
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

var images = ["unity.svg", "android.svg", "github.svg", "linkedin.svg"]

function addStar() {
  var loader = new Three.TextureLoader();
  const geometry = new Three.PlaneGeometry(10, 10);
  var image = images[Three.MathUtils.randInt(0,images.length-1)]
  const material = new Three.MeshLambertMaterial({
    map: loader.load(image, undefined, undefined, function () {
      console.error( 'An error happened.' );
    }),
    transparent: true,
    opacity: 0.1
  });
  const star = new Three.Mesh(geometry, material);
  star.scale.set(0.5,0.5,0.5)
  const [x, y, z] = Array(3).fill().map(() => Three.MathUtils.randFloatSpread(300));
  star.position.set(x, y * 2, z);
  star.rotation.y = Three.MathUtils.randFloatSpread(360)
  scene.add(star);
}

Array(500).fill().forEach(addStar);

const ambientLight = new Three.AmbientLight(0xFFFFFF);
scene.add(ambientLight);

function animate() {
  requestAnimationFrame(animate);
  scene.children.forEach((child) => child.rotation.y += 0.01)
  renderer.render(scene, camera);
}

animate();

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;

  //camera.rotation.x = t * 0.0001;
  camera.position.y = t * 0.03;
}

document.body.onscroll = moveCamera;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
