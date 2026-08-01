const services = [
  {
    title: "Frontend Development",
    description: "Creating responsive and modern interfaces."
  },
  {
    title: "Backend Development",
    description: "Building APIs and managing databases."
  },
  {
    title: "UI Implementation",
    description: "Transforming designs into pixel-perfect experiences."
  }
];

const WhatIDo = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold mb-16">
          What I Do
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-8 rounded-3xl border border-zinc-800"
            >
              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-zinc-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatIDo;