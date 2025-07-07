import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-200 group">
      <div className="rounded-lg p-3 bg-gradient-to-r from-purple-100 to-blue-100 w-fit mb-4 group-hover:from-purple-200 group-hover:to-blue-200 transition-all duration-300">
        <Icon className="h-6 w-6 text-purple-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;