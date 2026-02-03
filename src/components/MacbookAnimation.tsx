"use client";
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, Float, useTexture } from "@react-three/drei";
import { useScroll, useTransform, useMotionValue, motion } from "framer-motion";
import * as THREE from "three";

function MacBookModel({ scrollProgress, appearanceY, appearanceScale, ...props }: { scrollProgress: any; appearanceY: any; appearanceScale: any } & any) {
    const model = useGLTF("/mac.glb");
    const tex = useTexture("/mac-screen.jpg");
    const groupRef = useRef<THREE.Group>(null);

    const meshes = useMemo(() => {
        const m: any = {};
        model.scene.traverse((e) => {
            m[e.name] = e;
        });
        return m;
    }, [model]);

    // Apply texture once
    useMemo(() => {
        if (meshes.matte) {
            meshes.matte.material = new THREE.MeshBasicMaterial({ map: tex });
        }
    }, [meshes.matte, tex]);

    useFrame(() => {
        if (meshes.screen) {
            // Rotation logic: Only begins after appearance phase
            const progress = scrollProgress.get();
            meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - progress * 90);
        }

        if (groupRef.current) {
            // Position and Scale logic (Entrance phase)
            groupRef.current.position.y = -14 + appearanceY.get();
            const s = appearanceScale.get();
            groupRef.current.scale.set(s, s, s);
        }
    });

    return (
        <group ref={groupRef} {...props} dispose={null}>
            <primitive object={model.scene} />
        </group>
    );
}

export default function MacbookAnimation() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Timeline (Percentage of total section scroll):
    // 0.0 -> 0.35: Appearance (Y movement and Scale) - Lid stays CLOSED (180 deg)
    const appearanceY = useTransform(scrollYProgress, [0, 0.35], [20, 0]);
    const appearanceScale = useTransform(scrollYProgress, [0, 0.35], [0.8, 1]);

    // 0.45 -> 0.75: Lid opening logic
    const openingProgress = useTransform(scrollYProgress, [0.45, 0.75], [0, 1]);

    return (
        <div ref={containerRef} className="w-full h-[200vh] relative bg-black">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
                    <React.Suspense fallback={null}>
                        <Environment preset="city" />
                        <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.5}>
                            <MacBookModel
                                scrollProgress={openingProgress}
                                appearanceY={appearanceY}
                                appearanceScale={appearanceScale}
                                position={[0, -14, 20]}
                            />
                        </Float>
                    </React.Suspense>
                </Canvas>
            </div>
        </div>
    );
}
