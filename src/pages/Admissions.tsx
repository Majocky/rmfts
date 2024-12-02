import React from 'react';
import { Link } from 'react-router-dom';
import { RequirementsList } from '../components/admissions/RequirementsList';
import { ProgramCard } from '../components/admissions/ProgramCard';
import { requirements, programs } from '../data/admissions';

export function Admissions() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
            alt="Students walking on campus"
          />
          <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply" />
        </div>
        <div className="relative">
          <div className="mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Begin Your Journey
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-gray-300">
              Take the first step towards your calling. Our admissions team is here to guide you
              through the application process and help you find the right program.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/admissions/apply"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Apply Now
              </Link>
              <a
                href="#requirements"
                className="text-sm font-semibold leading-6 text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Programs section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Programs</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Choose Your Path
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We offer various programs designed to equip you for ministry and leadership in the church
              and beyond.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-3">
            {programs.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </div>

      {/* Requirements section */}
      <div id="requirements" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Requirements</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Admission Requirements
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Review our admission requirements and ensure you have all necessary documents ready
              before starting your application.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20">
            <RequirementsList requirements={requirements} />
          </div>
        </div>
      </div>
    </div>
  );
}