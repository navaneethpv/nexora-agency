"use client";
import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, useTexture } from "@react-three/drei";
import { useScroll, useTransform, useMotionValue, motion, useSpring } from "framer-motion";
import * as THREE from "three";

function MacBookModel({
    scrollProgress,
    appearanceY,
    appearanceScale,
    texture = "/mac-screen.jpg",
    isMobile = false,
    ...props
}: {
    scrollProgress: any;
    appearanceY: any;
    appearanceScale: any;
    texture?: string;
    isMobile?: boolean;
} & any) {
    const model = useGLTF("/mac.glb");
    const tex = useTexture(texture) as unknown as THREE.Texture;
    const groupRef = useRef<THREE.Group>(null);

    const meshes = useMemo(() => {
        const m: any = {};
        model.scene.traverse((e) => {
            m[e.name] = e;
            // Performance: Disable raycasting
            e.raycast = () => null;

            // Only hide the highly reflective glass overlay, keep the "screen" bezel visible
            // This fixes the "top side bug" where the bezel/notch area was being hidden
            if (e instanceof THREE.Mesh && e.name.toLowerCase().includes("glass")) {
                e.visible = false;
            }
        });
        return m;
    }, [model]);

    // Apply texture with proper color space and no tone mapping for "normal" appearance
    useMemo(() => {
        if (meshes.matte) {
            tex.colorSpace = THREE.SRGBColorSpace;
            // Ensure texture doesn't repeat or bleed at the edges
            tex.wrapS = THREE.ClampToEdgeWrapping;
            tex.wrapT = THREE.ClampToEdgeWrapping;

            meshes.matte.material = new THREE.MeshBasicMaterial({
                map: tex,
                toneMapped: false,
                color: 0xffffff
            });
        }
    }, [meshes.matte, tex]);

    useFrame(() => {
        if (meshes.screen) {
            const progress = scrollProgress.get();
            meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - progress * 90);
        }

        if (groupRef.current) {
            // Adaptive positioning for mobile
            const baseY = isMobile ? -8 : -14;
            groupRef.current.position.y = baseY + appearanceY.get();

            // Adjust scale for mobile
            const baseScale = isMobile ? 0.7 : 1;
            const s = appearanceScale.get() * baseScale;
            groupRef.current.scale.set(s, s, s);

            // Slightly rotate to the right side (angled view)
            groupRef.current.rotation.y = THREE.MathUtils.degToRad(15);
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

    // High-responsiveness spring config: Eliminates the "stuck" feeling
    const springConfig = { stiffness: 100, damping: 30, mass: 1 };

    const rawY = useTransform(scrollYProgress, [0, 0.3], [10, 0]);
    const rawScale = useTransform(scrollYProgress, [0, 0.3], [0.9, 1.2]);
    const appearanceY = useSpring(rawY, springConfig);
    const appearanceScale = useSpring(rawScale, springConfig);

    const rawOpening = useTransform(scrollYProgress, [0.3, 0.45], [0, 1]);
    const openingProgress = useSpring(rawOpening, springConfig);

    if (isMobile) return null;

    return (
        <div ref={containerRef} className="hidden md:block w-full h-screen md:h-[130vh] relative bg-black -mt-16 md:-mt-56 pointer-events-none">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
                <Canvas
                    camera={{
                        fov: isMobile ? 22 : 12,
                        position: [0, -10, isMobile ? 280 : 220]
                    }}
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
                            isMobile={isMobile}
                            position={[0, -14, 20]}
                        />
                    </React.Suspense>
                </Canvas>
            </div>
        </div>
    );
}
