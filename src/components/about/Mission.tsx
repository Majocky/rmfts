import React from 'react';
import { Target, Heart, Book } from 'lucide-react';

export function Mission() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To equip believers with sound biblical knowledge and practical ministry skills for effective service in God\'s kingdom.',
    },
    {
      icon: Heart,
      title: 'Our Vision',
      description: 'To be a leading institution in biblical education, forming transformed leaders who impact their communities with God\'s truth.',
    },
    {
      icon: Book,
      title: 'Our Values',
      description: 'Biblical truth, spiritual formation, academic excellence, and practical ministry preparation guide everything we do.',
    },
  ];

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Purpose</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Mission, Vision, and Values
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="flex flex-col items-center text-center">
                <dt className="flex flex-col items-center gap-y-4">
                  <value.icon
                    className="h-12 w-12 text-indigo-600"
                    aria-hidden="true"
                  />
                  <h3 className="text-xl font-semibold leading-7 text-gray-900">{value.title}</h3>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{value.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}