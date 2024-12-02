import React from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { ContactInfo as ContactInfoType } from '../../types/contact';

interface ContactInfoProps {
  info: ContactInfoType;
}

export function ContactInfo({ info }: ContactInfoProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-start space-x-3">
        <MapPin className="h-6 w-6 flex-shrink-0 text-indigo-600" />
        <div>
          <h3 className="text-sm font-medium text-gray-900">Address</h3>
          <p className="mt-1 text-sm text-gray-600">{info.address}</p>
        </div>
      </div>

      <div className="flex items-start space-x-3">
        <Mail className="h-6 w-6 flex-shrink-0 text-indigo-600" />
        <div>
          <h3 className="text-sm font-medium text-gray-900">Email</h3>
          <a
            href={`mailto:${info.email}`}
            className="mt-1 block text-sm text-indigo-600 hover:text-indigo-500"
          >
            {info.email}
          </a>
        </div>
      </div>

      <div className="flex items-start space-x-3">
        <Phone className="h-6 w-6 flex-shrink-0 text-indigo-600" />
        <div>
          <h3 className="text-sm font-medium text-gray-900">Phone</h3>
          <a
            href={`tel:${info.phone}`}
            className="mt-1 block text-sm text-indigo-600 hover:text-indigo-500"
          >
            {info.phone}
          </a>
        </div>
      </div>

      <div className="flex items-start space-x-3">
        <Clock className="h-6 w-6 flex-shrink-0 text-indigo-600" />
        <div>
          <h3 className="text-sm font-medium text-gray-900">Hours</h3>
          <dl className="mt-1 space-y-1 text-sm text-gray-600">
            {info.hours.map((schedule) => (
              <div key={schedule.days} className="flex justify-between">
                <dt className="font-medium">{schedule.days}</dt>
                <dd>{schedule.hours}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}