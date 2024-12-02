import React from 'react';
import { ArrowRight, BookOpen, Users, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  const features = [
    {
      name: 'Biblical Education',
      description: 'Comprehensive theological training rooted in Scripture',
      icon: BookOpen,
    },
    {
      name: 'Community',
      description: 'Join a vibrant community of believers and learners',
      icon: Users,
    },
    {
      name: 'Flexible Programs',
      description: 'Study options that fit your schedule and calling',
      icon: Calendar,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
            alt="Students studying"
          />
          <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply" />
        </div>
        <div className="relative">
          <div className="mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Transform Your Life Through Biblical Education
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-gray-300">
              Join our community of believers dedicated to deep biblical study and spiritual growth.
              Discover your calling and prepare for impactful ministry.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/admissions"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Apply Now
              </Link>
              <Link
                to="/courses"
                className="text-sm font-semibold leading-6 text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Why Choose Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to grow in faith and ministry
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon
                      className="h-5 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}