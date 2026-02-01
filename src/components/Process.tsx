"use client";

const steps = [
    {
        number: "01",
        title: "Discover",
        description: "We understand goals, users, and technical needs."
    },
    {
        number: "02",
        title: "Design",
        description: "We create clean, user-focused interfaces."
    },
    {
        number: "03",
        title: "Build",
        description: "We develop scalable, production-ready systems."
    },
    {
        number: "04",
        title: "Refine",
        description: "We test, optimize, and prepare for growth."
    }
];

export default function Process() {
    return (
        <section id="process" className="py-20 border-t border-white/5">
            <div className="section-container">
                <div className="max-w-xl mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                        How <span className="italic font-medium text-accent">We Work</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col">
                            <span className="text-accent font-bold text-base mb-4">{step.number}</span>
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-secondary text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
