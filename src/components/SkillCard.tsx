import React, { ReactNode } from 'react';

interface SkillCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  color: 'primary' | 'secondary' | 'accent';
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description, color }) => {
  return (
    <div className="backdrop-blur-lg bg-white/10 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 shadow-neon hover:shadow-neon-hover border border-primary/20">
      <div className={`text-${color} mb-4`}>{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default SkillCard;