import React, { useState, useMemo } from 'react';
import { CourseCard } from '../components/courses/CourseCard';
import { CourseFilter } from '../components/courses/CourseFilter';
import { courses } from '../data/courses';
import { Course } from '../types/course';

export function Courses() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');

  const categories = useMemo(() => 
    Array.from(new Set(courses.map((course) => course.category))),
    []
  );

  const levels = useMemo(() => 
    Array.from(new Set(courses.map((course) => course.level))),
    []
  );

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const categoryMatch = !selectedCategory || course.category === selectedCategory;
      const levelMatch = !selectedLevel || course.level === selectedLevel;
      return categoryMatch && levelMatch;
    });
  }, [selectedCategory, selectedLevel]);

  return (
    <div className="bg-gray-50">
      {/* Hero section */}
      <div className="relative bg-indigo-600">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover opacity-20"
            src="https://images.unsplash.com/photo-1513077202514-c511b41bd4c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
            alt="Students studying"
          />
          <div className="absolute inset-0 bg-indigo-600 mix-blend-multiply" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Courses
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-indigo-100">
            Discover our comprehensive range of biblical and theological courses designed to deepen
            your understanding and prepare you for ministry.
          </p>
        </div>
      </div>

      {/* Course listing section */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 sm:py-24">
          {/* Filters */}
          <div className="mb-12">
            <CourseFilter
              categories={categories}
              levels={levels}
              selectedCategory={selectedCategory}
              selectedLevel={selectedLevel}
              onCategoryChange={setSelectedCategory}
              onLevelChange={setSelectedLevel}
            />
          </div>

          {/* Course grid */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          {/* Empty state */}
          {filteredCourses.length === 0 && (
            <div className="text-center">
              <p className="mt-4 text-gray-500">No courses match your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}