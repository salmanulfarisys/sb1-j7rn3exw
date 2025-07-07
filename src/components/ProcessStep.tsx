import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  title: string;
  description: string;
  icon: LucideIcon;
  stepNumber: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  title,
  description,
  icon: Icon,
  stepNumber,
}) => {
  return (
    <div className="relative flex items-start group">
      <div className="absolute top-0 left-8 w-px h-full bg-gradient-to-b from-purple-200 to-blue-200 group-last:hidden" />
      
      <div className="relative flex h-16 w-16 flex-none items-center justify-center rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-600 shadow-lg">
        <Icon className="h-6 w-6" />
        <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-xs text-white shadow-md">
          {stepNumber}
        </span>
      </div>
      
      <div className="ml-6 pb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;