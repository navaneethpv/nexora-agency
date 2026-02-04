"use client";
import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { RoundedBox, Environment, useTexture } from "@react-three/drei";
import { useScroll, useTransform, useSpring } from "framer-motion";
import * as THREE from "three";

function IphoneModel({
    scrollProgress,
    appearanceY,
    appearanceScale,
    appearanceRotation,
    texture = "/mac-screen.jpg", // Fallback, we'll use the same texture for now or a vertical one if provided
    ...props
}: any) {
    const groupRef = useRef<THREE.Group>(null);

    // Load texture
    const tex = useTexture(texture) as THREE.Texture;
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapS = THREE.ClampToEdgeWrapping;
    tex.wrapT = THREE.ClampToEdgeWrapping;
    // Rotate texture for vertical phone screen if it's horizontal (assuming input is landscape)
    tex.center.set(0.5, 0.5);
    tex.rotation = -Math.PI / 2;
    tex.repeat.set(1, 1); // Ensure 1:1 mapping behavior after rotation 

    useFrame(() => {
        if (groupRef.current) {
            // Animation logic
            const y = appearanceY.get();
            const s = appearanceScale.get();
            const r = appearanceRotation.get();
            const progress = scrollProgress.get();

            groupRef.current.position.y = y;
            groupRef.current.scale.set(s, s, s);
            groupRef.current.rotation.y = THREE.MathUtils.degToRad(r);
            groupRef.current.rotation.x = THREE.MathUtils.degToRad(10 - progress * 20); // Tilt forward slightly
        }
    });

    return (
        <group ref={groupRef} {...props}>
            {/* Phone Body - Metallic Frame */}
            <RoundedBox args={[2.8, 5.8, 0.4]} radius={0.4} smoothness={4}>
                <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
            </RoundedBox>

            {/* Screen - Black Border/Bezel */}
            <RoundedBox args={[2.65, 5.65, 0.02]} radius={0.3} smoothness={4} position={[0, 0, 0.16]}>
                <meshStandardMaterial color="#000000" roughness={0.1} />
            </RoundedBox>

            {/* Screen - Actual Display */}
            <mesh position={[0, 0, 0.171]}>
                <planeGeometry args={[2.4, 5.2]} />
                <meshBasicMaterial map={tex} toneMapped={false} />
            </mesh>

            {/* Notch */}
            <mesh position={[0, 2.6, 0.172]}>
                <planeGeometry args={[1.2, 0.25]} />
                <meshBasicMaterial color="#000000" />
            </mesh>
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
    const rawY = useTransform(scrollYProgress, [0, 0.3], [5, 0]);
    const rawScale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
    const rawRotation = useTransform(scrollYProgress, [0, 0.3], [-10, 0]);

    const appearanceY = useSpring(rawY, springConfig);
    const appearanceScale = useSpring(rawScale, springConfig);
    const appearanceRotation = useSpring(rawRotation, springConfig);

    const rawOpening = useTransform(scrollYProgress, [0, 1], [0, 1]); // Dummy for API consistency
    const openingProgress = useSpring(rawOpening, springConfig);

    return (
        <div ref={containerRef} className="block md:hidden w-full h-[60vh] relative bg-transparent pointer-events-none mt-10">
            {isMobile && (
                <div className="sticky top-20 h-[50vh] w-full overflow-hidden flex items-center justify-center">
                    <Canvas
                        camera={{
                            fov: 35,
                            position: [0, 0, 15]
                        }}
                        dpr={[1, 1.5]}
                        gl={{
                            antialias: true,
                            preserveDrawingBuffer: true,
                            alpha: true // Transparent background
                        }}
                    >
                        <React.Suspense fallback={null}>
                            <Environment preset="studio" />
                            <ambientLight intensity={0.5} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                            <IphoneModel
                                scrollProgress={openingProgress}
                                appearanceY={appearanceY}
                                appearanceScale={appearanceScale}
                                appearanceRotation={appearanceRotation}
                                texture={texture}
                                position={[0, 0, 0]}
                            />
                        </React.Suspense>
                    </Canvas>
                </div>
            )}
        </div>
    );
}
