import React, { useState } from 'react';
import { programs } from '../../data/admissions';
import type { ApplicationForm as ApplicationFormType } from '../../types/admission';

export function ApplicationForm() {
  const [formData, setFormData] = useState<ApplicationFormType>({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      address: '',
    },
    education: {
      highestDegree: '',
      institution: '',
      graduationYear: '',
    },
    program: {
      selectedProgram: '',
      startTerm: '',
    },
    documents: {
      transcripts: [],
      recommendations: [],
      statement: [],
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Personal Information */}
      <div>
        <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={formData.personalInfo.firstName}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  personalInfo: { ...formData.personalInfo, firstName: e.target.value },
                })
              }
            />
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={formData.personalInfo.lastName}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  personalInfo: { ...formData.personalInfo, lastName: e.target.value },
                })
              }
            />
          </div>

          <div className="sm:col-span-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={formData.personalInfo.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  personalInfo: { ...formData.personalInfo, email: e.target.value },
                })
              }
            />
          </div>
        </div>
      </div>

      {/* Program Selection */}
      <div>
        <h3 className="text-lg font-medium leading-6 text-gray-900">Program Selection</h3>
        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label htmlFor="program" className="block text-sm font-medium text-gray-700">
              Program
            </label>
            <select
              id="program"
              name="program"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={formData.program.selectedProgram}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  program: { ...formData.program, selectedProgram: e.target.value },
                })
              }
            >
              <option value="">Select a program</option>
              {programs.map((program) => (
                <option key={program.id} value={program.id}>
                  {program.name}
                </option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="startTerm" className="block text-sm font-medium text-gray-700">
              Start Term
            </label>
            <select
              id="startTerm"
              name="startTerm"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              value={formData.program.startTerm}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  program: { ...formData.program, startTerm: e.target.value },
                })
              }
            >
              <option value="">Select a term</option>
              <option value="fall-2024">Fall 2024</option>
              <option value="spring-2025">Spring 2025</option>
              <option value="fall-2025">Fall 2025</option>
            </select>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="submit"
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit Application
          </button>
        </div>
      </div>
    </form>
  );
}