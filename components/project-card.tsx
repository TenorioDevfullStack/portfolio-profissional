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
import { Eye } from "lucide-react";

// A interface agora espera que as propriedades do array sejam 'readonly'
interface Project {
  title: string;
  description: string;
  technologies: readonly string[];
  media: readonly {
    readonly type: "image" | "video";
    readonly src: StaticImageData | string;
  }[];
  livePreviewUrl: string;
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden flex flex-col h-full transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2">
      <CardHeader>
        <Carousel className="w-full">
          <CarouselContent>
            {project.media.map((mediaItem, index) => (
              <CarouselItem key={index}>
                <div className="relative w-full h-80 rounded-lg overflow-hidden bg-black">
                  {mediaItem.type === "image" ? (
                    <Image
                      src={mediaItem.src as StaticImageData}
                      alt={`Mídia ${index + 1} do projeto ${project.title}`}
                      fill
                      className="object-contain" // Mantemos 'contain' para as imagens da dashboard para não cortar a UI
                      sizes="(max-width: 768px) 100vw, 50vw"
                      placeholder="blur"
                    />
                  ) : (
                    <video
                      src={mediaItem.src as string}
                      className="w-full h-full object-cover" // <-- CORREÇÃO AQUI: de 'object-contain' para 'object-cover'
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-12" />
          <CarouselNext className="mr-12" />
        </Carousel>
        <CardTitle className="pt-4">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full">
          <a
            href={project.livePreviewUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Eye className="mr-2 h-4 w-4" />
            Ver Projeto
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
