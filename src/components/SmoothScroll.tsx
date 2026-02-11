"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";

import { usePathname } from "next/navigation";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        // Detect low-end devices for performance optimization
        const isLowEnd = (navigator as any).deviceMemory !== undefined && (navigator as any).deviceMemory <= 4;
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReducedMotion) {
            document.documentElement.classList.remove('lenis', 'lenis-smooth');
            return;
        }

        const lenis = new Lenis({
            duration: 1.2, // Increased for smoother motion
            easing: (t: number) => 1 - Math.pow(1 - t, 4), // Quartic ease out
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1.0, // Back to standard
            touchMultiplier: 1.5, // Slightly lower for mobile stability
            infinite: false,
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
