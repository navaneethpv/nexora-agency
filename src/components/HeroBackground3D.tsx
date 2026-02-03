"use client";

import { useMemo, useRef } from "react";
import { useInView } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleBackground() {
    const ref = useRef<THREE.Points>(null!);

    const TWO_PI = Math.PI * 2;

    // Generate random points in a sphere
    const positions = useMemo(() => {
        const pos = new Float32Array(3000 * 3);
        for (let i = 0; i < 3000; i++) {
            const theta = TWO_PI * Math.random();
            const phi = Math.acos(2 * Math.random() - 1);
            const r = 2 * Math.pow(Math.random(), 1 / 3);
            pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            pos[i * 3 + 2] = r * Math.cos(phi);
        }
        return pos;
    }, [TWO_PI]);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x += delta / 40;
            ref.current.rotation.y += delta / 50;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#ffffff"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                />
            </Points>
        </group>
    );
}

export default function HeroBackground3D() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { margin: "100px" });

    return (
        <div ref={ref} className="absolute inset-0 -z-20 pointer-events-none overflow-hidden">
            {isInView && (
                <Canvas
                    camera={{ position: [0, 0, 1] }}
                    dpr={[1, 1.5]} // Slightly reduced for better performance
                    gl={{
                        antialias: false,
                        powerPreference: "high-performance",
                        alpha: true,
                        stencil: false,
                        depth: false,
                    }}
                >
                    <ParticleBackground />
                </Canvas>
            )}
        </div>
    );
}
