"use client";

import Image, { StaticImageData } from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Eye, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

interface Project {
  title: string;
  description: string;
  technologies: readonly string[];
  media: readonly {
    readonly type: "image" | "video";
    readonly src: StaticImageData | string;
  }[];
  livePreviewUrl: string;
  githubUrl?: string;
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group overflow-hidden flex flex-col h-full hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-purple-50/50 hover:to-blue-50/50 dark:hover:from-purple-950/50 dark:hover:to-blue-950/50">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/30 to-blue-100/10 dark:from-slate-800/30 dark:to-blue-900/10 opacity-60 z-0" />
      <CardHeader className="p-0 z-10">
        <Carousel className="w-full">
          <CarouselContent>
            {project.media.map((mediaItem, index) => (
              <CarouselItem key={index}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative w-full h-80 rounded-lg overflow-hidden bg-black"
                >
                  {mediaItem.type === "image" ? (
                    <Image
                      src={mediaItem.src as StaticImageData}
                      alt={`Mídia ${index + 1} do projeto ${project.title}`}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      placeholder="blur"
                    />
                  ) : (
                    <video
                      src={mediaItem.src as string}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-12 opacity-0 group-hover:opacity-100 transition-opacity" />
          <CarouselNext className="mr-12 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Carousel>
        <CardTitle className="p-6 pb-0">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-foreground/80 mb-4 group-hover:text-foreground transition-colors">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <motion.div
              key={tech}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Badge
                variant="secondary"
                className="group-hover:bg-purple-100 dark:group-hover:bg-purple-900/50 transition-colors"
              >
                {tech}
              </Badge>
            </motion.div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button
          asChild
          variant="outline"
          className="flex-1 group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:text-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label={`Ver projeto ${project.title}`}
        >
          <a
            href={project.livePreviewUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Eye className="mr-2 h-4 w-4" />
            Ver Projeto
          </a>
        </Button>
        {project.githubUrl && (
          <Button
            asChild
            variant="outline"
            className="group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-blue-600 group-hover:text-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={`Ver código no GitHub do projeto ${project.title}`}
          >
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
