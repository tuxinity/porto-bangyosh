import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Background3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    const setSize = () => {
      // Get dimensions
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Update renderer
      renderer.setSize(width, height);
      
      // Update camera
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      
      // Adjust shape size based on screen width
      let size;
      if (width < 480) size = 1.5;      // Mobile
      else if (width < 768) size = 2;    // Tablet
      else if (width < 1024) size = 2.5; // Small desktop
      else size = 3;                     // Large desktop
      
      // Adjust camera distance based on screen size
      camera.position.z = size * 3.5;
      
      return size;
    };

    const initialSize = setSize();
    mountRef.current.appendChild(renderer.domElement);

    // Create shape
    const geometry = new THREE.IcosahedronGeometry(initialSize, 0);
    const material = new THREE.MeshBasicMaterial({
      color: 0x6b7280,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const shape = new THREE.Mesh(geometry, material);
    scene.add(shape);

    // Handle window resize
    const handleResize = () => {
      setSize();
    };

    window.addEventListener('resize', handleResize);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      shape.rotation.x += 0.001;
      shape.rotation.y += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 -z-10 -top-52 overflow-hidden" />;
};