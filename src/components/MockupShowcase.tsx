"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import Image from "next/image";
import ParallaxScroll from "./ParallaxScroll";

const products = [
    {
        title: "Azure Resorts",
        link: "https://azure-resorts.com",
        thumbnail: "/resort-macbook-mockup.png",
        category: "Hospitality"
    },
    {
        title: "Summit Academy",
        link: "https://summit-academy.edu",
        thumbnail: "/college-mac.png",
        category: "Education"
    },
    {
        title: "Institutional Portal",
        link: "https://institutional.io",
        thumbnail: "/institutional-academic.png",
        category: "Corporate"
    },
    {
        title: "Nexora Studio",
        link: "https://nexora.studio",
        thumbnail: "/device-mockup.png",
        category: "Branding"
    },
    {
        title: "Creative Agency",
        link: "https://creative.agency",
        thumbnail: "/mac-screen.jpg",
        category: "Agency"
    },
    {
        title: "Corporate Identity",
        link: "https://corporate.identity",
        thumbnail: "/resort-mac.png",
        category: "Business"
    },
    {
        title: "Modern E-commerce",
        link: "https://modern-shop.com",
        thumbnail: "/college-mac.png",
        category: "E-commerce"
    },
    {
        title: "Learning Management",
        link: "https://lms-portal.com",
        thumbnail: "/institutional-academic.png",
        category: "LMS"
    },
    {
        title: "Saas Platform",
        link: "https://saas-platform.io",
        thumbnail: "/device-mockup.png",
        category: "SaaS"
    },
    {
        title: "Digital Portfolio",
        link: "https://portfolio.digital",
        thumbnail: "/mac-screen.jpg",
        category: "Portfolio"
    },
    {
        title: "Web Application",
        link: "https://web-app.com",
        thumbnail: "/resort-macbook-mockup.png",
        category: "Apps"
    },
    {
        title: "Cloud Services",
        link: "https://cloud-services.net",
        thumbnail: "/resort-mac.png",
        category: "Infrastructure"
    },
    {
        title: "AI Integration",
        link: "https://ai-integration.tech",
        thumbnail: "/college-mac.png",
        category: "AI/ML"
    },
    {
        title: "Mobile App Design",
        link: "https://mobile-app.design",
        thumbnail: "/device-mockup.png",
        category: "Mobile"
    },
    {
        title: "UX Research",
        link: "https://ux-research.org",
        thumbnail: "/mac-screen.jpg",
        category: "UX/UI"
    },
];

export default function MockupShowcase() {
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    // Spring configuration for smooth motion
    const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

    // Reduced movement range for better containment on smaller screens
    const rawTranslateX = useTransform(scrollYProgress, [0, 1], [0, 600]);
    const rawTranslateXReverse = useTransform(scrollYProgress, [0, 1], [0, -600]);
    const rawRotateX = useTransform(scrollYProgress, [0, 0.6], [12, 0]);
    const rawOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const rawRotateZ = useTransform(scrollYProgress, [0, 0.6], [8, 0]);
    const rawTranslateY = useTransform(scrollYProgress, [0, 1], [-300, 50]);

    // Apply springs to smooth the values
    const translateX = useSpring(rawTranslateX, springConfig);
    const translateXReverse = useSpring(rawTranslateXReverse, springConfig);
    const rotateX = useSpring(rawRotateX, springConfig);
    const opacity = useSpring(rawOpacity, springConfig);
    const rotateZ = useSpring(rawRotateZ, springConfig);
    const translateY = useSpring(rawTranslateY, springConfig);

    return (
        <div
            ref={ref}
            className="min-h-[140vh] md:min-h-[200vh] py-12 md:py-32 overflow-hidden antialiased relative flex flex-col bg-black w-full"
        >
            <Header />
            <motion.div
                style={{
                    translateY,
                    opacity,
                }}
                className="w-full will-change-transform"
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-4 md:space-x-20 mb-6 md:mb-20 translate-x-[10%] md:translate-x-0">
                    {firstRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row mb-6 md:mb-20 space-x-4 md:space-x-20 -translate-x-[10%] md:translate-x-0">
                    {secondRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateXReverse}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-4 md:space-x-20 translate-x-[10%] md:translate-x-0">
                    {thirdRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}

const Header = () => {
    return (
        <div className="section-container relative mx-auto py-12 md:py-20 w-full left-0 top-0">
            <ParallaxScroll speed={0.02} direction="up">
                <h2 className="text-3xl md:text-6xl font-medium text-white tracking-tight leading-[1.1] mb-6 md:mb-10 gpu-stable">
                    Engineering <br />
                    <span className="bg-clip-text text-transparent bg-linear-to-r from-accent to-accent-secondary font-semibold">Bespoke</span> Digital Platforms
                </h2>
            </ParallaxScroll>
            <ParallaxScroll speed={0.04} direction="up">
                <p className="max-w-2xl text-base md:text-xl font-normal text-white/90 leading-relaxed">
                    At <span className="text-white font-medium">Nexora</span>, we converge technical excellence with
                    distilled design to build high-performance products that command attention.
                </p>
            </ParallaxScroll>
        </div>
    );
};

const ProductCard = ({
    product,
    translate,
}: {
    product: {
        title: string;
        link: string;
        thumbnail: string;
        category?: string;
    };
    translate: MotionValue<number>;
}) => {
    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -10,
                scale: 1.02,
            }}
            key={product.title}
            className="group/product h-48 w-72 md:h-96 md:w-lg relative shrink-0 will-change-transform"
        >
            <div className="absolute inset-0 rounded-2xl md:rounded-4xl border border-white/10 bg-white/5 -z-10 group-hover/product:border-accent/30 transition-colors duration-500" />

            <a
                href={product.link}
                className="block h-full w-full relative overflow-hidden rounded-xl md:rounded-3xl m-1 md:m-2"
            >
                <Image
                    src={product.thumbnail}
                    height="600"
                    width="600"
                    className="object-cover object-top absolute h-[95%] w-[98%] left-[1%] top-[1%] rounded-xl md:rounded-3xl transition-transform duration-700 group-hover/product:scale-105"
                    alt={product.title}
                    sizes="(max-width: 768px) 300px, 600px"
                    priority={false}
                    decoding="async"
                />

                {/* Hover Overlay - Simplified background to fix lag */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/product:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="px-6 py-3 bg-white text-black rounded-full font-semibold text-sm transform translate-y-4 group-hover/product:translate-y-0 transition-transform duration-500 shadow-xl">
                        View Case Study
                    </div>
                </div>
            </a>

            {/* Content info below image or floating */}
            <div className="absolute -bottom-12 left-6 opacity-0 group-hover/product:opacity-100 transition-all duration-500 transform translate-y-2 group-hover/product:translate-y-0 pointer-events-none">
                <span className="text-[10px] text-accent font-bold tracking-widest uppercase mb-1 block">
                    {product.category || "Digital Product"}
                </span>
                <h2 className="text-xl font-medium text-white">
                    {product.title}
                </h2>
            </div>
        </motion.div>
    );
};
