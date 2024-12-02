import React from 'react';
import { Clock, GraduationCap } from 'lucide-react';
import { Program } from '../../types/admission';
import { Link } from 'react-router-dom';

interface ProgramCardProps {
  program: Program;
}

export function ProgramCard({ program }: ProgramCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="px-6 py-8">
        <div>
          <span className="inline-flex rounded-full bg-indigo-100 px-3 py-1 text-sm font-semibold text-indigo-800">
            {program.type}
          </span>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-gray-900">{program.name}</h3>
          <div className="mt-4 flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="mr-1.5 h-4 w-4 flex-shrink-0" />
              {program.duration}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <GraduationCap className="mr-1.5 h-4 w-4 flex-shrink-0" />
              {program.requirements.length} Requirements
            </div>
          </div>
        </div>
        <div className="mt-6">
          <Link
            to="/admissions/apply"
            className="block w-full rounded-md bg-indigo-600 px-4 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
}