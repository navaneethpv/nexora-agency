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
            // Optimized settings for "instant" feel without lag
            duration: isLowEnd ? 0.8 : 1.0, // Reduced from 1.2 for snappier response
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Exponential easing
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1.2, // Slightly increased for responsive feel
            touchMultiplier: 2,
            infinite: false,
            // We keep smoothTouch false (default) to use native scroll on mobile
            // This ensures maximum performance ("no lag") on low-end mobile devices
            // while still allowing Lenis to control other aspects if needed.
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
