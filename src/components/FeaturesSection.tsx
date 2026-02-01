"use client";

const features = [
    {
        title: "Design board",
        description: "Add as many design requests to your board as you'd like.",
        icon: "📂"
    },
    {
        title: "Lightning fast",
        description: "Receive your designs one by one in just a few days on average.",
        icon: "⚡"
    },
    {
        title: "Fixed monthly rate",
        description: "No surprises here! Pay the same fixed price each month.",
        icon: "💳"
    },
    {
        title: "Top-tier quality",
        description: "Insane design quality at your fingertips whenever you need it.",
        icon: "💎"
    },
    {
        title: "Flexible and scalable",
        description: "Scale up or down as your needs change, or cancel anytime.",
        icon: "📈"
    },
    {
        title: "Unique and all yours",
        description: "Each of your designs is made especially for you and is 100% yours.",
        icon: "🔒"
    }
];

export default function FeaturesSection() {
    return (
        <section id="features" className="py-20 bg-white/[0.02] border-y border-white/5">
            <div className="section-container">
                <div className="text-center max-w-xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Reasons you will <span className="font-serif-italic font-medium">love us</span>
                    </h2>
                    <p className="text-secondary text-base">
                        We've built a design service that actually works for modern brands and startups.
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
