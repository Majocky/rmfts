import React from 'react';
import { Clock, GraduationCap, BookOpen } from 'lucide-react';
import { Course } from '../../types/course';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover" src={course.image} alt={course.title} />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">
            {course.category}
          </p>
          <div className="mt-2">
            <h3 className="text-xl font-semibold text-gray-900">{course.title}</h3>
            <p className="mt-3 text-base text-gray-500">{course.description}</p>
          </div>
        </div>
        <div className="mt-6">
          <div className="flex items-center space-x-6">
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="mr-1.5 h-4 w-4 flex-shrink-0" />
              {course.duration}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <GraduationCap className="mr-1.5 h-4 w-4 flex-shrink-0" />
              {course.level}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <BookOpen className="mr-1.5 h-4 w-4 flex-shrink-0" />
              {course.credits} Credits
            </div>
          </div>
          <div className="mt-4">
            <button className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}