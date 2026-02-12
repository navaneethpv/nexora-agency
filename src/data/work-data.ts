export interface Project {
    slug: string;
    title: string;
    category: string;
    shortDescription: string;
    coverImage: string;
    macbookImage?: string;
    mobileImage?: string;
    overview: string;
    challenge: string[];
    solution: string[];
    features: string[];
    techStack: string[];
    outcomes: string[];
    gallery?: string[];
    liveLink?: string;
}

export const projects: Project[] = [
    {
        slug: "resort-website-admin-portal",
        title: "Resort Website & Admin Portal",
        category: "Website · Admin System",
        shortDescription: "A modern resort website with an admin portal to manage rooms, bookings, content, and enquiries.",
        coverImage: "/resort-macbook-mockup.png",
        macbookImage: "/resort-mac.png",
        mobileImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop",
        overview: "This project focuses on creating a clean and user-friendly website for a resort, along with an internal admin portal to manage daily operations efficiently. The goal was to improve the guest booking experience while giving administrators a simple interface to manage rooms, availability, and enquiries.",
        challenge: [
            "Manual booking management led to errors and double-bookings",
            "No centralized system for managing room availability and pricing",
            "Poor mobile experience resulted in high bounce rates for potential guests"
        ],
        solution: [
            "Developed a responsive, high-performance website for varying device sizes",
            "Built a centralized admin dashboard for real-time inventory management",
            "Implemented a seamless booking request flow to capture high-intent leads",
            "Streamlined content management for non-technical staff"
        ],
        features: [
            "Real-time Room Availability & Pricing",
            "Secure Booking & Enquiry Engine",
            "Admin Dashboard with Analytics",
            "Dynamic Content Management System (CMS)",
            "Mobile-first Responsive Design"
        ],
        techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Neon DB", "Prisma", "Framer Motion"],
        outcomes: [
            "300% increase in direct online enquiries within 3 months",
            "Reduced administrative time for booking management by 60%",
            "Achieved a 98/100 Performance Score on Google Lighthouse"
        ],
        gallery: [
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1551882547-ff43c61f32a0?q=80&w=1400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1563911302283-d2bc120e7458?q=80&w=1400&auto=format&fit=crop"
        ],
        liveLink: "https://demo-resort.nexoraweb.tech"
    },
    {
        slug: "college-website-platform",
        title: "College Website Platform",
        category: "Institutional Website",
        shortDescription: "A modern, accessible website designed for educational institutions.",
        coverImage: "/institutional-academic.png",
        macbookImage: "/college-mac.png",
        mobileImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
        overview: "We developed a structured digital presence for educational institutions, focusing on clear information architecture and accessible user journeys. The platform allows students and faculty to access vital information easily while maintaining a professional and modern aesthetic.",
        challenge: [
            "Information architecture was cluttered, making it hard for students to find courses",
            "Legacy system was not mobile-responsive, alienating mobile-first users",
            "Updating content required developer intervention, causing delays"
        ],
        solution: [
            "Redesigned information hierarchy for intuitive navigation",
            "Implemented a headless CMS for easy content updates by university staff",
            "Ensured WCAG 2.1 AA accessibility compliance",
            "Optimized performance for campus networks"
        ],
        features: [
            "Advanced Course Search & Filtering",
            "Student Portal Integration",
            "Events & News Management System",
            "Staff Directory with Dynamic Profiles",
            "Accessibility-First Design System"
        ],
        techStack: ["Next.js", "React", "TypeScript", "Sanity CMS", "Tailwind CSS"],
        outcomes: [
            "40% increase in student application submissions via the portal",
            "Wait time for content updates reduced from days to minutes",
            "100% Mobile friendliness score"
        ]
    },
    {
        slug: "business-portfolio-website",
        title: "Business Portfolio Website",
        category: "Brand Website",
        shortDescription: "A clean and professional portfolio website for a growing business.",
        coverImage: "/device-mockup.png",
        macbookImage: "/device-mockup.png",
        mobileImage: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=800&auto=format&fit=crop",
        overview: "Built for modern retail brands, this project focuses on a fluid product discovery experience and professional brand storytelling. The goal was to create a digital presence that builds trust and clearly communicates the business's value proposition.",
        challenge: [
            "Generic design failed to differentiate the brand from competitors",
            "Slow page loads led to customer drop-off",
            "Lack of clear conversion funnels for service inquiries"
        ],
        solution: [
            "Crafted a bespoke, premium design language aligned with brand identity",
            "Implemented smooth scroll and micro-interactions for engagement",
            "Optimized lead generation forms and CTAs",
            "Deployed on Vercel Edge Network for global speed"
        ],
        features: [
            "Immersive Hero Animations",
            "Interactive Service Gallery",
            "Dynamic Lead Generation Forms",
            "SEO-Optimized Structure & Metadata",
            "Smooth Page Transitions"
        ],
        techStack: ["Next.js", "GSAP", "Tailwind CSS", "React Hook Form", "Vercel"],
        outcomes: [
            "Bounce rate decreased by 45%",
            "2x increase in qualified leads generated through the site",
            "Ranked on page 1 of Google for key brand terms within 2 months"
        ]
    }
];
