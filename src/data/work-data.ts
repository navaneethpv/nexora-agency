export interface Project {
    slug: string;
    title: string;
    category: string;
    shortDescription: string;
    coverImage: string;
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
        slug: "premium-resort-website",
        title: "Premium Resort Website",
        category: "Luxury Hospitality · Web Experience",
        shortDescription: "A high-end, visual-heavy resort website designed for premium user experience with direct WhatsApp booking integration.",
        coverImage: "/resort-macbook-mockup.png",
        overview: "This project focused on creating an immersive digital experience for a luxury boutique resort. By focusing on a premium, high-performance frontend, we captured the essence of the property while facilitating instant bookings and personalized enquiries directly via WhatsApp.",
        challenge: [
            "Traditional booking engines felt too robotic and impersonal for a luxury brand",
            "High friction in the booking process led to visitor drop-offs",
            "Need for a website that reflected the premium nature of the resort through high-end visuals"
        ],
        solution: [
            "Designed a premium, visual-first UI with smooth scroll animations and parallax effects",
            "Integrated a one-click WhatsApp booking system for direct guest interaction",
            "Optimized image assets for lightning-fast performance without sacrificing quality",
            "Implemented a mobile-optimized experience for travelers on the go"
        ],
        features: [
            "Direct WhatsApp Booking Integration",
            "High-Definition Visual Showcases",
            "Immersive Parallax & Motion Effects",
            "Interactive Room & Amenity Gallery",
            "Personalized Availability Enquiry System"
        ],
        techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        outcomes: [
            "150% increase in direct booking enquiries via WhatsApp",
            "Average session duration increased by 85% due to immersive UI",
            "Achieved a perfect 100/100 Performance Score on Google Lighthouse"
        ],
        gallery: [
            "/Gallery/resort1.png",
            "/Gallery/resort2.png",
            "/Gallery/resort3.png",
            "/Gallery/resort4.png"
        ],
        liveLink: "https://vagenza.vercel.app/"
    },
    {
        slug: "college-website-platform",
        title: "College Website Platform",
        category: "Institutional Website",
        shortDescription: "A modern, accessible website designed for educational institutions.",
        coverImage: "/institutional-academic.png",
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
        ],
        gallery: [
            "/Gallery/college1.png",
            "/Gallery/college2.png",
            "/Gallery/college3.png",
            "/Gallery/college4.png"
        ],
        liveLink: "https://beta.cmcollege.edu.in/"
    },
    {
        slug: "business-portfolio-website",
        title: "Business Portfolio Website",
        category: "Brand Website",
        shortDescription: "A clean and professional portfolio website for a growing business.",
        coverImage: "/device-mockup.png",
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
        ],
        gallery: [
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1400&auto=format&fit=crop"
        ],
        liveLink: "https://demo-business.nexoraweb.tech"
    }
];
