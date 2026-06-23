import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initBottleShowcase(canvasEl) {
  // ---- Scene setup ----
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0a0908);

  const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 100);
  // Start zoomed IN (close-up view)
  camera.position.set(0, 1.0, 3.0);
  camera.lookAt(0, 0.8, 0);

  const renderer = new THREE.WebGLRenderer({
    canvas: canvasEl,
    antialias: true,
    alpha: false,
    powerPreference: 'high-performance'
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.4;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  // ---- Lighting ----
  // Warm ambient
  const ambientLight = new THREE.AmbientLight(0x3e2a1a, 0.5);
  scene.add(ambientLight);

  // Key light — warm directional
  const keyLight = new THREE.DirectionalLight(0xf5e0c0, 1.5);
  keyLight.position.set(4, 6, 5);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.set(1024, 1024);
  scene.add(keyLight);

  // Fill light — subtle warm from left
  const fillLight = new THREE.DirectionalLight(0xd4a574, 0.4);
  fillLight.position.set(-4, 3, 2);
  scene.add(fillLight);

  // Rim light — golden backlight
  const rimLight = new THREE.PointLight(0xb6a58a, 2.0, 15);
  rimLight.position.set(0, 4, -4);
  scene.add(rimLight);

  // Under-light — subtle
  const underLight = new THREE.PointLight(0x8a2a2f, 0.3, 8);
  underLight.position.set(0, -2, 2);
  scene.add(underLight);

  // Accent spot on cap
  const capSpot = new THREE.SpotLight(0xffd700, 1.5, 10, Math.PI / 6, 0.5, 1);
  capSpot.position.set(1, 5, 3);
  capSpot.target.position.set(0, 2.5, 0);
  scene.add(capSpot);
  scene.add(capSpot.target);

  // ---- Environment Map ----
  const envScene = new THREE.Scene();
  const pmremGenerator = new THREE.PMREMGenerator(renderer);

  // Create rich environment with multiple colored lights
  const envLights = [
    { color: 0xffeedd, intensity: 4, pos: [10, 10, 10] },
    { color: 0xb6a58a, intensity: 3, pos: [-10, 8, -8] },
    { color: 0x3e1c1c, intensity: 2, pos: [0, -10, 0] },
    { color: 0xd4af37, intensity: 3, pos: [5, 12, -5] },
  ];
  envLights.forEach(l => {
    const light = new THREE.PointLight(l.color, l.intensity, 60);
    light.position.set(...l.pos);
    envScene.add(light);
  });
  const envBox = new THREE.Mesh(
    new THREE.BoxGeometry(100, 100, 100),
    new THREE.MeshBasicMaterial({ color: 0x0a0908, side: THREE.BackSide })
  );
  envScene.add(envBox);
  const envTexture = pmremGenerator.fromScene(envScene, 0).texture;
  scene.environment = envTexture;
  pmremGenerator.dispose();

  // ---- Build the Mystic Oudh Bottle ----
  const bottleGroup = new THREE.Group();

  // -- Body: Cylindrical, dark matte brown, slight taper at top --
  const bodyPoints = [];
  // Bottom flat
  bodyPoints.push(new THREE.Vector2(0, 0));
  bodyPoints.push(new THREE.Vector2(0.52, 0));
  // Bottom edge bevel
  bodyPoints.push(new THREE.Vector2(0.55, 0.03));
  bodyPoints.push(new THREE.Vector2(0.56, 0.08));
  // Main cylinder body (slight outward curve for organic feel)
  bodyPoints.push(new THREE.Vector2(0.57, 0.2));
  bodyPoints.push(new THREE.Vector2(0.58, 0.5));
  bodyPoints.push(new THREE.Vector2(0.585, 0.8));
  bodyPoints.push(new THREE.Vector2(0.585, 1.1));
  bodyPoints.push(new THREE.Vector2(0.58, 1.4));
  bodyPoints.push(new THREE.Vector2(0.575, 1.6));
  // Shoulder taper
  bodyPoints.push(new THREE.Vector2(0.55, 1.75));
  bodyPoints.push(new THREE.Vector2(0.50, 1.85));
  bodyPoints.push(new THREE.Vector2(0.42, 1.92));
  bodyPoints.push(new THREE.Vector2(0.32, 1.96));
  // Neck
  bodyPoints.push(new THREE.Vector2(0.22, 1.98));
  bodyPoints.push(new THREE.Vector2(0.20, 2.0));
  bodyPoints.push(new THREE.Vector2(0.19, 2.05));
  bodyPoints.push(new THREE.Vector2(0.19, 2.15));
  bodyPoints.push(new THREE.Vector2(0, 2.15));

  const bodyGeom = new THREE.LatheGeometry(bodyPoints, 128);
  const bodyMat = new THREE.MeshPhysicalMaterial({
    color: 0x2a1510,
    metalness: 0.05,
    roughness: 0.65,
    clearcoat: 0.2,
    clearcoatRoughness: 0.4,
    envMapIntensity: 0.3,
  });
  const bodyMesh = new THREE.Mesh(bodyGeom, bodyMat);
  bodyMesh.castShadow = true;
  bodyMesh.receiveShadow = true;
  bottleGroup.add(bodyMesh);

  // -- Gold Band at neck base --
  const bandGeom = new THREE.TorusGeometry(0.215, 0.018, 16, 128);
  const goldMat = new THREE.MeshPhysicalMaterial({
    color: 0xd4af37,
    metalness: 0.95,
    roughness: 0.12,
    clearcoat: 0.8,
    clearcoatRoughness: 0.05,
    envMapIntensity: 2.0,
  });
  const bandMesh = new THREE.Mesh(bandGeom, goldMat);
  bandMesh.position.set(0, 2.0, 0);
  bandMesh.rotation.x = Math.PI / 2;
  bottleGroup.add(bandMesh);

  // -- Decorative gold ring pattern at shoulder --
  const decoRing1 = new THREE.Mesh(
    new THREE.TorusGeometry(0.34, 0.008, 12, 128),
    goldMat
  );
  decoRing1.position.set(0, 1.94, 0);
  decoRing1.rotation.x = Math.PI / 2;
  bottleGroup.add(decoRing1);

  const decoRing2 = new THREE.Mesh(
    new THREE.TorusGeometry(0.40, 0.006, 12, 128),
    goldMat
  );
  decoRing2.position.set(0, 1.90, 0);
  decoRing2.rotation.x = Math.PI / 2;
  bottleGroup.add(decoRing2);

  // -- Crown Cap --
  // Base of crown (sits on the neck)
  const crownBasePoints = [];
  crownBasePoints.push(new THREE.Vector2(0, 2.12));
  crownBasePoints.push(new THREE.Vector2(0.24, 2.12));
  crownBasePoints.push(new THREE.Vector2(0.28, 2.15));
  crownBasePoints.push(new THREE.Vector2(0.30, 2.20));
  crownBasePoints.push(new THREE.Vector2(0.30, 2.30));
  // Crown flare
  crownBasePoints.push(new THREE.Vector2(0.32, 2.35));
  crownBasePoints.push(new THREE.Vector2(0.35, 2.42));
  crownBasePoints.push(new THREE.Vector2(0.36, 2.50));
  // Crown narrow
  crownBasePoints.push(new THREE.Vector2(0.34, 2.55));
  crownBasePoints.push(new THREE.Vector2(0.30, 2.58));
  // Crown bulge (ornate dome)
  crownBasePoints.push(new THREE.Vector2(0.28, 2.62));
  crownBasePoints.push(new THREE.Vector2(0.27, 2.68));
  crownBasePoints.push(new THREE.Vector2(0.28, 2.74));
  crownBasePoints.push(new THREE.Vector2(0.30, 2.78));
  // Top bulb
  crownBasePoints.push(new THREE.Vector2(0.28, 2.82));
  crownBasePoints.push(new THREE.Vector2(0.22, 2.86));
  crownBasePoints.push(new THREE.Vector2(0.15, 2.90));
  crownBasePoints.push(new THREE.Vector2(0.10, 2.93));
  crownBasePoints.push(new THREE.Vector2(0.06, 2.95));
  crownBasePoints.push(new THREE.Vector2(0, 2.96));

  const crownGeom = new THREE.LatheGeometry(crownBasePoints, 128);
  const crownMat = new THREE.MeshPhysicalMaterial({
    color: 0xd4af37,
    metalness: 0.92,
    roughness: 0.10,
    clearcoat: 1.0,
    clearcoatRoughness: 0.03,
    envMapIntensity: 2.5,
  });
  const crownMesh = new THREE.Mesh(crownGeom, crownMat);
  crownMesh.castShadow = true;
  bottleGroup.add(crownMesh);

  // Crown ornamental bumps (small spheres around the crown flare)
  const bumpCount = 16;
  const bumpRadius = 0.36;
  const bumpMat = new THREE.MeshPhysicalMaterial({
    color: 0xe0c068,
    metalness: 0.9,
    roughness: 0.15,
    clearcoat: 1.0,
    envMapIntensity: 2.0,
  });

  for (let i = 0; i < bumpCount; i++) {
    const angle = (i / bumpCount) * Math.PI * 2;
    const bump = new THREE.Mesh(
      new THREE.SphereGeometry(0.022, 12, 12),
      bumpMat
    );
    bump.position.set(
      Math.cos(angle) * bumpRadius,
      2.50,
      Math.sin(angle) * bumpRadius
    );
    bottleGroup.add(bump);
  }

  // Smaller bumps higher up on crown
  for (let i = 0; i < 12; i++) {
    const angle = (i / 12) * Math.PI * 2 + 0.15;
    const bump = new THREE.Mesh(
      new THREE.SphereGeometry(0.016, 10, 10),
      bumpMat
    );
    bump.position.set(
      Math.cos(angle) * 0.29,
      2.74,
      Math.sin(angle) * 0.29
    );
    bottleGroup.add(bump);
  }

  // -- Top finial (tiny sphere on very top) --
  const finial = new THREE.Mesh(
    new THREE.SphereGeometry(0.04, 16, 16),
    crownMat
  );
  finial.position.set(0, 2.98, 0);
  bottleGroup.add(finial);

  // Center and lower the bottle
  bottleGroup.position.set(0, -1.2, 0);
  scene.add(bottleGroup);

  // ---- Floating Golden Particles ----
  const particleCount = 120;
  const particleGeom = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const particleVelocities = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
    particleVelocities[i * 3] = (Math.random() - 0.5) * 0.001;
    particleVelocities[i * 3 + 1] = Math.random() * 0.002 + 0.0005;
    particleVelocities[i * 3 + 2] = (Math.random() - 0.5) * 0.001;
  }
  particleGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const particleMat = new THREE.PointsMaterial({
    color: 0xd4af37,
    size: 0.02,
    transparent: true,
    opacity: 0.4,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  const particles = new THREE.Points(particleGeom, particleMat);
  scene.add(particles);

  // ---- Ground shadow disc ----
  const groundGeom = new THREE.CircleGeometry(2, 64);
  const groundMat = new THREE.MeshStandardMaterial({
    color: 0x0a0908,
    metalness: 0.0,
    roughness: 1.0,
    transparent: true,
    opacity: 0.6,
  });
  const ground = new THREE.Mesh(groundGeom, groundMat);
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -1.22;
  ground.receiveShadow = true;
  scene.add(ground);

  // ---- Scroll-Driven Animation State ----
  const scrollState = {
    progress: 0,
    // Start: zoomed in, slightly angled
    startCamZ: 3.0,
    startCamY: 1.0,
    startLookY: 0.8,
    // End: zoomed out, full bottle view
    endCamZ: 7.5,
    endCamY: 2.0,
    endLookY: 0.6,
    // Rotation: bottle rotates 720 degrees across scroll
    startRotY: 0,
    endRotY: Math.PI * 4,
  };

  // GSAP ScrollTrigger for the bottle section
  ScrollTrigger.create({
    trigger: '#bottle-showcase',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1.2,
    onUpdate: (self) => {
      scrollState.progress = self.progress;

      // Update progress bar
      const bar = document.getElementById('bottle-progress');
      if (bar) bar.style.height = `${self.progress * 100}%`;
    }
  });

  // Text overlay animations
  gsap.fromTo('#bottle-text-top', 
    { opacity: 0, y: -30 },
    {
      opacity: 1, y: 0,
      scrollTrigger: {
        trigger: '#bottle-showcase',
        start: 'top top',
        end: '20% top',
        scrub: 1,
      }
    }
  );

  gsap.fromTo('#bottle-text-bottom',
    { opacity: 0, y: 30 },
    {
      opacity: 1, y: 0,
      scrollTrigger: {
        trigger: '#bottle-showcase',
        start: '60% top',
        end: '80% top',
        scrub: 1,
      }
    }
  );

  // ---- Animation Loop ----
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const elapsed = clock.getElapsedTime();
    const p = scrollState.progress;

    // Scroll-driven camera position (zoom out on scroll down)
    const camZ = scrollState.startCamZ + (scrollState.endCamZ - scrollState.startCamZ) * p;
    const camY = scrollState.startCamY + (scrollState.endCamY - scrollState.startCamY) * p;
    const lookY = scrollState.startLookY + (scrollState.endLookY - scrollState.startLookY) * p;

    camera.position.z = camZ;
    camera.position.y = camY;
    camera.lookAt(0, lookY, 0);

    // Scroll-driven + auto rotation
    const scrollRotation = scrollState.startRotY + (scrollState.endRotY - scrollState.startRotY) * p;
    const autoRotation = elapsed * 0.15; // Very slow auto-spin always
    bottleGroup.rotation.y = scrollRotation + autoRotation;

    // Gentle float
    bottleGroup.position.y = -1.2 + Math.sin(elapsed * 0.6) * 0.04;

    // Particle movement
    const pos = particles.geometry.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] += particleVelocities[i * 3];
      pos[i * 3 + 1] += particleVelocities[i * 3 + 1];
      pos[i * 3 + 2] += particleVelocities[i * 3 + 2];
      if (pos[i * 3 + 1] > 4) {
        pos[i * 3 + 1] = -3;
        pos[i * 3] = (Math.random() - 0.5) * 10;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
      }
    }
    particles.geometry.attributes.position.needsUpdate = true;
    particles.rotation.y = elapsed * 0.01;

    // Light breathing
    rimLight.intensity = 2.0 + Math.sin(elapsed * 0.8) * 0.3;
    capSpot.intensity = 1.5 + Math.sin(elapsed * 1.2) * 0.3;

    renderer.render(scene, camera);
  }

  animate();

  // ---- Resize ----
  function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  window.addEventListener('resize', onResize);
}
