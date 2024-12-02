import React from 'react';
import { Course } from '../../types/course';

interface CourseFilterProps {
  categories: string[];
  levels: string[];
  selectedCategory: string;
  selectedLevel: string;
  onCategoryChange: (category: string) => void;
  onLevelChange: (level: string) => void;
}

export function CourseFilter({
  categories,
  levels,
  selectedCategory,
  selectedLevel,
  onCategoryChange,
  onLevelChange,
}: CourseFilterProps) {
  return (
    <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
          Category
        </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="level" className="block text-sm font-medium text-gray-700">
          Level
        </label>
        <select
          id="level"
          value={selectedLevel}
          onChange={(e) => onLevelChange(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">All Levels</option>
          {levels.map((level) => (
            <option key={level} value={level}>
              {level}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}