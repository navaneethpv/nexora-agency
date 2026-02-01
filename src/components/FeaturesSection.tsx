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
        <section id="features" className="py-24 bg-white/[0.02] border-y border-white/5">
            <div className="section-container">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Reasons you will <span className="font-serif-italic font-medium">love us</span>
                    </h2>
                    <p className="text-secondary text-lg">
                        We've built a design service that actually works for modern brands and startups.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-card border border-white/5 p-8 rounded-[2rem] hover:border-white/20 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl mb-8 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-secondary text-sm leading-relaxed group-hover:text-white/80 transition-colors">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
