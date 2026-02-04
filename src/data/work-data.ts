export interface Project {
    slug: string;
    title: string;
    category: string;
    shortDescription: string;
    coverImage: string;
    macbookImage?: string; // Optional field for the 3D MacBook animation
    mobileImage?: string; // Optional field for the 3D iPhone animation
    overview: string;
    challenge: string[];
    solution: string[];
    features: string[];
}

export const projects: Project[] = [
    {
        slug: "resort-website-admin-portal",
        title: "Resort Website & Admin Portal",
        category: "Website · Admin System",
        shortDescription: "A modern resort website with an admin portal to manage rooms, bookings, content, and enquiries.",
        coverImage: "/resort-macbook-mockup.png",
        macbookImage: "/resort-mac.png",
        mobileImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2564&auto=format&fit=crop",
        overview: "This project focuses on creating a clean and user-friendly website for a resort, along with an internal admin portal to manage daily operations efficiently. The goal was to improve the guest booking experience while giving administrators a simple interface to manage rooms, availability, and enquiries.",
        challenge: [
            "Manual booking management",
            "No centralized system for rooms and enquiries",
            "Poor mobile experience for guests"
        ],
        solution: [
            "Responsive resort website for guests",
            "Centralized admin dashboard",
            "Easy room, booking, and enquiry management",
            "Simple interface for non-technical users"
        ],
        features: [
            "Room listings and availability display",
            "Booking request system",
            "Admin panel for content and room management",
            "Enquiry management dashboard",
            "Mobile-friendly design"
        ]
    },
    {
        slug: "college-website-platform",
        title: "College Website Platform",
        category: "Institutional Website",
        shortDescription: "A modern, accessible website designed for educational institutions.",
        coverImage: "/institutional-academic.png",
        macbookImage: "/college-mac.png",
        mobileImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2564&auto=format&fit=crop",
        overview: "We developed a structured digital presence for educational institutions, focusing on clear information architecture and accessible user journeys. The platform allows students and faculty to access vital information easily while maintaining a professional and modern aesthetic.",
        challenge: [
            "Overwhelming and cluttered information layout",
            "Difficult navigation for new users",
            "Lack of mobile optimization for students"
        ],
        solution: [
            "Clean, hierarchical information design",
            "Intuitive navigation system",
            "Fully responsive layout for all devices",
            "Fast page load times for better accessibility"
        ],
        features: [
            "Course and department listings",
            "Student information portal",
            "Events and news announcement system",
            "Staff directory with contact details",
            "Accessibility-first design elements"
        ]
    },
    {
        slug: "business-portfolio-website",
        title: "Business Portfolio Website",
        category: "Brand Website",
        shortDescription: "A clean and professional portfolio website for a growing business.",
        coverImage: "/device-mockup.png",
        macbookImage: "/device-mockup.png",
        mobileImage: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=2564&auto=format&fit=crop",
        overview: "Built for modern retail brands, this project focuses on a fluid product discovery experience and professional brand storytelling. The goal was to create a digital presence that builds trust and clearly communicates the business's value proposition.",
        challenge: [
            "Generic and outdated online presence",
            "Weak brand storytelling",
            "Low conversion rates from mobile visitors"
        ],
        solution: [
            "Custom brand-centric design",
            "Interactive product/service showcases",
            "Conversion-optimized user journeys",
            "Performance-focused development"
        ],
        features: [
            "High-impact hero sections",
            "Interactive project/service galleries",
            "Dynamic contact and lead generation forms",
            "Smooth scroll animations and transitions",
            "Search Engine Optimized structure"
        ]
    }
];
