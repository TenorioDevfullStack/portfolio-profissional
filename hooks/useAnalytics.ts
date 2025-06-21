"use client";

import { sendGAEvent } from "@next/third-parties/google";

export function useAnalytics() {
  // Função genérica para enviar eventos
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (
      typeof window !== "undefined" &&
      process.env.NODE_ENV === "production"
    ) {
      sendGAEvent({
        event: eventName,
        ...parameters,
      });
    }
  };

  // Eventos específicos do portfólio
  const trackContact = (
    contactType: "whatsapp" | "email" | "linkedin" | "form"
  ) => {
    trackEvent("contact_click", {
      contact_type: contactType,
      event_category: "engagement",
    });
  };

  const trackProjectView = (projectName: string) => {
    trackEvent("project_view", {
      project_name: projectName,
      event_category: "projects",
    });
  };

  const trackProjectAction = (
    projectName: string,
    action: "view_live" | "view_code" | "view_dashboard"
  ) => {
    trackEvent("project_action", {
      project_name: projectName,
      action: action,
      event_category: "projects",
    });
  };

  const trackSectionView = (sectionName: string) => {
    trackEvent("section_view", {
      section_name: sectionName,
      event_category: "navigation",
    });
  };

  const trackDownload = (fileName: string) => {
    trackEvent("file_download", {
      file_name: fileName,
      event_category: "downloads",
    });
  };

  const trackThemeToggle = (theme: "light" | "dark") => {
    trackEvent("theme_toggle", {
      theme: theme,
      event_category: "ui_interaction",
    });
  };

  return {
    trackEvent,
    trackContact,
    trackProjectView,
    trackProjectAction,
    trackSectionView,
    trackDownload,
    trackThemeToggle,
  };
}
