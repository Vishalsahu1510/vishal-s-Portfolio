import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  { 
    id: 1,
    title: "Quick.Ai",
    description:
      "Quick.AI is a full-stack AI platform offering article/blog generation, AI image creation, background & object removal, and resume analysis. Features include Clerk authentication, subscription billing, Neon PostgreSQL storage, and a responsive, modern UI with a community gallery.",
    image: "/projects/Quick.Ai.png",
    tags: ["React","NodeJs","Express", "Clerk"],
    demoUrl: "https://quick-ai-sooty.vercel.app/",
    gitHubUrl: "https://github.com/Vishalsahu1510/Quick.Ai",
  },
  { 
    id: 2,
    title: "Interview Prep AI",
    description:
      "A personalized AI-powered platform to prepare for technical interviews by generating dynamic questions, answers, and explanations based on user roles and experience levels.",
    image: "/projects/interviewPrepAi.png",
    tags: ["React", "Express", "JWT", "Google Gemini AI", "MongoDB"],
    demoUrl: "https://ai-interview-prep-rahg.vercel.app/",
    gitHubUrl: "https://github.com/Vishalsahu1510/Ai-Interview-Prep",
  },
  {
    id: 3,
    title: "PicMart: Digital-Image-Marketplace",
    description:
      "A full-stack web application where users can buy, sell, and explore high-quality images. Built with Node.js, React, Tailwind CSS, Cloudinary, and JWT authentication for secure and seamless user experience..",
    image: "/projects/PicMart.png",
    tags: ["React", "Tailwind CSS", "cloudinary", "MongoDB", "Express"],
    demoUrl: "-",
    gitHubUrl: "https://github.com/Vishalsahu1510/PicMart-Digital-Image-Marketplace",
  },
  {
    id: 4,
    title: "URL Shortener",
    description:
      "A simple and secure web app to shorten long URLs, track clicks, and manage links efficiently. Built using Node.js and JWT-based authentication for safe and personalized link management.",
    image: "/projects/bank_management.png",
    tags: ["NodeJs",  "MongoDB", "Express", "JWT-Token", "EJS"],
    demoUrl: "-",
    gitHubUrl: "https://github.com/Vishalsahu1510/URL-Shortner",
  },

  // {
  //   id: 4,
  //   title: "Password Generator",
  //   description:
  //     "A password generator app focusing on React Hooks like `useState`, `useRef`, and `useEffect`.",
  //   image: "/projects/password-generator.png",
  //   tags: ["React", "Hooks", "JavaScript"],
  //   demoUrl: "https://password-generator-597m.vercel.app/",
  //   gitHubUrl: "https://github.com/",
  // },
 
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A showcase of my recent projects that reflect my learning journey and
          practical experience. Some are still in progress, but each highlights
          my focus on clean UI, full-stack functionality, and a drive to explore
          new technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="rounded-full px-2 py-1 border text-xs font-medium bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm ">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.gitHubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Vishalsahu1510/"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"

          >
            Check My GitHUb
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
