"use client";
import React, { useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, useTexture } from "@react-three/drei";
import { useScroll, useTransform, useSpring } from "framer-motion";
import * as THREE from "three";

function IphoneModel({
    scrollProgress,
    appearanceY,
    appearanceScale,
    appearanceRotation,
    texture = "/mac-screen.jpg",
    ...props
}: any) {
    const groupRef = useRef<THREE.Group>(null);
    const { scene } = useGLTF("/iphone.glb");

    // Clone scene to avoid sharing state if multiple instances (good practice)
    const clonedScene = useMemo(() => scene.clone(), [scene]);

    // Load texture
    const tex = useTexture(texture) as THREE.Texture;
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.flipY = false; // GLTF models usually expect flipped Y for textures

    // Find screen mesh and apply texture
    useMemo(() => {
        clonedScene.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                // Optimization: Just traverse and find the one that has a material named 'Screen' or similar
                if (child.material && (child.material.name.toLowerCase().includes("screen") || child.name.toLowerCase().includes("screen"))) {
                    child.material = new THREE.MeshStandardMaterial({
                        map: tex,
                        roughness: 0.2,
                        metalness: 0.1
                    });
                }
            }
        });
    }, [clonedScene, tex]);

    useFrame(() => {
        if (groupRef.current) {
            const y = appearanceY.get();
            const s = appearanceScale.get();
            const r = appearanceRotation.get();

            groupRef.current.position.y = y;
            groupRef.current.scale.set(s, s, s);

            // Front facing rotation (Added Math.PI to flip 180deg from back to front)
            groupRef.current.rotation.y = Math.PI + THREE.MathUtils.degToRad(r - 10);
            groupRef.current.rotation.x = THREE.MathUtils.degToRad(0); // Upright
        }
    });

    return (
        <group ref={groupRef} {...props} dispose={null}>
            <primitive object={clonedScene} rotation={[0, 0, 0]} />
        </group>
    );
}

export default function IphoneAnimation({ texture = "/mac-screen.jpg" }: { texture?: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const springConfig = { stiffness: 100, damping: 30, mass: 1 };

    // Mobile specific animations
    // Start from bottom, move up
    const rawY = useTransform(scrollYProgress, [0, 0.4], [2, 0]);
    const rawScale = useTransform(scrollYProgress, [0, 0.4], [5, 8]); // Reduced scale further

    // Rotate slightly from a tilted angle to directly front-facing
    const rawRotation = useTransform(scrollYProgress, [0, 0.5], [-15, 10]);

    const appearanceY = useSpring(rawY, springConfig);
    const appearanceScale = useSpring(rawScale, springConfig);
    const appearanceRotation = useSpring(rawRotation, springConfig);

    const rawOpening = useTransform(scrollYProgress, [0, 1], [0, 1]); // Dummy for API consistency
    const openingProgress = useSpring(rawOpening, springConfig);

    return (
        <div ref={containerRef} className="block md:hidden w-full h-[60vh] relative z-0 bg-transparent -mt-20 md:-mt-32">
            <div className="sticky top-0 h-[60vh] w-full overflow-hidden flex items-center justify-center pointer-events-none">
                <Canvas
                    camera={{
                        fov: 30,
                        position: [0, 0, 5]
                    }}
                    dpr={[1, 1.2]}
                    gl={{
                        antialias: true,
                        preserveDrawingBuffer: true,
                        alpha: true
                    }}
                >
                    <React.Suspense fallback={null}>
                        <Environment preset="studio" />
                        <ambientLight intensity={1} />
                        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
                        <spotLight position={[-10, 0, -5]} intensity={1} color="#0BB9F3" /> {/* Cyan rim light */}
                        <IphoneModel
                            scrollProgress={scrollYProgress}
                            appearanceY={appearanceY}
                            appearanceScale={appearanceScale}
                            appearanceRotation={appearanceRotation}
                            texture={texture}
                            position={[0, -1, 0]}
                        />
                    </React.Suspense>
                </Canvas>
            </div>
        </div>
    );
}

useGLTF.preload("/iphone.glb");
