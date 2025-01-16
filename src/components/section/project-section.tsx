import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

type Project = {
  id: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
};

type ProjectSectionProps = {
  projects: Project[];
};

export const ProjectSection = ({ projects }: ProjectSectionProps) => {
  return (
    <section id="projects" className="space-y-8">
      <div className="flex items-center gap-3 text-2xl font-semibold">
        <span className="text-purple-500 bg-purple-500/10 p-2.5 rounded-xl">
          🚀
        </span>
        Projects
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Link key={index} to={`/projects/${project.id}`}>
            <Card
              className="group h-full flex flex-col overflow-hidden border-transparent hover:border-purple-500/20 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-300 bg-gray-50 dark:bg-[#1c1c1c]"
            >
              <div className="flex flex-col gap-4 p-5 h-full">
                <div className="relative w-full aspect-video max-w-[500px] mx-auto">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-medium">{project.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <Badge
                          key={i}
                          variant="secondary"
                          className="px-2.5 py-0.5 text-xs font-medium bg-purple-500/5 text-purple-600 dark:text-purple-400"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};
