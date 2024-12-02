import React from 'react';
import { Check, AlertCircle } from 'lucide-react';
import { AdmissionRequirement } from '../../types/admission';

interface RequirementsListProps {
  requirements: AdmissionRequirement[];
}

export function RequirementsList({ requirements }: RequirementsListProps) {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-medium leading-6 text-gray-900">
        Admission Requirements
      </h3>
      <div className="mt-6 space-y-6">
        {requirements.map((requirement) => (
          <div key={requirement.id} className="flex">
            <div className="flex-shrink-0">
              {requirement.required ? (
                <Check className="h-6 w-6 text-green-500" />
              ) : (
                <AlertCircle className="h-6 w-6 text-yellow-500" />
              )}
            </div>
            <div className="ml-3">
              <h4 className="text-base font-medium text-gray-900">{requirement.title}</h4>
              <p className="mt-2 text-sm text-gray-500">{requirement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}