import { Briefcase, Code, User } from "lucide-react";


const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer exploring Generative AI to build
              smart, dynamic solutions.
            </h3>
            <p className="text-muted-foreground">
              Skilled in building full-stack web apps using the MERN stack and
              backend development. Currently exploring Generative AI
              through small projects . My
              experience spans responsive frontends to robust APIs.
            </p>

            <p className="text-muted-foreground">
              Looking ahead, I aim to full-stack development,
              write cleaner code, and work on impactful projects using modern
              frameworks and cloud technologies.
            </p>

            <div className="flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button sm:block">
                {" "}
                Get In Touch
              </a>
              
              <a
                href="/Vishal_Sahu_Resume.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left ">
                  <h4 className="font-semibold text-lg">Full-Stack Focus</h4>
                  <p className="text-muted-foreground">
                    Delivering complete web solutions — from responsive
                    frontends to robust backend systems.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left ">
                  <h4 className="font-semibold text-lg">Full-Stack Focus</h4>
                  <p className="text-muted-foreground">
                    Delivering complete web solutions — from responsive
                    frontends to robust backend systems.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left ">
                  <h4 className="font-semibold text-lg">Code & Craftt</h4>
                  <p className="text-muted-foreground">
                    Merging clean code, thoughtful architecture, and modern
                    tools to solve real-world problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
