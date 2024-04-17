import React from "react";
import CategoryCard from "../ui/CategoryCard";

interface Category {
  title: string;
}

interface CategoryDisplayProps {
  categories: Category[];
}

const CategoryDisplay: React.FC<CategoryDisplayProps> = ({ categories }) => {
  return (
    <>
      <div className="w-fit space-x-7 flex-row flex z-50">
        {categories.map((category, index) => (
          <CategoryCard key={index} category={category.title} />
        ))}
      </div>
    </>
  );
};

export default CategoryDisplay;
