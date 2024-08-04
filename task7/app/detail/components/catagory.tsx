import React from 'react';

interface CategoryTagProps {
  category: string;
}

const CategoryTag: React.FC<CategoryTagProps> = ({ category }) => {
  const getColorClass = (category: string) => {
    switch (category.toLowerCase()) {
      case 'marketing':
        return 'text-amber-400 bg-orange-400 bg-opacity-10';
      case 'design':
        return 'text-emerald-300 bg-emerald-300 bg-opacity-10';
      default:
        return 'text-gray-600 bg-gray-200';
    }
  };

  return (
    <div className={`gap-2 self-stretch px-2.5 py-1.5 rounded-[80px] ${getColorClass(category)}`}>
      {category}
    </div>
  );
};

export default CategoryTag;