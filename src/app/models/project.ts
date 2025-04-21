export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  category?: string;
  date?: string;
}
