import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Ball() {
  const mesh = useRef();
  const texture = useLoader(TextureLoader, '/img/tennis-ball.png');
  useFrame(() => {
    if (mesh.current) mesh.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={mesh} scale={2}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full">
      <Canvas className="absolute inset-0" camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Ball />
      </Canvas>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl font-bold neon-glow">OUT!</h1>
        <p className="mt-4 max-w-md">I code with the same discipline I learned at age 13 on the court.</p>
        <Link href="#projects" className="mt-8 px-4 py-2 bg-neon text-black font-bold rounded shadow-neon">See My Work</Link>
      </div>
    </div>
  );
}
