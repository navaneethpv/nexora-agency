"use client";

const features = [
    {
        title: "Web Development",
        description: "Building clean, scalable, and secure web applications.",
        icon: "💻"
    },
    {
        title: "UI & UX Design",
        description: "User-focused interfaces designed for clarity and ease of use.",
        icon: "🎨"
    },
    {
        title: "Performance Optimization",
        description: "Making your web products lightning-fast and responsive.",
        icon: "⚡"
    },
    {
        title: "Scalable Architecture",
        description: "Systems designed to grow seamlessly with your business.",
        icon: "🏗️"
    },
    {
        title: "Responsive Design",
        description: "Perfect experiences across all devices and screen sizes.",
        icon: "📱"
    },
    {
        title: "Technical Excellence",
        description: "A performance-first mindset in every line of code.",
        icon: "💎"
    }
];

export default function FeaturesSection() {
    return (
        <section id="services" className="py-20 bg-white/2 border-y border-white/5">
            <div className="section-container">
                <div className="text-center max-w-xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        What <span className="italic font-medium text-accent">We Do</span>
                    </h2>
                    <p className="text-secondary text-base">
                        Specialized digital services for modern businesses and institutional scale.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-card border border-white/5 p-7 rounded-[1.75rem] hover:border-white/20 transition-all duration-300 group"
                        >
                            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-xl mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                            <p className="text-secondary text-[13px] leading-relaxed group-hover:text-white/80 transition-colors">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
