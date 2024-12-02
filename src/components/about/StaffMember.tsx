import React from 'react';

interface StaffMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export function StaffMember({ name, role, image, bio }: StaffMemberProps) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <img
        className="h-40 w-40 rounded-full object-cover"
        src={image}
        alt={name}
      />
      <div className="text-center">
        <h3 className="text-lg font-medium text-gray-900">{name}</h3>
        <p className="text-sm text-indigo-600">{role}</p>
      </div>
      <p className="text-center text-gray-600">{bio}</p>
    </div>
  );
}