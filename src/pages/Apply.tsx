import React from 'react';
import { ApplicationForm } from '../components/admissions/ApplicationForm';

export function Apply() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Application Form
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Please fill out all required information. Our admissions team will review your
              application and contact you within 5-7 business days.
            </p>
          </div>
          <div className="mt-12 bg-white px-6 py-8 shadow sm:rounded-lg sm:px-10">
            <ApplicationForm />
          </div>
        </div>
      </div>
    </div>
  );
}