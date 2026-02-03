"use client";
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, Float, useTexture } from "@react-three/drei";
import { useScroll, useTransform, useMotionValue } from "framer-motion";
import * as THREE from "three";

function MacBookModel({ scrollProgress, ...props }: { scrollProgress: any } & any) {
    const model = useGLTF("/mac.glb");
    const tex = useTexture("/mac-screen.jpg");

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
            // Linearly interpolate between 180 (closed) and 90 (open) degrees
            const progress = scrollProgress.get();
            meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - progress * 90);
        }
    });

    return (
        <group {...props} dispose={null}>
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

    // We want the laptop to open as it scrolls through the middle 50% of the screen
    const openingProgress = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

    return (
        <div ref={containerRef} className="w-full h-[60vh] md:h-screen relative bg-black overflow-hidden">
            <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
                <React.Suspense fallback={null}>
                    <Environment preset="city" />
                    <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.5}>
                        <MacBookModel scrollProgress={openingProgress} position={[0, -14, 20]} />
                    </Float>
                </React.Suspense>
            </Canvas>
        </div>
    );
}
