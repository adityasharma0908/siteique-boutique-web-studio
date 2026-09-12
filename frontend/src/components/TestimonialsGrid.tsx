const testimonials = [
  {
    quote:
      "Focused on delivering modern, scalable, and user-centric digital experiences.",
    author: "Our Commitment",
  },
  {
    quote:
      "Combining technical expertise with thoughtful design to build impactful solutions.",
    author: "Our Approach",
  },
  {
    quote:
      "Dedicated to transparent communication and long-term partnerships.",
    author: "Our Philosophy",
  },
];

const TestimonialsGrid = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold mb-12">
          What We Stand For
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="border rounded-3xl p-8"
            >
              <p className="mb-6">
                "{testimonial.quote}"
              </p>

              <h3 className="font-semibold">
                {testimonial.author}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsGrid;