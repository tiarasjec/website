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
      <div className="w-maxPhone h-fit justify-center items-center flex flex-wrap sm:gap-x-5 sm:w-maxPage sm:overflow-x-hidden z-10 gap-y-7 md:scroll-y-hidden">
        {categories.map((category, index) => (
          <CategoryCard key={index} category={category.title} />
        ))}
      </div>
    </>
  );
};

export default CategoryDisplay;
