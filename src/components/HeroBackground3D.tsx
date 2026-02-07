"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, Points, PointMaterial } from "@react-three/drei";
import { useInView } from "framer-motion";
import * as THREE from "three";

function RotatingParticles() {
    const pointsRef = useRef<THREE.Points>(null!);

    // Create a sphere of particles
    const particlesCount = 800;
    const positions = useMemo(() => {
        const pos = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount; i++) {
            const r = 1.5;
            const theta = 2 * Math.PI * Math.random();
            const phi = Math.acos(2 * Math.random() - 1);
            pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            pos[i * 3 + 2] = r * Math.cos(phi);
        }
        return pos;
    }, []);

    useFrame((state: any, delta: number) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y += delta * 0.05;
            pointsRef.current.rotation.x += delta * 0.02;

            // Subtle mouse parallax
            const x = (state.mouse.x * 0.1);
            const y = (state.mouse.y * 0.1);
            pointsRef.current.position.x = THREE.MathUtils.lerp(pointsRef.current.position.x, x, 0.1);
            pointsRef.current.position.y = THREE.MathUtils.lerp(pointsRef.current.position.y, y, 0.1);
        }
    });

    return (
        <group>
            <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#0BB9F3"
                    size={0.008}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                    opacity={0.4}
                />
            </Points>
        </group>
    );
}

function NebulaGlow() {
    const meshRef = useRef<THREE.Mesh>(null!);

    const nebulaTexture = useMemo(() => {
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 512;
        const ctx = canvas.getContext('2d')!;
        const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);
        gradient.addColorStop(0, 'rgba(11, 185, 243, 0.4)');
        gradient.addColorStop(0.5, 'rgba(10, 127, 217, 0.1)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 512, 512);
        return canvas;
    }, []);

    useFrame((state: any) => {
        if (meshRef.current) {
            meshRef.current.rotation.z += 0.001;
            // Float effect
            meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <mesh ref={meshRef} scale={[4, 4, 1]} position={[0, 0, -2]}>
                <planeGeometry />
                <meshBasicMaterial
                    transparent
                    opacity={0.15}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                >
                    <canvasTexture
                        attach="map"
                        image={nebulaTexture}
                    />
                </meshBasicMaterial>
            </mesh>
        </Float>
    );
}

export default function HeroBackground3D() {
    const [mounted, setMounted] = useState(false);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { margin: "0px 0px 0px 0px" });

    // Performance tiered settings
    const [performance, setPerformance] = useState({ count: 400, dpr: 1 });

    useEffect(() => {
        setMounted(true);
        // Basic performance detection
        const isLowEnd = (navigator as any).deviceMemory !== undefined && (navigator as any).deviceMemory <= 4;
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

        if (isLowEnd || isMobile) {
            setPerformance({ count: 200, dpr: 1 });
        } else {
            setPerformance({ count: 600, dpr: Math.min(window.devicePixelRatio, 1.5) });
        }
    }, []);

    if (!mounted) return null;

    return (
        <div ref={containerRef} className="absolute inset-0 -z-20 pointer-events-none bg-black">
            <Canvas
                frameloop={isInView ? "always" : "never"}
                camera={{ position: [0, 0, 2], fov: 75 }}
                dpr={performance.dpr as any}
                gl={{
                    antialias: false,
                    alpha: true,
                    powerPreference: "high-performance",
                    stencil: false,
                    depth: false
                }}
            >
                <Stars
                    radius={100}
                    depth={50}
                    count={performance.count}
                    factor={4}
                    saturation={0}
                    fade
                    speed={0.5}
                />
                <RotatingParticles />
                <ambientLight intensity={0.5} />
            </Canvas>

            {/* Premium Static Glows - 0% CPU Load compared to 3D Nebula */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(11,185,243,0.05),transparent_70%)]" />
            <div className="absolute inset-0 bg-radial-at-t from-accent/5 via-transparent to-transparent" />

            {/* Minimal Grid */}
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '120px 120px',
                    maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
                }}
            />
        </div>
    );
}
