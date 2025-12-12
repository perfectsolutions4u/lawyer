export interface SiteData {
  site: {
    name: string;
    logo: string;
    tagline: string;
    description: string;
    copyright: string;
    year: string;
    social?: {
      facebook?: string;
      twitter?: string;
      linkedin?: string;
      instagram?: string;
      youtube?: string;
    };
  };
  navigation: {
    links: Array<{ text: string; url: string }>;
    loginButton: { text: string; url: string };
  };
  hero: {
    title: string;
    subtitle: string;
    buttons: Array<{ text: string; url: string; type: string }>;
  };
  services: {
    title: string;
    items: Array<{
      icon: string;
      title: string;
      description: string;
      features?: string[];
    }>;
  };
  projects: {
    title: string;
    items: Array<{
      id: string;
      date: string;
      tags: string[];
      title: string;
      description: string;
      image: string;
      url: string;
      imagePosition?: string;
      details?: any;
    }>;
  };
  timeline: {
    title: string;
    items: Array<{
      year: string;
      title: string;
      description: string;
    }>;
  };
  about: {
    title: string;
    subtitle: string;
    description: string[];
    stats: Array<{ number: string; label: string }>;
    timeline: {
      title: string;
      items: Array<{
        year: string;
        title: string;
        description: string;
      }>;
    };
    values: {
      title: string;
      items: Array<{
        icon: string;
        title: string;
        description: string;
      }>;
    };
    team: {
      title: string;
      subtitle?: string;
      members: Array<{
        name: string;
        position: string;
        description: string;
        image?: string;
        specialization?: string;
        experience?: string;
      }>;
    };
  };
  team?: {
    title: string;
    subtitle?: string;
    members: Array<{
      name: string;
      position: string;
      specialization?: string;
      experience?: string;
      image?: string;
    }>;
  };
  cta: {
    title: string;
    subtitle: string;
    button: { text: string; url: string };
  };
  testimonials: {
    title: string;
    items: Array<{
      rating: number;
      text: string;
      name: string;
      position: string;
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    info: Array<{
      icon: string;
      title: string;
      content: string[];
    }>;
    map: {
      location: string;
    };
  };
  blog: {
    title: string;
    subtitle: string;
    items: Array<{
      id: string;
      title: string;
      excerpt: string;
      content: string;
      author: string;
      date: string;
      category: string;
      tags: string[];
      image: string;
      readTime: string;
    }>;
  };
}
