import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PERSONAL_DATA } from "@/constant/dummy";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectPage = () => {
  const { id } = useParams();
  const project = PERSONAL_DATA.projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">Project not found</h2>
        <Link to="/">
          <Button>Back to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
      className="py-8 max-w-4xl mx-auto px-4"
    >
      <Link to="/" className="mb-8 inline-block">
        <Button variant="ghost">← Back</Button>
      </Link>

      {/* Project Image */}
      {project.image && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <img
            src={project.image}
            alt={project.name}
            className="rounded-lg shadow-lg w-full max-h-96 lg:max-w-full"
          />
        </motion.div>
      )}

      {/* Hero Section */}
      <div className="space-y-6 mb-12">
        <h1 className="text-4xl font-bold mb-2">{project.name}</h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          {project.description}
        </p>

        {/* Project Links */}
        <div className="flex gap-4">
          {project.link && (
            <Button variant="default" asChild>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
          {project.source && (
            <Button variant="outline" asChild>
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                View Code
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* Technologies Used */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
        <div className="flex flex-wrap gap-2">
          {project.tags?.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-sm">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectPage;
