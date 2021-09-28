import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import * as Three from 'three';

const scene = new Three.Scene();
const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 50, 1000);
const renderer = new Three.WebGL1Renderer({
  alpha: true,
  canvas: document.querySelector('#bg'),
});

const fCamera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 10, 50);
const fRenderer = new Three.WebGL1Renderer({
  alpha: true,
  canvas: document.querySelector('#fg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
fRenderer.setPixelRatio(window.devicePixelRatio);
fRenderer.setSize(window.innerWidth, window.innerHeight);

function addStar() {
  const geometry = new Three.SphereGeometry(0.25,24,24);
  const material = new Three.MeshStandardMaterial({color: 0xFFFFFF});
  const star = new Three.Mesh(geometry, material);

  const [x,y,z] = Array(3).fill().map(() => Three.MathUtils.randFloatSpread(300));
  star.position.set(x,y * 2,z);
  scene.add(star);
}

Array(1000).fill().forEach(addStar);

const ambientLight = new Three.AmbientLight(0xFFFFFF);
scene.add(ambientLight);

function animate() {
  requestAnimationFrame(animate);


  renderer.render(scene, camera);
  fRenderer.render(scene, fCamera);
}

animate();

function moveCamera() {
    const t = document.body.getBoundingClientRect().top;


    camera.rotation.x = t * 0.0001;
    fCamera.rotation.x = t * 0.0001;

    camera.position.y = t * 0.03;
    fCamera.position.y = t * 0.03;
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
