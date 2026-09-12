const steps = [
  {
    number: "01",
    title: "Discovery & Consultation",
    description:
      "We understand your business goals, audience, and requirements.",
  },
  {
    number: "02",
    title: "Strategy & Planning",
    description:
      "A roadmap is created outlining features, timelines, and deliverables.",
  },
  {
    number: "03",
    title: "Design & Prototyping",
    description:
      "We craft intuitive and visually engaging interfaces.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Transforming designs into fast and scalable digital solutions.",
  },
  {
    number: "05",
    title: "Testing & Optimization",
    description:
      "Ensuring quality, responsiveness, and performance.",
  },
  {
    number: "06",
    title: "Launch & Support",
    description:
      "Deployment followed by continuous support and improvements.",
  },
];

const ProcessSteps = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold mb-12">
          Our Process
        </h1>

        <div className="space-y-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="border rounded-3xl p-8"
            >
              <p className="text-xl font-semibold mb-2">
                {step.number}
              </p>

              <h2 className="text-2xl font-bold mb-4">
                {step.title}
              </h2>

              <p>
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProcessSteps;