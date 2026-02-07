"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";

import { usePathname } from "next/navigation";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const isLowEnd = (navigator as any).deviceMemory !== undefined && (navigator as any).deviceMemory <= 4;
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReducedMotion) return;

        const lenis = new Lenis({
            duration: isLowEnd ? 0.8 : 1.4,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            lerp: isLowEnd ? 0.1 : 0.08,
            wheelMultiplier: 1.1,
            touchMultiplier: 1.8,
            infinite: false,
            syncTouch: true,
            touchInertiaMultiplier: 30,
        });

        lenisRef.current = lenis;

        let frameId: number;
        const raf = (time: number) => {
            lenis.raf(time);
            frameId = requestAnimationFrame(raf);
        };
        frameId = requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            cancelAnimationFrame(frameId);
        };
    }, []);

    // Scroll to top on route change
    useEffect(() => {
        if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { immediate: true });
        }
    }, [pathname]);

    return <>{children}</>;
}
