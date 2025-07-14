import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Float, Html, OrbitControls } from '@react-three/drei';
import { TextureLoader } from 'three';
import { useRef, useState } from 'react';
import { useLazyLoad } from '../hooks/useLazyLoad';

const skills = [
  { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', label: 'Python: 4 yrs' },
  { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg', label: 'JavaScript: 4 yrs' },
  { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg', label: 'React: 3 yrs' },
  { src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg', label: 'TensorFlow: 2 yrs' }
];

function SkillSprite({ src, label, position }) {
  const [hovered, setHover] = useState(false);
  const texture = useLoader(TextureLoader, src);
  const mesh = useRef();
  useFrame(() => {
    if (mesh.current) mesh.current.rotation.y += 0.005;
  });
  return (
    <Float speed={2} floatIntensity={2} rotationIntensity={2}>
      <mesh
        ref={mesh}
        position={position}
        scale={hovered ? 1.5 : 1}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial map={texture} transparent />
        {hovered && (
          <Html center style={{ pointerEvents: 'none', whiteSpace: 'nowrap', background: '#000', padding: '2px 4px', borderRadius: '4px' }}>
            {label}
          </Html>
        )}
      </mesh>
    </Float>
  );
}

export default function ThreeSkillOrb() {
  const [show, setShow] = useState(false);
  useLazyLoad(() => setShow(true));

  return (
    <>{show && (
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight />
        {skills.map((s, i) => (
          <SkillSprite key={s.src} {...s} position={[Math.sin(i * 1.5) * 2, Math.cos(i * 1.5) * 2, 0]} />
        ))}
        <OrbitControls enableZoom={false} />
      </Canvas>
    )}</>
  );
}
