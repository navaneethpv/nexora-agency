"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

interface AnimatedSocialIconProps {
    type: 'whatsapp' | 'linkedin' | 'github' | 'instagram';
    href: string;
    size?: number;
    target?: string;
    rel?: string;
}

const iconMap = {
    whatsapp: FaWhatsapp,
    linkedin: FaLinkedinIn,
    github: FaGithub,
    instagram: FaInstagram,
};

export const AnimatedSocialIcon = ({ type, href, size = 20, target, rel }: AnimatedSocialIconProps) => {
    const Icon = iconMap[type];

    return (
        <motion.a
            href={href}
            target={target}
            rel={target === "_blank" ? (rel || "noopener noreferrer") : rel}
            initial={{ opacity: 0.6, scale: 1 }}
            whileHover={{
                opacity: 1,
                scale: 1.15,
                y: -2,
            }}
            transition={{
                type: "spring",
                stiffness: 400,
                damping: 10
            }}
            className="text-white flex items-center justify-center p-1 group relative"
        >
            {/* Premium Glow Effect on Hover */}
            <div className="absolute inset-0 bg-white/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

            <Icon
                size={size}
                className="relative z-10 transition-colors duration-300"
            />
        </motion.a>
    );
};
