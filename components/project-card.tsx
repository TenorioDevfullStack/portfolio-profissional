"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Bot, ExternalLink, Github, BarChart3 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Project = {
  title: string;
  description: string;
  image: string | null;
  video?: string;
  status: string;
  icon: any;
  features: string[];
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
};

export function ProjectCard({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const Icon = project.icon;

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;

      const playVideo = async () => {
        try {
          await video.play();
          setIsVideoLoaded(true);
          setVideoError(false);
        } catch (error) {
          console.error("Erro ao reproduzir o vídeo:", error);
          setVideoError(true);
        }
      };

      video.addEventListener("loadeddata", () => {
        playVideo();
      });

      video.addEventListener("error", (e) => {
        console.error("Erro ao carregar o vídeo:", e);
        setVideoError(true);
      });

      // Tenta reproduzir o vídeo se já estiver carregado
      if (video.readyState >= 3) {
        playVideo();
      }

      return () => {
        video.removeEventListener("loadeddata", playVideo);
      };
    }
  }, []);

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200 relative overflow-hidden bg-card">
      {project.video && !videoError ? (
        <video
          ref={videoRef}
          src={project.video}
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          preload="auto"
          className={`w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300 ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundColor: "#1f2937" }}
        />
      ) : project.image ? (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      ) : null}
      <CardHeader className="relative">
        <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <CardTitle className="text-xl font-bold text-foreground">
          {project.title}
        </CardTitle>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-foreground mb-3">
            Principais Funcionalidades:
          </h4>
          <ul className="space-y-2">
            {project.features.map((feature, idx) => (
              <li
                key={idx}
                className="flex items-center text-sm text-muted-foreground"
              >
                <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-3"></div>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-foreground mb-3">
            Tecnologias:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <Badge
                key={idx}
                variant="outline"
                className="border-border text-foreground hover:bg-accent hover:text-accent-foreground text-xs"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            size="sm"
            className="w-full sm:w-auto flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
            asChild
          >
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              Ver Projeto
            </a>
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="w-full sm:w-auto border-border text-foreground hover:bg-accent hover:text-accent-foreground"
            asChild
          >
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
