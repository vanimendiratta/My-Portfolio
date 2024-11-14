import React from 'react';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  description: string;
  color: 'primary' | 'secondary' | 'accent';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, category, description, color }) => {
  const colorClasses = {
    primary: 'from-primary to-primary/50',
    secondary: 'from-secondary to-secondary/50',
    accent: 'from-accent to-accent/50'
  };

  return (
    <div className="rounded-xl overflow-hidden group hover:transform hover:scale-105 transition-all duration-300 backdrop-blur-lg bg-white/10 shadow-neon hover:shadow-neon-hover">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className={`absolute inset-0 bg-gradient-to-t ${colorClasses[color]} opacity-0 group-hover:opacity-60 transition-all duration-300 flex items-center justify-center`}>
          <ExternalLink className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 w-8 h-8" />
        </div>
      </div>
      <div className="p-6">
        <span className={`text-${color} text-sm font-medium`}>{category}</span>
        <h3 className="text-xl font-bold mt-2 mb-3 text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;