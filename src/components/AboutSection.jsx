import { Code, Cpu, Briefcase } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-4 relative">
      <div className="container mx-auto max-w-6xl">

        {/* TITLE */}
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-bold">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A quick snapshot of who I am and what I enjoy building.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div className="space-y-6">
            <h3 className="font-heading text-2xl md:text-3xl font-semibold leading-snug">
              I design and build thoughtful digital systems.
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              I’m an AI/ML student with a strong interest in full-stack development.
              I enjoy building scalable, user-focused applications and experimenting
              with intelligent systems that solve real problems.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              I care deeply about clean code, good design, and systems that actually
              help people.
            </p>

            {/* CTA */}
            <div className="flex gap-4 pt-4">
              <a
                href="#contact"
                className="
                  px-7 py-3 rounded-full
                  bg-primary text-primary-foreground
                  font-medium
                  transition-all duration-300
                  hover:scale-105 hover:shadow-lg
                "
              >
                Contact Me
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-7 py-3 rounded-full
                  border border-border
                  font-medium
                  transition
                  hover:border-primary hover:text-primary
                "
              >
                View Resume
              </a>
            </div>
          </div>

          {/* RIGHT – HIGHLIGHTS */}
          <div className="grid grid-cols-1 gap-6">

            <HighlightCard
              icon={<Code className="h-5 w-5 text-primary" />}
              title="Full-Stack Development"
              text="Building responsive, accessible, and scalable web applications."
            />

            <HighlightCard
              icon={<Cpu className="h-5 w-5 text-primary" />}
              title="AI & Machine Learning"
              text="Exploring intelligent systems and practical ML use-cases."
            />

            <HighlightCard
              icon={<Briefcase className="h-5 w-5 text-primary" />}
              title="Problem-Solving Mindset"
              text="I enjoy breaking down complex ideas into structured solutions."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ================= HIGHLIGHT CARD ================= */

const HighlightCard = ({ icon, title, text }) => (
  <div
    className="
      flex gap-4 items-start
      p-5 rounded-xl
      border border-border
      bg-card
      transition-all duration-300
      hover:-translate-y-1 hover:shadow-md
      hover:border-primary/40
    "
  >
    <div className="p-2 rounded-full bg-primary/10 shrink-0">
      {icon}
    </div>

    <div>
      <h4 className="text-sm font-semibold mb-1">
        {title}
      </h4>
      <p className="text-sm text-muted-foreground leading-snug">
        {text}
      </p>
    </div>
  </div>
);
