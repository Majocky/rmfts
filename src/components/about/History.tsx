import React from 'react';

export function History() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Journey</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            A Legacy of Biblical Education
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Since our founding in 1950, Grace Bible School has been committed to providing excellent
            biblical education and spiritual formation to prepare leaders for ministry.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <span className="text-white">1950</span>
                </div>
                Foundation
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Established with a vision to provide sound biblical training for ministry leaders.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <span className="text-white">1975</span>
                </div>
                Growth
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Expanded programs and facilities to accommodate growing student body.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <span className="text-white">2000</span>
                </div>
                Innovation
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Introduced online learning options while maintaining our commitment to excellence.
              </dd>
            </div>
            <div className="relative pl-16">
              <dt className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <span className="text-white">Today</span>
                </div>
                Impact
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                Thousands of graduates serving in ministry roles worldwide.
              </dd>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}