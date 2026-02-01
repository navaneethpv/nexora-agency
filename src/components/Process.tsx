"use client";

const steps = [
    {
        number: "01",
        title: "Subscribe",
        description: "Pick a plan that suits your needs and subscribe in minutes. No complex contracts."
    },
    {
        number: "02",
        title: "Receive",
        description: "Get your designs delivered one by one in just a few business days on average."
    },
    {
        number: "03",
        title: "Revise",
        description: "Not quite right? Request as many revisions as you need until you're 100% happy."
    }
];

export default function Process() {
    return (
        <section id="about" className="py-24 border-t border-white/5">
            <div className="section-container">
                <div className="max-w-2xl mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Begin your design journey in <br />
                        <span className="font-serif-italic font-medium">three effortless steps</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col">
                            <span className="text-accent font-bold text-lg mb-6">{step.number}</span>
                            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                            <p className="text-secondary leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
