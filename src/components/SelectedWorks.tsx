'use client';
import Container from './Container';
import Section from './Section';
import { projects, Project } from '@/constants/projects';
import { ArrowUpRight, Github } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';

const ProjectCard = ({ project }: { project: Project; index: number }) => {
  const isTwoButtons = project.liveUrl && project.sourceUrl;
  return (
    <div
      className="group flex flex-col gap-6 p-2 rounded-xl bg-red-400/0 border border-border outline-1 outline-border outline-offset-4 size-full"
      // initial={{ opacity: 0, y: 20 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.6, delay: index * 0.1 }}
      // viewport={{ once: true }}
    >
      {/* Project Image */}
      {project.image && (
        <div className="aspect-video w-full overflow-hidden rounded-lg bg-card border border-border/50">
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={400}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      {/* Project Content */}
      <div className="flex flex-col gap-4 px-2 pb-2 first:pt-2 flex-1 w-full">
        <div className="flex items-start justify-between gap-4 flex-1">
          <div className="flex-1 flex flex-col">
            <h3 className="text-xl md:text-2xl font-pp-editorial-new font-medium mb-2">
              {project.title}
              {project.year && <span className="text-muted-foreground/50 font-medium ml-2">({project.year})</span>}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm md:text-base flex-1">{project.description}</p>
          </div>
        </div>

        {/* Technologies */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        )}

        {/* Links */}
        <div className={cn('grid grid-cols-1 gap-4', isTwoButtons && 'grid-cols-2')}>
          {project.liveUrl && (
            <Button variant="alt" className="grow" asChild>
              <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Live Site
                <ArrowUpRight className="w-3 h-3" strokeWidth={2.5} />
              </Link>
            </Button>
          )}
          {project.sourceUrl && (
            <Button variant="alt" className="grow" asChild>
              <Link href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-3 h-3" strokeWidth={2.5} />
                Source Code
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default function SelectedWorks() {
  const projectsWithImages = projects.filter((project) => project.image);
  const projectsWithoutImages = projects.filter((project) => !project.image);
  const arrangedProjects = [...projectsWithImages, ...projectsWithoutImages];

  return (
    <Section id="work" className="relative">
      <Container>
        <div
          className="space-y-16"
          // initial={{ opacity: 0, y: 50 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.8, delay: 0.2 }}
          // viewport={{ once: true }}
        >
          <div
            className="text-center"
            // initial={{ opacity: 0, y: 30 }}
            // whileInView={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.6, delay: 0.4 }}
            // viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-pp-editorial-new tracking-tight mb-6">
              Selected <span className="italic">Works</span>
            </h2>
            <pre className="text-muted-foreground/50 text-sm font-mono text-center mb-6">⎯ ✦ ⎯</pre>
            {/* <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of projects that showcase my passion for creating thoughtful digital experiences.
            </p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            {arrangedProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
