import "../assets/styles/Projects.scss";

// Dummy project data - user should replace with real data
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    role: "Full Stack Architect",
    description: "A scalable e-commerce solution with real-time inventory management, payment gateway integration, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Redux", "Stripe API"],
    image: "/images/project1.jpg", // Placeholder
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Task Management SaaS",
    role: "Lead Developer",
    description: "Collaborative task management tool with drag-and-drop interface, real-time updates via WebSockets, and team workspaces.",
    technologies: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript"],
    image: "/images/project2.jpg",
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "AI Content Generator",
    role: "Frontend Engineer",
    description: "Interface for an AI-powered content generation tool, featuring rich text editing and export capabilities.",
    technologies: ["Vue.js", "Python", "Flask", "OpenAI API"],
    image: "/images/project3.jpg",
    link: "#",
    github: "#"
  }
];

function Projects() {
  return (
    <div id="projects">
      <div className="container fade-in">
        <h1 className="section-title">Featured <span className="text-accent">Projects</span></h1>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.id}>
              <div className="project-content">
                <h3>{project.title}</h3>
                <span className="project-role">{project.role}</span>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
