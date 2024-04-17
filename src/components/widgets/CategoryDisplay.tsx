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
      <div className="w-maxPhone h-fit overflow-y-scroll justify-center items-center flex-col sm:flex-row flex z-0 gap-y-7">
        {categories.map((category, index) => (
          <CategoryCard key={index} category={category.title} />
        ))}
      </div>
    </>
  );
};

export default CategoryDisplay;
