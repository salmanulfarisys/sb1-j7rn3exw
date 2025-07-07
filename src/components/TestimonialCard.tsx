import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  companyName: string;
  imageUrl: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  companyName,
  imageUrl,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col h-full hover:shadow-lg transition-shadow">
      <div className="mb-4">
        <svg
          width="45"
          height="36"
          className="text-primary/20 mb-1"
          viewBox="0 0 45 36"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.5 18H9C9 12.477 13.477 8 19 8V13.5C15.914 13.5 13.5 15.914 13.5 19V27H22.5V18H13.5ZM31.5 18H27C27 12.477 31.477 8 37 8V13.5C33.914 13.5 31.5 15.914 31.5 19V27H40.5V18H31.5Z" />
        </svg>
        <p className="italic text-gray-700 flex-grow">{quote}</p>
      </div>
      <div className="mt-auto flex items-center">
        <img
          src={imageUrl}
          alt={author}
          className="h-12 w-12 rounded-full object-cover mr-4"
        />
        <div>
          <p className="font-medium text-gray-900">{author}</p>
          <p className="text-sm text-gray-500">
            {role}, {companyName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;