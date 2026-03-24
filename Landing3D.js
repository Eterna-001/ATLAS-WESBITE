import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

export default function Landing3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({ antialias:true, alpha:true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Neon cube
    const geometry = new THREE.BoxGeometry(2,2,2);
    const material = new THREE.MeshStandardMaterial({ color:0x00ffcc, emissive:0x00ffcc, roughness:0.1, metalness:0.8 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0x00ffcc, 2, 50);
    pointLight.position.set(5,5,5);
    scene.add(pointLight);

    // GSAP intro
    cube.scale.set(0,0,0);
    gsap.to(cube.scale, { x:1, y:1, z:1, duration:1.5, ease:"back.out(1.7)" });

    // Animate cube
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.008;
      cube.rotation.y += 0.012;
      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      camera.aspect = window.innerWidth/window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width:'100vw', height:'100vh', position:'absolute', top:0, left:0 }} />;
}