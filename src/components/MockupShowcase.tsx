"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import Image from "next/image";

const products = [
    {
        title: "Azure Resorts",
        link: "https://azure-resorts.com",
        thumbnail: "/resort-macbook-mockup.png",
    },
    {
        title: "Summit Academy",
        link: "https://summit-academy.edu",
        thumbnail: "/college-mac.png",
    },
    {
        title: "Institutional Portal",
        link: "https://institutional.io",
        thumbnail: "/institutional-academic.png",
    },
    {
        title: "Nexora Studio",
        link: "https://nexora.studio",
        thumbnail: "/device-mockup.png",
    },
    {
        title: "Creative Agency",
        link: "https://creative.agency",
        thumbnail: "/mac-screen.jpg",
    },
    {
        title: "Corporate Identity",
        link: "https://corporate.identity",
        thumbnail: "/resort-mac.png",
    },
    {
        title: "Modern E-commerce",
        link: "https://modern-shop.com",
        thumbnail: "/college-mac.png",
    },
    {
        title: "Learning Management",
        link: "https://lms-portal.com",
        thumbnail: "/institutional-academic.png",
    },
    {
        title: "Saas Platform",
        link: "https://saas-platform.io",
        thumbnail: "/device-mockup.png",
    },
    {
        title: "Digital Portfolio",
        link: "https://portfolio.digital",
        thumbnail: "/mac-screen.jpg",
    },
    {
        title: "Web Application",
        link: "https://web-app.com",
        thumbnail: "/resort-macbook-mockup.png",
    },
    {
        title: "Cloud Services",
        link: "https://cloud-services.net",
        thumbnail: "/resort-mac.png",
    },
    {
        title: "AI Integration",
        link: "https://ai-integration.tech",
        thumbnail: "/college-mac.png",
    },
    {
        title: "Mobile App Design",
        link: "https://mobile-app.design",
        thumbnail: "/device-mockup.png",
    },
    {
        title: "UX Research",
        link: "https://ux-research.org",
        thumbnail: "/mac-screen.jpg",
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

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1000]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
        springConfig
    );

    return (
        <div
            ref={ref}
            className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-black"
        >
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className=""
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
                    {firstRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row mb-20 space-x-20">
                    {secondRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateXReverse}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
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
        <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
            <h1 className="text-3xl md:text-8xl font-black text-white tracking-tighter leading-none mb-8">
                Crafting <span className="text-accent">Legendary</span> <br /> Digital Experiences
            </h1>
            <p className="max-w-2xl text-base md:text-2xl font-medium text-secondary/80 leading-relaxed">
                At <span className="text-white font-bold">Nexora</span>, we blend cutting-edge technology with
                avant-garde design to build high-performance products that redefine industries.
            </p>
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
    };
    translate: MotionValue<number>;
}) => {
    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={{
                y: -20,
            }}
            key={product.title}
            className="group/product h-96 w-[30rem] relative flex-shrink-0"
        >
            <a
                href={product.link}
                className="block group-hover/product:shadow-2xl "
            >
                <Image
                    src={product.thumbnail}
                    height="600"
                    width="600"
                    className="object-cover object-left-top absolute h-full w-full inset-0 rounded-2xl"
                    alt={product.title}
                />
            </a>
            <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none transition duration-200 rounded-2xl"></div>
            <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white transition duration-200">
                {product.title}
            </h2>
        </motion.div>
    );
};
