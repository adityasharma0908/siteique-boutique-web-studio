const SocialLinks = () => {
  return (
    <section className="pb-24 px-6">

      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl font-bold mb-8">
          Connect With Me
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <a
            href="https://github.com/siteique"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/company/siteique"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:your.email@example.com">
            Email
          </a>

        </div>

      </div>

    </section>
  );
};

export default SocialLinks;