"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";

import { usePathname } from "next/navigation";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            lerp: 0.07,
            wheelMultiplier: 1,
            touchMultiplier: 1.2,
            infinite: false,
            syncTouch: true, // Crucial for mobile smoothness
        });

        lenisRef.current = lenis;

        let update: (time: number) => void;

        import("gsap").then((gsapModule) => {
            const gsap = gsapModule.gsap;
            update = (time: number) => {
                lenis.raf(time * 1000);
            };
            gsap.ticker.add(update);
            gsap.ticker.lagSmoothing(0);
        }).catch(() => {
            const raf = (time: number) => {
                lenis.raf(time);
                requestAnimationFrame(raf);
            };
            requestAnimationFrame(raf);
        });

        return () => {
            lenis.destroy();
            if (update) {
                import("gsap").then((gsapModule) => {
                    gsapModule.gsap.ticker.remove(update);
                });
            }
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
