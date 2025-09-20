import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play } from "lucide-react";
import type { Project } from "@shared/schema";

export default function ProjectsSection() {
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects/featured"],
  });

  if (isLoading) {
    return (
      <section id="projects" className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-futuristic font-bold text-4xl md:text-6xl mb-6 text-gradient">
              Featured Projects
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="glass-card rounded-2xl overflow-hidden animate-pulse">
                <div className="w-full h-64 bg-muted"></div>
                <div className="p-8">
                  <div className="h-6 bg-muted rounded mb-4"></div>
                  <div className="h-20 bg-muted rounded mb-6"></div>
                  <div className="flex gap-2 mb-6">
                    <div className="h-6 w-16 bg-muted rounded"></div>
                    <div className="h-6 w-12 bg-muted rounded"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-futuristic font-bold text-4xl md:text-6xl mb-6 text-gradient" data-testid="projects-title">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="projects-subtitle">
            Showcasing our latest innovations and creative breakthroughs
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects && projects.length > 0 ? (
            projects.slice(0, 2).map((project, index) => (
              <div key={project.id} className="glass-card rounded-2xl overflow-hidden project-card group" data-testid={`project-card-${project.id}`}>
                {project.imageUrl ? (
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-64 object-cover"
                    data-testid={`project-image-${project.id}`}
                  />
                ) : (
                  <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-4xl font-futuristic text-muted-foreground">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className={`font-futuristic font-bold text-xl ${index % 2 === 0 ? 'text-primary' : 'text-accent'}`} data-testid={`project-title-${project.id}`}>
                      {project.title}
                    </h3>
                    <Badge variant="secondary" data-testid={`project-status-${project.id}`}>
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-6" data-testid={`project-description-${project.id}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge variant="outline" className={index % 2 === 0 ? 'border-primary/20 text-primary' : 'border-accent/20 text-accent'}>
                      {project.category}
                    </Badge>
                    {project.tags && project.tags.map((tag: string, tagIndex: number) => (
                      <Badge key={tagIndex} variant="outline" className="border-muted text-muted-foreground">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    variant="ghost" 
                    className={`${index % 2 === 0 ? 'text-primary hover:text-primary/80' : 'text-accent hover:text-accent/80'} font-semibold p-0`}
                    data-testid={`project-button-${project.id}`}
                  >
                    {project.projectUrl ? 'View Project' : 'Learn More'} 
                    {project.projectUrl ? <Play className="ml-2 h-4 w-4" /> : <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-2 text-center py-16">
              <p className="text-muted-foreground text-lg">No featured projects available at the moment.</p>
            </div>
          )}
        </div>
        
        <div className="text-center">
          <Button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:glow-blue transition-all" data-testid="button-view-all-projects">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
