"use client";
import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, useTexture } from "@react-three/drei";
import { useScroll, useTransform, useMotionValue, motion, useSpring } from "framer-motion";
import * as THREE from "three";

function MacBookModel({
    scrollProgress,
    appearanceY,
    appearanceScale,
    texture = "/mac-screen.jpg",
    ...props
}: {
    scrollProgress: any;
    appearanceY: any;
    appearanceScale: any;
    texture?: string;
} & any) {
    const model = useGLTF("/mac.glb");
    const tex = useTexture(texture) as unknown as THREE.Texture;
    const groupRef = useRef<THREE.Group>(null);

    const meshes = useMemo(() => {
        const m: any = {};
        model.scene.traverse((e) => {
            m[e.name] = e;
            // Performance: Disable raycasting for every part of the model
            e.raycast = () => null;
        });
        return m;
    }, [model]);

    // Apply texture as a separate effect to avoid any render-loop conflicts
    useMemo(() => {
        if (meshes.matte) {
            meshes.matte.material = new THREE.MeshBasicMaterial({ map: tex });
        }
    }, [meshes.matte, tex]);

    useFrame(() => {
        if (meshes.screen) {
            const progress = scrollProgress.get();
            meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - progress * 90);
        }

        if (groupRef.current) {
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

export default function MacbookAnimation({ texture = "/mac-screen.jpg" }: { texture?: string }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // High-responsiveness spring config: Eliminates the "stuck" feeling
    const springConfig = { stiffness: 100, damping: 30, mass: 1 };

    const rawY = useTransform(scrollYProgress, [0, 0.3], [10, 0]);
    const rawScale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1]);
    const appearanceY = useSpring(rawY, springConfig);
    const appearanceScale = useSpring(rawScale, springConfig);

    const rawOpening = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]);
    const openingProgress = useSpring(rawOpening, springConfig);

    return (
        <div ref={containerRef} className="w-full h-[130vh] relative bg-black -mt-32 md:-mt-56">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                <Canvas
                    camera={{ fov: 12, position: [0, -10, 220] }}
                    dpr={[1, 1.5]} // Performance: Cap at 1.5x resolution for a massive performance gain
                    performance={{ min: 0.6 }}
                    gl={{
                        powerPreference: "high-performance",
                        antialias: false, // Performance: Faster rendering without edge-smoothing overhead
                        alpha: false,
                        stencil: false,
                        depth: true,
                    }}
                >
                    <React.Suspense fallback={null}>
                        <Environment preset="city" />
                        <MacBookModel
                            scrollProgress={openingProgress}
                            appearanceY={appearanceY}
                            appearanceScale={appearanceScale}
                            texture={texture}
                            position={[0, -14, 20]}
                        />
                    </React.Suspense>
                </Canvas>
            </div>
        </div>
    );
}
