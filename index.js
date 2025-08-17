import Spheres1Background from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.17/build/backgrounds/spheres1.cdn.min.js';

    const bg = Spheres1Background(document.getElementById('webgl-canvas'), {
      colors: [0xffffff * Math.random(), 0xffffff * Math.random(), 0xffffff * Math.random()],
      count: 150,
      minSize: 0.4,
      maxSize: 1,
      gravity: 0.5
    });
    bg.spheres.config.gravity = 0;


    document.getElementById('gravity-btn').addEventListener('click', () => {
      bg.spheres.config.gravity = bg.spheres.config.gravity === 0 ? 1 : 0;
    });

    document.getElementById('colors-btn').addEventListener('click', () => {
      bg.spheres.setColors([0xffffff * Math.random(), 0xffffff * Math.random(), 0xffffff * Math.random()]);
    });